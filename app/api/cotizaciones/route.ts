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
      subject: `Nueva solicitud de cotización - ${data.company || data.name}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>

        <p><strong>Nombre:</strong> ${data.name || "No indicado"}</p>
        <p><strong>Empresa:</strong> ${data.company || "No indicada"}</p>
        <p><strong>Contacto:</strong> ${data.contact || "No indicado"}</p>

        <hr />

        <p><strong>Operación:</strong> ${data.operation || "No indicada"}</p>
        <p><strong>Transporte:</strong> ${data.transport || "No indicado"}</p>
        <p><strong>Origen:</strong> ${data.origin || "No indicado"}</p>
        <p><strong>Destino:</strong> ${data.destination || "No indicado"}</p>
        <p><strong>Mercancía:</strong> ${data.merchandise || "No indicada"}</p>
        <p><strong>Peso / volumen:</strong> ${data.weight || "No indicado"}</p>

        <hr />

        <p>Solicitud generada desde el asistente web de Traficargo.</p>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No se pudo enviar la solicitud por correo.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente al equipo de Traficargo.",
    });
  } catch (error) {
    console.error("Error al recibir cotización:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
