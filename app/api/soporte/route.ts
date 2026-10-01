import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { error } = await resend.emails.send({
      from: "Asistente Traficargo <notificaciones@traficargo.com.mx>",
      to: [
        "marketing@traficargo.com.mx",
        "ventas@traficargo.com.mx",
        "arascon@traficargo.com.mx",
      ],
      subject: `Solicitud de ayuda con operación - ${data.company || data.name}`,
      html: `
        <h2>Solicitud de ayuda con una operación</h2>

        <p><strong>Referencia de operación:</strong> ${data.reference || "No indicada"}</p>
        <p><strong>Nombre:</strong> ${data.name || "No indicado"}</p>
        <p><strong>Empresa:</strong> ${data.company || "No indicada"}</p>
        <p><strong>Contacto:</strong> ${data.contact || "No indicado"}</p>

        <hr />

        <p><strong>Situación / apoyo solicitado:</strong></p>
        <p>${data.problem || "No indicado"}</p>

        <hr />

        <p>Solicitud generada desde el asistente web de Traficargo.</p>
      `,
    });

    if (error) {
      console.error("Error de Resend en soporte:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No se pudo enviar la solicitud de ayuda.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud de ayuda enviada correctamente.",
    });
  } catch (error) {
    console.error("Error al procesar solicitud de ayuda:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo procesar la solicitud de ayuda.",
      },
      { status: 500 }
    );
  }
}
