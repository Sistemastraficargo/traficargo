import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  let language: "es" | "en" = "es";
  try {
    const data = await request.json();
    const message = data?.message;
    language = data?.language === "en" ? "en" : "es";
    if (!message || typeof message !== "string") {
      return NextResponse.json({success:false, message: language === "en" ? "Please enter a question." : "Escribe una pregunta."}, {status:400});
    }
    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      store: false,
      instructions: `You are the virtual assistant for Traficargo Internacional, a Mexican international logistics company.
Services: LCL/FCL ocean freight, air freight, FTL/LTL ground freight, last-mile delivery, customs brokerage, cargo insurance, cargo handling, imports and exports.
Respond ONLY in ${language === "en" ? "professional, clear English" : "professional, clear Spanish"}. Be concise, friendly, and helpful.
Never invent rates, exact transit times, availability, routes, or specific customs requirements without sufficient information. Never present estimates as official quotes. Ask one concrete clarifying question if needed. For pricing, suggest submitting a quote request. For specific commercial, customs, or operational matters, refer to a Traficargo advisor. Identify yourself only as Traficargo's virtual assistant.`,
      input: message,
    });
    return NextResponse.json({success:true, answer:response.output_text});
  } catch (error) {
    console.error("Error en asistente Traficargo:", error);
    return NextResponse.json({success:false, message: language === "en" ? "The assistant is temporarily unavailable." : "El asistente no está disponible por el momento."}, {status:500});
  }
}
