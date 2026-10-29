"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import { useSiteLanguage } from "../../components/useSiteLanguage";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useAnimationControls,
  useMotionValueEvent,
} from "framer-motion";

export default function ServicioTerrestre() {
  const language = useSiteLanguage();
  const tx = (es: string, en: string) => language === "en" ? en : es;
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
  src="/camion-terrestre.png"
  alt="Camión Traficargo"
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
            <source src="/terrestre.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            {tx("Servicio terrestre", "Ground Freight Service")}
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            {tx("Transporte Terrestre", "Ground Transportation")}
            <br />
            {tx("Nacional e Internacional", "Domestic and International")}
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            {tx("Ofrecemos servicios domésticos, LTL y FTL hacia USA y Centroamérica, cuidando siempre la visibilidad de su carga en todo momento.", "We offer domestic, LTL, and FTL transportation to the United States and Central America, with continuous cargo visibility.")}
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
      {tx("Soluciones terrestres para cada operación", "Ground Transportation Solutions for Every Shipment")}
    </h2>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        {
          title: "LTL",
          text: tx("Carga consolidada terrestre para embarques de menor volumen.", "Consolidated road freight for smaller shipments.")
        },
        {
          title: "FTL",
          text: tx("Unidad completa dedicada exclusivamente a su operación.", "A full truck dedicated exclusively to your shipment.")
        },
        {
          title: "USA",
          text: tx("Transporte terrestre hacia Estados Unidos con aliados estratégicos.", "Ground transportation to the United States through strategic partners.")
        },
        {
          title: tx("Centroamérica", "Central America"),
          text: tx("Soluciones terrestres para operaciones regionales.", "Ground transportation solutions for regional shipments.")
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

    {/* COBERTURA */}
    <section className="py-5 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            {tx("Cobertura terrestre", "Ground Transportation Coverage")}
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8">
            {tx("México, USA y Centroamérica", "Mexico, United States, and Central America")}
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-6">
            {tx("Nuestras alianzas con los principales transportistas nos permiten ofrecer servicios domésticos, LTL y FTL tanto a USA como a Centroamérica.", "Our partnerships with leading carriers enable domestic, LTL, and FTL services to the United States and Central America.")}
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            {tx("Coordinamos cada operación cuidando siempre la visibilidad de su carga en todo momento.", "We coordinate every shipment while maintaining cargo visibility throughout the journey.")}
          </p>
        </div>

        <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/[0.03] p-6">
          <img
            src="/centro-terrestre.jpg"
            alt="Cobertura terrestre"
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
          {tx("Beneficios", "Benefits")}
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-16">
          {tx("¿Por qué elegir nuestro servicio terrestre?", "Why Choose Our Ground Freight Service?")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: tx("Visibilidad de carga", "Cargo Visibility"),
              text: tx("Seguimiento de la operación durante todo el trayecto.", "Shipment tracking throughout the journey.")
            },
            {
              title: tx("Flexibilidad operativa", "Operational Flexibility"),
              text: tx("Opciones LTL, FTL y servicios domésticos según sus necesidades.", "LTL, FTL, and domestic options tailored to your needs.")
            },
            {
              title: tx("Red de transportistas", "Carrier Network"),
              text: tx("Alianzas estratégicas para rutas nacionales e internacionales.", "Strategic partnerships for domestic and international routes.")
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
          {tx("Así movemos su carga terrestre", "How We Move Your Cargo by Road")}
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            tx("Solicitud", "Request"),
            tx("Planeación", "Planning"),
            tx("Asignación", "Assignment"),
            tx("Transporte", "Transportation"),
            tx("Entrega", "Delivery")
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
      {tx("¿Listo para mover su carga terrestre?", "Ready to Ship by Road?")}
    </h2>

    <p className="text-white/60 text-lg mb-10">
      {tx("Nuestros especialistas están preparados para diseñar una solución terrestre adaptada a su operación.", "Our specialists can design a ground freight solution tailored to your operation.")}
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