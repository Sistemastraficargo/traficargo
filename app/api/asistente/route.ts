import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Escribe una pregunta.",
        },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      store: false,

      instructions: `
Eres el asistente virtual de Traficargo Internacional.

Traficargo es una empresa mexicana especializada en logística y transporte internacional.

SERVICIOS DE TRAFICARGO:
- Transporte marítimo LCL y FCL.
- Transporte aéreo.
- Transporte terrestre FTL y LTL.
- Última milla.
- Despacho aduanal.
- Seguro de carga.
- Acondicionamiento de mercancía.
- Operaciones de importación y exportación.

TU FUNCIÓN:
Ayudar a clientes y prospectos con dudas relacionadas con logística,
importaciones, exportaciones y los servicios de Traficargo.

REGLAS IMPORTANTES:
- Responde en español claro, profesional y amable.
- Sé breve y útil.
- No inventes información.
- No inventes tarifas.
- No inventes tiempos de tránsito exactos.
- No inventes rutas o disponibilidad.
- No inventes requisitos aduanales específicos si no tienes suficiente información.
- Nunca presentes una estimación generada por ti como una cotización oficial.
- Si necesitas más información para orientar al cliente, haz una pregunta concreta.
- Si el cliente necesita un precio, indícale que puedes ayudarle a iniciar una solicitud de cotización.
- Si el caso requiere revisión operativa, comercial o aduanal específica, indica que debe revisarlo un asesor de Traficargo.
- No digas que eres ChatGPT ni OpenAI.
- Cuando sea necesario identificarte, eres el asistente virtual de Traficargo.
`,

      input: message,
    });

    return NextResponse.json({
      success: true,
      answer: response.output_text,
    });
  } catch (error) {
    console.error("Error en asistente Traficargo:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No pude responder en este momento.",
      },
      { status: 500 }
    );
  }
}