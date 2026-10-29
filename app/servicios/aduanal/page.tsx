"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import { useSiteLanguage } from "../../components/useSiteLanguage";

export default function ServicioAduanal() {
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
            <source src="/aduanal.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            {tx("Despacho aduanal", "Customs Brokerage")}
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            {tx("Control, cumplimiento", "Control, Compliance")}
            <br />
            {tx("y liberación", "and Clearance")}
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            {tx("Coordinamos sus operaciones de importación y exportación cuidando la documentación, validación, cumplimiento y liberación de mercancías.", "We coordinate import and export operations, overseeing documentation, validation, compliance, and cargo clearance.")}
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
            {tx("Soluciones aduanales para cada operación", "Customs Solutions for Every Shipment")}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: tx("Importación", "Imports"),
                text: tx("Gestión documental y coordinación para ingreso de mercancías.", "Documentation management and coordination for inbound cargo.")
              },
              {
                title: tx("Exportación", "Exports"),
                text: tx("Soporte operativo para salida de mercancías hacia mercados internacionales.", "Operational support for exports to international markets.")
              },
              {
                title: tx("Revisión documental", "Document Review"),
                text: tx("Validación de información necesaria para una operación ordenada.", "Verification of information needed for an orderly shipment.")
              },
              {
                title: tx("Coordinación aduanal", "Customs Coordination"),
                text: tx("Seguimiento con actores clave durante el proceso de liberación.", "Coordination with key parties throughout the clearance process.")
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

          {/* OPERACIÓN */}
          <section className="py-5 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                  {tx("Operación aduanal", "Customs Operations")}
                </p>

                <h2 className="text-4xl md:text-6xl font-black mb-8">
                  {tx("Documentación, validación y liberación", "Documentation, Validation, and Clearance")}
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {tx("Coordinamos procesos aduanales cuidando la documentación, los tiempos operativos y la comunicación con el cliente durante cada etapa.", "We coordinate customs processes, managing documentation, operational timing, and customer communication at every stage.")}
                </p>

                <p className="text-white/70 text-lg leading-relaxed">
                  {tx("Nuestro enfoque está orientado a reducir fricción operativa, mantener visibilidad y facilitar el flujo de mercancías.", "Our approach reduces operational friction, maintains visibility, and facilitates the movement of goods.")}
                </p>
              </div>

              <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/[0.03] p-6">
                <img
                  src="/despacho-aduanal.jpg"
                  alt="Despacho aduanal Traficargo"
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
                {tx("¿Por qué elegir nuestro despacho aduanal?", "Why Choose Our Customs Brokerage?")}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: tx("Cumplimiento", "Compliance"),
                    text: tx("Procesos alineados a los requerimientos aplicables de comercio exterior.", "Processes aligned with applicable foreign-trade requirements.")
                  },
                  {
                    title: tx("Menos fricción", "Fewer Delays"),
                    text: tx("Coordinación clara para reducir retrasos, errores y reprocesos.", "Clear coordination to reduce delays, errors, and rework.")
                  },
                  {
                    title: tx("Visibilidad", "Visibility"),
                    text: tx("Comunicación y seguimiento durante el proceso aduanal.", "Communication and tracking throughout customs clearance.")
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

          {/* PROCESO */}
          <section className="relative z-10 py-5 px-6">
            <div className="max-w-7xl mx-auto p-8 md:p-16 text-center">

              <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                {tx("Proceso", "Our Process")}
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                {tx("Así liberamos su mercancía", "Our Cargo Clearance Process")}
              </h2>

              <div className="grid md:grid-cols-5 gap-6">
   {[
  tx("Recepción documental", "Document Receipt"),
  tx("Revisión", "Inspection"),
  tx("Validación", "Validation"),
  tx("Despacho", "Customs Processing"),
  tx("Liberación", "Release")
].map((step, index) => (
                  <div
                    key={step}
                    className="
relative
p-8
min-h-[180px]
rounded-[30px]
bg-white/[0.03]
border
border-cyan-400/10
flex
flex-col
justify-center
"
                  >
                    <span className="text-cyan-400 text-sm">
                      0{index + 1}
                    </span>

                    <h3 className="text-base md:text-lg font-bold mt-3 leading-tight">
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
            {tx("¿Necesita liberar su mercancía?", "Need Customs Clearance?")}
          </h2>

          <p className="text-white/60 text-lg mb-10">
            {tx("Nuestro equipo puede apoyarle con la coordinación aduanal de su operación.", "Our team can help coordinate customs clearance for your shipment.")}
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