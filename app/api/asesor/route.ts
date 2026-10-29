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
      subject: `Solicitud de contacto con asesor - ${String(data.company || data.name || "Sin nombre").replace(/[\r\n]/g," ")}`,
      html: `<h2>Solicitud de contacto con un asesor</h2>
<p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Empresa:</strong> ${escapeHtml(data.company)}</p>
<p><strong>Contacto:</strong> ${escapeHtml(data.contact)}</p>
<p><strong>Motivo de contacto:</strong> ${escapeHtml(data.problem)}</p>
<hr/><p>Solicitud generada desde el asistente web de Traficargo.</p>`,
    });
    if (error) { console.error("Resend error:", error); return NextResponse.json({success:false, message: language === "en" ? "Unable to submit the advisor request." : "No se pudo enviar la solicitud al asesor."}, {status:500}); }
    return NextResponse.json({success:true, message: language === "en" ? "Advisor request submitted successfully." : "Solicitud de asesor enviada correctamente."});
  } catch(error) {
    console.error("Error procesando solicitud:", error);
    return NextResponse.json({success:false, message: language === "en" ? "Unable to process your request." : "No se pudo procesar la solicitud."}, {status:500});
  }
}
