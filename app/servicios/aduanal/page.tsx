"use client";

import Link from "next/link";

export default function ServicioAduanal() {
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
            <source src="/aduanal.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            Despacho aduanal
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            Control, cumplimiento
            <br />
            y liberación
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            Coordinamos sus operaciones de importación y exportación cuidando
            la documentación, validación, cumplimiento y liberación de mercancías.
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
            Soluciones aduanales para cada operación
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Importación",
                text: "Gestión documental y coordinación para ingreso de mercancías."
              },
              {
                title: "Exportación",
                text: "Soporte operativo para salida de mercancías hacia mercados internacionales."
              },
              {
                title: "Revisión documental",
                text: "Validación de información necesaria para una operación ordenada."
              },
              {
                title: "Coordinación aduanal",
                text: "Seguimiento con actores clave durante el proceso de liberación."
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
                  Operación aduanal
                </p>

                <h2 className="text-4xl md:text-6xl font-black mb-8">
                  Documentación, validación y liberación
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Coordinamos procesos aduanales cuidando la documentación,
                  los tiempos operativos y la comunicación con el cliente durante
                  cada etapa.
                </p>

                <p className="text-white/70 text-lg leading-relaxed">
                  Nuestro enfoque está orientado a reducir fricción operativa,
                  mantener visibilidad y facilitar el flujo de mercancías.
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
                Beneficios
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                ¿Por qué elegir nuestro despacho aduanal?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cumplimiento",
                    text: "Procesos alineados a los requerimientos aplicables de comercio exterior."
                  },
                  {
                    title: "Menos fricción",
                    text: "Coordinación clara para reducir retrasos, errores y reprocesos."
                  },
                  {
                    title: "Visibilidad",
                    text: "Comunicación y seguimiento durante el proceso aduanal."
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
                Proceso
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-16">
                Así liberamos su mercancía
              </h2>

              <div className="grid md:grid-cols-5 gap-6">
   {[
  "Recepción documental",
  "Revisión",
  "Validación",
  "Despacho",
  "Liberación"
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
            ¿Necesita liberar su mercancía?
          </h2>

          <p className="text-white/60 text-lg mb-10">
            Nuestro equipo puede apoyarle con la coordinación aduanal de su operación.
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