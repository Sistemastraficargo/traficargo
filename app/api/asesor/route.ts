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
      subject: `Solicitud de contacto con asesor - ${data.company || data.name}`,
      html: `
        <h2>Solicitud de contacto con un asesor</h2>

        <p><strong>Nombre:</strong> ${data.name || "No indicado"}</p>
        <p><strong>Empresa:</strong> ${data.company || "No indicada"}</p>
        <p><strong>Contacto:</strong> ${data.contact || "No indicado"}</p>

        <hr />

        <p><strong>Motivo de contacto:</strong></p>
        <p>${data.problem || "No indicado"}</p>

        <hr />

        <p>Solicitud generada desde el asistente web de Traficargo.</p>
      `,
    });

    if (error) {
      console.error("Error de Resend en asesor:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No se pudo enviar la solicitud al asesor.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud de asesor enviada correctamente.",
    });
  } catch (error) {
    console.error("Error al procesar solicitud de asesor:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
