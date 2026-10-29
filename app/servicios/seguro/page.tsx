"use client";

import Link from "next/link";
import { useSiteLanguage } from "../../components/useSiteLanguage";

export default function ServicioSeguro() {
  const language = useSiteLanguage();
  const tx = (es: string, en: string) => language === "en" ? en : es;
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
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/seguro.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            {tx("Seguro de carga", "Cargo Insurance")}
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            {tx("Protección para", "Protection for")}
            <br />
            {tx("su mercancía", "Your Cargo")}
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            {tx("Brindamos soluciones de protección para acompañar su carga durante cada etapa de la operación logística.", "We offer cargo protection solutions throughout every stage of your logistics operation.")}
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/#cotizar"
              className="bg-cyan-700 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-semibold"
            >
              {tx("Solicitar cotización", "Request a Quote")}
            </a>

            <a
              href="/#servicios"
              className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full"
            >
              {tx("Ver otros servicios", "Explore Other Services")}
            </a>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="py-5 px-6 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            {tx("Modalidades", "Service Options")}
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-16">
            {tx("Protección para cada tipo de operación", "Protection for Every Type of Shipment")}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: tx("Cobertura internacional", "International Coverage"),
                text: tx("Protección para operaciones globales.", "Protection for global shipments.")
              },
              {
                title: tx("Marítimo", "Ocean Freight"),
                text: tx("Cobertura para embarques marítimos.", "Coverage for ocean shipments.")
              },
              {
                title: tx("Aéreo", "Air Freight"),
                text: tx("Protección para cargas urgentes o de alto valor.", "Protection for urgent or high-value cargo.")
              },
              {
                title: tx("Terrestre", "Ground Freight"),
                text: tx("Cobertura para movimientos nacionales e internacionales.", "Coverage for domestic and international transportation.")
              }
            ].map((item) => (
              <div
                key={item.title}
                className="
                p-8
                rounded-[30px]
                bg-white/[0.03]
                border
                border-cyan-400/10
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition
                duration-500
                "
              >
                <h3 className="text-3xl font-black text-cyan-400 mb-4">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative py-5">
        <div
          className="
          max-w-7xl
          mx-auto
          bg-black/40
          backdrop-blur-xl
          rounded-[50px]
          border border-cyan-400/10
          p-16
          "
        >

          {/* PROTECCIÓN */}
          <section className="py-5 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                  {tx("Protección logística", "Cargo Protection")}
                </p>

                <h2 className="text-4xl md:text-6xl font-black mb-8">
                  {tx("Respaldo para cada operación", "Coverage for Every Shipment")}
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {tx("Sabemos que cada embarque representa una inversión importante.", "We understand that every shipment represents a significant investment.")}
                </p>

                <p className="text-white/70 text-lg leading-relaxed">
                  {tx("Por ello ofrecemos alternativas de protección para acompañar su mercancía desde origen hasta destino, brindando tranquilidad durante todo el trayecto.", "That is why we offer protection options from origin to destination, giving you peace of mind throughout the journey.")}
                </p>
              </div>

              <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/[0.03] p-6">
                <img
                  src="/seguro-carga.jpg"
                  alt="Seguro de carga Traficargo"
                  className="w-full rounded-[30px] opacity-90"
                />

                <div className="absolute inset-0 bg-cyan-500/10 blur-[120px]" />
              </div>

            </div>
          </section>

          {/* BENEFICIOS */}
          <section className="py-5 px-6">
            <div className="max-w-7xl mx-auto">

              <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                {tx("Beneficios", "Benefits")}
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                {tx("¿Por qué proteger su mercancía?", "Why Protect Your Cargo?")}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: tx("Mayor tranquilidad", "Greater Peace of Mind"),
                    text: tx("Respaldo adicional durante el transporte.", "Additional protection during transportation.")
                  },
                  {
                    title: tx("Cobertura internacional", "International Coverage"),
                    text: tx("Protección para operaciones globales.", "Protection for global shipments.")
                  },
                  {
                    title: tx("Continuidad operativa", "Business Continuity"),
                    text: tx("Reducción del impacto ante imprevistos.", "Helps reduce the impact of unexpected events.")
                  }
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-10 rounded-[35px] bg-white/[0.03] border border-cyan-400/10"
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      {benefit.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* RIESGOS */}
          <section className="py-5 px-6">
            <div className="max-w-7xl mx-auto">

              <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                {tx("Riesgos", "Risks")}
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                {tx("Protección ante imprevistos logísticos", "Protection Against Unexpected Logistics Risks")}
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  tx("Daños durante transporte", "Damage in Transit"),
                  tx("Manipulación de carga", "Cargo Handling"),
                  tx("Eventos imprevistos", "Unexpected Events"),
                  tx("Pérdidas operativas", "Operational Losses")
                ].map((item) => (
                  <div
                    key={item}
                    className="
                    p-8
                    rounded-[30px]
                    bg-white/[0.03]
                    border
                    border-cyan-400/10
                    text-center
                    "
                  >
                    <h3 className="text-xl font-bold leading-tight">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* PROCESO */}
          <section className="relative z-10 py-5 px-6">
            <div className="max-w-7xl mx-auto p-8 md:p-16 text-center">

              <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                {tx("Proceso", "Our Process")}
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                {tx("Así protegemos su mercancía", "How We Protect Your Cargo")}
              </h2>

              <div className="grid md:grid-cols-5 gap-6">
                {[
                  tx("Evaluación", "Assessment"),
                  tx("Cotización", "Quotation"),
                  tx("Contratación", "Policy Purchase"),
                  tx("Protección", "Protection"),
                  tx("Seguimiento", "Follow-Up")
                ].map((step, index) => (
                  <div
                    key={step}
                    className="
                    relative
                    min-h-[190px]
                    p-8
                    rounded-[30px]
                    bg-white/[0.03]
                    border
                    border-cyan-400/10
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    "
                  >
                    <span className="text-cyan-400 text-sm mb-4">
                      0{index + 1}
                    </span>

                    <h3 className="text-lg md:text-xl font-bold leading-tight max-w-[180px]">
                      {step}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-0 px-0">
        <div className="max-w-7xl mx-auto bg-[#04131d] border-cyan-400/10 p-8 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {tx("¿Desea proteger su mercancía?", "Want to Protect Your Cargo?")}
          </h2>

          <p className="text-white/60 text-lg mb-10">
            {tx("Nuestro equipo puede ayudarle a encontrar una solución de protección adecuada para su operación logística.", "Our team can help you find suitable cargo protection for your logistics operation.")}
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