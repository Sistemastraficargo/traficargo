"use client";

import Link from "next/link";

export default function ServicioSeguro() {
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
            Volver al inicio
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
            Seguro de carga
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            Protección para
            <br />
            su mercancía
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            Brindamos soluciones de protección para acompañar su carga durante
            cada etapa de la operación logística.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/#cotizar"
              className="bg-cyan-700 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-semibold"
            >
              Solicitar cotización
            </a>

            <a
              href="/#servicios"
              className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full"
            >
              Ver otros servicios
            </a>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="py-5 px-6 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Modalidades
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-16">
            Protección para cada tipo de operación
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Cobertura internacional",
                text: "Protección para operaciones globales."
              },
              {
                title: "Marítimo",
                text: "Cobertura para embarques marítimos."
              },
              {
                title: "Aéreo",
                text: "Protección para cargas urgentes o de alto valor."
              },
              {
                title: "Terrestre",
                text: "Cobertura para movimientos nacionales e internacionales."
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
                  Protección logística
                </p>

                <h2 className="text-4xl md:text-6xl font-black mb-8">
                  Respaldo para cada operación
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Sabemos que cada embarque representa una inversión importante.
                </p>

                <p className="text-white/70 text-lg leading-relaxed">
                  Por ello ofrecemos alternativas de protección para acompañar
                  su mercancía desde origen hasta destino, brindando tranquilidad
                  durante todo el trayecto.
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
                Beneficios
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                ¿Por qué proteger su mercancía?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Mayor tranquilidad",
                    text: "Respaldo adicional durante el transporte."
                  },
                  {
                    title: "Cobertura internacional",
                    text: "Protección para operaciones globales."
                  },
                  {
                    title: "Continuidad operativa",
                    text: "Reducción del impacto ante imprevistos."
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
                Riesgos
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                Protección ante imprevistos logísticos
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  "Daños durante transporte",
                  "Manipulación de carga",
                  "Eventos imprevistos",
                  "Pérdidas operativas"
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
                Proceso
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                Así protegemos su mercancía
              </h2>

              <div className="grid md:grid-cols-5 gap-6">
                {[
                  "Evaluación",
                  "Cotización",
                  "Contratación",
                  "Protección",
                  "Seguimiento"
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
            ¿Desea proteger su mercancía?
          </h2>

          <p className="text-white/60 text-lg mb-10">
            Nuestro equipo puede ayudarle a encontrar una solución de protección
            adecuada para su operación logística.
          </p>

          <a
            href="/#cotizar"
            className="inline-flex bg-cyan-700 hover:bg-cyan-600 transition px-10 py-5 rounded-full font-bold"
          >
            Solicitar cotización
          </a>

        </div>
      </section>

      <footer className="relative z-20 bg-[#04132d] border-t border-cyan-400/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-white/50 text-sm">
          <p>
            © 2026 TRAFICARGO INTERNACIONAL. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <Link href="/aviso-privacidad" className="hover:text-cyan-400">
              Aviso de Privacidad
            </Link>

            <Link href="/terminos-condiciones" className="hover:text-cyan-400">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}