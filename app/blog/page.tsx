"use client";

import Link from "next/link";
import { useState } from "react";
import { useSiteLanguage } from "../components/useSiteLanguage";
import { articulos } from "@/data/articulos";

export default function BlogPage() {
  const language = useSiteLanguage();
  const tx = (es: string, en: string) => language === "en" ? en : es;
  const [category, setCategory] = useState("Todos");
  const filtered = articulos.filter((item) => category === "Todos" || item.categoria === category);
  const categorias = [
    "Todos",
    "Marítimo",
    "Aéreo",
    "Terrestre",
    "Despacho aduanal",
    "Seguro",
    "Importación",
    "Exportación"
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Traficargo"
              className="h-14 object-contain"
            />
          </Link>

          <Link
            href="/"
            className="text-sm uppercase tracking-wider hover:text-cyan-400 transition"
          >
            {tx("Volver al inicio", "Back to Home")}
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32">
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/blog.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            {tx("Centro de conocimiento", "Knowledge Center")}
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            {tx("Noticias y artículos", "News and Articles")}
            <br />
            {tx("de comercio exterior", "on International Trade")}
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            {tx("Información sobre logística internacional, importación, exportación, transporte, despacho aduanal y protección de mercancías.", "Insights on international logistics, imports, exports, freight transportation, customs clearance, and cargo protection.")}
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="relative z-10 py-8 px-6 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categorias.map((categoria) => (
            <button
              key={language === "en" ? ({"Todos":"All", "Marítimo":"Ocean", "Aéreo":"Air", "Terrestre":"Ground", "Despacho aduanal":"Customs", "Seguro":"Insurance", "Importación":"Import", "Exportación":"Export"} as Record<string,string>)[categoria] ?? categoria : categoria}
              type="button"
              onClick={() => setCategory(categoria)}
              aria-pressed={category === categoria}
              className="
              px-6
              py-3
              rounded-full
              border
              border-cyan-400/10
              bg-white/[0.03]
              hover:border-cyan-400
              hover:text-cyan-400
              transition
              "
            >
              {language === "en" ? ({"Todos":"All", "Marítimo":"Ocean", "Aéreo":"Air", "Terrestre":"Ground", "Despacho aduanal":"Customs", "Seguro":"Insurance", "Importación":"Import", "Exportación":"Export"} as Record<string,string>)[categoria] ?? categoria : categoria}
            </button>
          ))}
        </div>
      </section>

      {/* ARTÍCULOS */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              {tx("Publicaciones recientes", "Latest Publications")}
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              {tx("Guías para tomar mejores decisiones logísticas", "Insights for Better Logistics Decisions")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((articulo) => (
              <Link
                key={articulo.slug}
                href={`/blog/${articulo.slug}`}
                className="
                group
                overflow-hidden
                rounded-[35px]
                bg-black/70
                border
                border-cyan-400/10
                hover:border-cyan-400/40
                transition
                duration-500
                "
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={articulo.imagen}
                    alt={language === "en" && "tituloEn" in articulo ? String(articulo.tituloEn) : articulo.titulo}
                    className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                    "
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-cyan-400 text-sm uppercase tracking-widest">
                      {articulo.categoria}
                    </span>

                    <span className="text-white/40 text-sm">
                      {articulo.fecha}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition">
                    {language === "en" && "tituloEn" in articulo ? String(articulo.tituloEn) : articulo.titulo}
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-6">
                    {language === "en" && "resumenEn" in articulo ? String(articulo.resumenEn) : articulo.resumen}
                  </p>

                  <span className="text-cyan-400 font-semibold">
                    {tx("Leer artículo →", "Read Article →")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-white/60 mt-10 text-center">{tx("Todavía no hay artículos publicados.", "No articles have been published yet.")}</p>}

        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-0 px-0">
        <div className="max-w-7xl mx-auto bg-[#04131d] border-cyan-400/10 p-8 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {tx("¿Necesita asesoría para su operación?", "Need Advice for Your Shipment?")}
          </h2>

          <p className="text-white/60 text-lg mb-10">
            {tx("Nuestro equipo puede ayudarle a diseñar una solución logística adaptada a su mercancía, origen y destino.", "Our team can help design a logistics solution tailored to your cargo, origin, and destination.")}
          </p>

          <a
            href="/#cotizar"
            className="inline-flex bg-cyan-700 hover:bg-cyan-600 transition px-10 py-5 rounded-full font-bold"
          >
            {tx("Solicitar cotización", "Request a Quote")}
          </a>

        </div>
      </section>

      <footer className="relative z-20 bg-[#04132d] border-t border-cyan-400/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-white/50 text-sm">
          <p>
            {tx("© 2026 TRAFICARGO INTERNACIONAL. Todos los derechos reservados.", "© 2026 TRAFICARGO INTERNACIONAL. All rights reserved.")}
          </p>

          <div className="flex gap-6">
            <Link href="/aviso-privacidad" className="hover:text-cyan-400">
              {tx("Aviso de Privacidad", "Privacy Notice")}
            </Link>

            <Link href="/terminos-condiciones" className="hover:text-cyan-400">
              {tx("Términos y Condiciones", "Terms and Conditions")}
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}