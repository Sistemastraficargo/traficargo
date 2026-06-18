"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useAnimationControls,
  useMotionValueEvent,
} from "framer-motion";

export default function ServicioMaritimo() {
  const { scrollY } = useScroll();

  const shipControls = useAnimationControls();
  const shipSent = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 900) {
      shipSent.current = false;

      shipControls.set({
        x: 0,
        y: latest * 0.35,
        rotate: 0,
        opacity: 1,
      });
    }

    if (latest >= 900 && latest < 1150) {
      shipControls.set({
        x: -120,
        y: 315,
        rotate: 0,
        opacity: 1,
      });
    }

    if (latest >= 1150 && !shipSent.current) {
      shipSent.current = true;

      shipControls.start({
        x: -2200,
        y: 315,
        rotate: -14,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      });
    }
  });

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
<motion.img
  src="/barco-maritimo.png"
  alt="Barco Traficargo"
  initial={{
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
  }}
  animate={shipControls}
  className="
  fixed
  top-[220px]
  right-[-250px]
  w-[420px]
  md:w-[850px]
  z-40
  pointer-events-none
  drop-shadow-[0_0_60px_rgba(34,211,238,0.25)]
  "
/>

      {/* NAVBAR SIMPLE */}
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

  {/* VIDEO FIJO */}
  <div className="fixed inset-0 z-0">

    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
    >
      <source src="/maritimo.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-black/75" />

  </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            Servicio marítimo
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            Transporte Marítimo Internacional
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            Movemos sus cargas en condiciones LCL y FCL desde cualquier origen
            y hacia cualquier destino, respaldados por una red de agentes
            internacionales y alianzas estratégicas con los principales
            transportistas.
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
            Soluciones marítimas para cada operación
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                title: "LCL",
                text: "Carga consolidada ideal para embarques de menor volumen."
              },
              {
                title: "FCL",
                text: "Contenedor completo exclusivo para su mercancía."
              },
              {
                title: "Importación",
                text: "Gestión integral desde cualquier origen internacional."
              },
              {
                title: "Exportación",
                text: "Soluciones marítimas para mercados globales."
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
    {/* contenido */}

      {/* COBERTURA */}
      <section className="py-5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Cobertura global
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Desde cualquier origen hacia cualquier destino
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Independientemente del Incoterm que se tenga, contamos con una red
              de agentes internacionales que nos respaldan con un servicio de
              calidad.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              Nuestra operación marítima está diseñada para brindar seguridad,
              coordinación y visibilidad durante todo el proceso logístico.
            </p>
          </div>

          <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/[0.03] p-6">
            <img
              src="/centro-maritimo.png"
              alt="Cobertura global"
              className="w-full rounded-[30px] opacity-80"
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
            ¿Por qué elegir nuestro servicio marítimo?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Red internacional",
                text: "Agentes estratégicos en puntos clave para coordinar operaciones globales."
              },
              {
                title: "Flexibilidad operativa",
                text: "Soluciones adaptadas a diferentes Incoterms, volúmenes y necesidades de carga."
              },
              {
                title: "Visibilidad de carga",
                text: "Seguimiento y comunicación constante durante el proceso logístico."
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
      Así movemos su carga
    </h2>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Solicitud",
        "Planeación",
        "Coordinación",
        "Transporte",
        "Entrega"
      ].map((step, index) => (
        <div
          key={step}
          className="relative p-8 rounded-[30px] bg-white/[0.03] border border-cyan-400/10"
        >
          <span className="text-cyan-400 text-sm">
            0{index + 1}
          </span>

          <h3 className="text-xl font-bold mt-3">
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
      ¿Listo para mover su carga marítima?
    </h2>

    <p className="text-white/60 text-lg mb-10">
      Nuestros especialistas están preparados para diseñar una solución
      marítima adaptada a su operación.
    </p>

    <a
      href="/#cotizar"
      className="inline-flex bg-cyan-700 hover:bg-cyan-600 transition px-10 py-5 rounded-full font-bold"
    >
      Solicitar cotización
    </a>

  </div>
</section>

  {/* FOOTER SIMPLE */}
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