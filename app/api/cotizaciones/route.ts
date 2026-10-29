import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
function escapeHtml(value: unknown): string {
  return String(value ?? "No indicado").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c] ?? c));
}
export async function POST(request: Request) {
  let language: "es" | "en" = "es";
  try {
    const data = await request.json();
    language = data?.language === "en" ? "en" : "es";
    const { error } = await resend.emails.send({
      from: "Asistente Traficargo <notificaciones@traficargo.com.mx>",
      to: ["marketing@traficargo.com.mx", "ventas@traficargo.com.mx", "arascon@traficargo.com.mx"],
      subject: `Nueva solicitud de cotización - ${String(data.company || data.name || "Sin nombre").replace(/[\r\n]/g," ")}`,
      html: `<h2>Nueva solicitud de cotización</h2>
<p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Empresa:</strong> ${escapeHtml(data.company)}</p>
<p><strong>Contacto:</strong> ${escapeHtml(data.contact)}</p>
<p><strong>Operación:</strong> ${escapeHtml(data.operation)}</p>
<p><strong>Transporte:</strong> ${escapeHtml(data.transport)}</p>
<p><strong>Origen:</strong> ${escapeHtml(data.origin)}</p>
<p><strong>Destino:</strong> ${escapeHtml(data.destination)}</p>
<p><strong>Mercancía:</strong> ${escapeHtml(data.merchandise)}</p>
<p><strong>Peso / volumen:</strong> ${escapeHtml(data.weight)}</p>
<hr/><p>Solicitud generada desde el asistente web de Traficargo.</p>`,
    });
    if (error) { console.error("Resend error:", error); return NextResponse.json({success:false, message: language === "en" ? "Unable to send the quote request." : "No se pudo enviar la solicitud por correo."}, {status:500}); }
    return NextResponse.json({success:true, message: language === "en" ? "Your quote request has been submitted to the Traficargo team." : "Solicitud enviada correctamente al equipo de Traficargo."});
  } catch(error) {
    console.error("Error procesando solicitud:", error);
    return NextResponse.json({success:false, message: language === "en" ? "Unable to process your request." : "No se pudo procesar la solicitud."}, {status:500});
  }
}
