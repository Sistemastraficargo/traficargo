
"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimationControls,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState("inicio");

  const [quoteData, setQuoteData] = useState({
  operation: "",
  transport: "",
  origin: "",
  destination: "",
  merchandise: "",
  weight: "",
  name: "",
  company: "",
  contact: "",
});

const [chatInput, setChatInput] = useState("");
const [aiAnswer, setAiAnswer] = useState("");
const [aiQuestion, setAiQuestion] = useState("");
const [aiLoading, setAiLoading] = useState(false);
const [supportData, setSupportData] = useState({
  reference: "",
  name: "",
  company: "",
  contact: "",
  problem: "",
});

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 500],
    [0, 150]
  );
const containerControls = useAnimationControls();
const containerSent = useRef(false);

useMotionValueEvent(scrollY, "change", (latest) => {
  const isMob = window.innerWidth < 768;

  const estacionaEn = isMob ? 420 : 850;
  const disparaEn = isMob ? 560 : 1050;

  if (latest < estacionaEn) {
    containerSent.current = false;

    containerControls.set({
      x: isMob ? -latest * 0.08 : -latest * 0.18,
      y: isMob ? latest * 0.18 : latest * 0.35,
      rotate: 0,
      opacity: isMob ? 0.75 : 1,
    });
  }

  if (latest >= estacionaEn && latest < disparaEn) {
    containerControls.set({
      x: isMob ? -45 : -150,
      y: isMob ? 80 : 300,
      rotate: 0,
      opacity: isMob ? 0.75 : 1,
    });
  }

  if (latest >= disparaEn && !containerSent.current) {
    containerSent.current = true;

    containerControls.start({
      x: isMob ? -900 : -1800,
      y: isMob ? 80 : 300,
      rotate: isMob ? -15 : -25,
      opacity: 0,
      transition: {
        duration: isMob ? 0.35 : 0.45,
        ease: "easeIn",
      },
    });
  }
});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <motion.img
  src="/contenedor-abierto.png"
  alt="Contenedor"
  initial={{
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
  }}
  animate={containerControls}
  className="
fixed
top-[250px]
right-[-210px]
w-[430px]

md:top-[180px]
md:right-[-280px]
md:w-[725px]

z-10 md:z-30
pointer-events-none
drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]
"
/>
     
      {/* NAVBAR */}
      <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/80 backdrop-blur-xl border-b border-cyan-400/20 py-2"
      : "bg-transparent py-6"
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

    <img
      src="/logo.png"
      alt="Traficargo"
      className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_0_45px_rgba(34,211,238,0.9)] ${
        scrolled
          ? "h-14 md:h-16"
          : "h-28 md:h-40"
      }`}
    />

<div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
  <a
  href="#inicio"
  className="
  relative
  text-white
  hover:text-cyan-400
  transition-all
  duration-300
  pb-1
  "
>
  Inicio

  <span
    className="
    absolute
    left-0
    bottom-0
    w-0
    h-[2px]
    bg-cyan-400
    transition-all
    duration-300
    group-hover:w-full
    "
  />
</a>
  <a
  href="#nosotros"
  className="
  relative
  text-white
  hover:text-cyan-400
  transition-all
  duration-300
  pb-1
  "
>
  Nosotros

  <span
    className="
    absolute
    left-0
    bottom-0
    w-0
    h-[2px]
    bg-cyan-400
    transition-all
    duration-300
    group-hover:w-full
    "
  />
</a>
  <a
  href="#servicios"
  className="
  relative
  text-white
  hover:text-cyan-400
  transition-all
  duration-300
  pb-1
  "
>
  Servicios

  <span
    className="
    absolute
    left-0
    bottom-0
    w-0
    h-[2px]
    bg-cyan-400
    transition-all
    duration-300
    group-hover:w-full
    "
  />
</a>
  <a
  href="#sucursales"
  className="
  relative
  text-white
  hover:text-cyan-400
  transition-all
  duration-300
  pb-1
  "
>
  Sucursales

  <span
    className="
    absolute
    left-0
    bottom-0
    w-0
    h-[2px]
    bg-cyan-400
    transition-all
    duration-300
    group-hover:w-full
    "
  />
</a>
<a href="/blog" className="hover:text-cyan-400 transition">
  Blog
</a>

</div>

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white"
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

  </div>
</motion.nav>

{menuOpen && (
<div className="fixed top-20 left-0 w-full bg-black/95 z-40 md:hidden">
  <div className="flex flex-col p-8 gap-8 uppercase items-end text-right pr-10">
  
  <a href="#inicio">Inicio</a>
  <a href="#nosotros">Nosotros</a>
  <a href="#servicios">Servicios</a>
  <a href="#sucursales">Sucursales</a>
  <a href="/blog">Blog</a>

  </div>
</div>
)}

      {/* HERO */}
     <section
  id="inicio"
  className="
  relative
  min-h-screen
  flex
  items-center
  "
>
   <motion.div
  style={{ y: heroY }}
  className="absolute inset-0"
>
  <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover opacity-40"
>
    <source src="/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

</motion.div>

  <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
relative
z-20 md:z-10
text-center
px-6
mt-32
md:mt-40
max-w-5xl
mx-auto
"
>
    <p className="uppercase tracking-[0.4em] text-sm text-blue-400 mb-6 text-center">
      Logística Internacional Premium
    </p>

    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none mb-6 text-center drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)] md:drop-shadow-none">
      MOVEMOS
      <br />
      EL MUNDO
    </h1>
  
    <p className="
max-w-2xl
mx-auto
text-white/90
md:text-white/70
text-lg
text-center
drop-shadow-[0_6px_18px_rgba(0,0,0,0.95)]
md:drop-shadow-none
">
      Soluciones estratégicas en logística internacional,
      transportación marítima, aérea y terrestre para empresas globales.
    </p>

    <div className="mt-10 flex justify-center gap-4 flex-wrap">
      <a
  href="#cotizar"
  className="
  bg-cyan-700
  hover:bg-cyan-600
  transition
  px-8
  py-4
  rounded-full
  font-semibold
  "
>
  Cotizar ahora
</a>

      <a
  href="#servicios"
  className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full"
>
  Ver servicios
</a>

    </div>
  </motion.div>
</section>

{/* FLOATING STATS PREMIUM */}

<section className="relative py-16 overflow-hidden">

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="
    max-w-7xl mx-auto
    grid md:grid-cols-3
    gap-8
    px-6
    relative z-10
    "
  >
    {/* CARD 1 */}
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="
      bg-white/[0.03]
      border border-cyan-400/10
      backdrop-blur-xl
      rounded-[35px]
      p-10
      shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      <h3 className="text-5xl font-black text-cyan-400 mb-4">
        +12
      </h3>

      <p className="text-2xl font-bold mb-4">
        Años de experiencia
      </p>

      <p className="text-white/60 leading-relaxed">
        Operaciones logísticas internacionales con
        estándares premium.
      </p>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="
      bg-white/[0.03]
      border border-cyan-400/10
      backdrop-blur-xl
      rounded-[35px]
      p-10
      mt-10
      shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      <h3 className="text-5xl font-black text-cyan-400 mb-4">
        +180
      </h3>

      <p className="text-2xl font-bold mb-4">
        Clientes globales
      </p>

      <p className="text-white/60 leading-relaxed">
        Cobertura marítima, aérea, terrestre y aduanal
        en México.
      </p>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="
      bg-white/[0.03]
      border border-cyan-400/10
      backdrop-blur-xl
      rounded-[35px]
      p-10
      shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      <h3 className="text-5xl font-black text-cyan-400 mb-4">
        24/7
      </h3>

      <p className="text-2xl font-bold mb-4">
        Monitoreo operativo
      </p>

      <p className="text-white/60 leading-relaxed">
        Seguimiento y trazabilidad internacional en
        tiempo real.
      </p>
    </motion.div>

  </motion.div>

  {/* GLOW BACKGROUND */}
  <div className="absolute py-10 top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px]" />

</section>

      {/* NOSOTROS */}
      {/* EXPERIENCE SECTION */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="py-5 md:py-24 overflow-hidden"
>
  <motion.div
    animate={{
      x: [0, -120, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
   className="flex gap-8 px-8"
  >
    {[
      "Logística Global",
      "Importación",
      "Exportación",
      "Carga Premium",
      "Despacho Aduanal",
      "Transporte Internacional",
    ].map((item) => (
      <div
        key={item}
        className="
          min-w-[320px]
          h-[160px]
          rounded-[40px]
          bg-white/[0.03]
          border border-cyan-400/10
          backdrop-blur-xl
          flex items-center justify-center
          text-2xl md:text-3xl
          font-black
          shadow-[0_0_40px_rgba(34,211,238,0.08)]
        "
      >
        {item}
      </div>
    ))}
    
  </motion.div>
</motion.section>
      <motion.section
        id="nosotros"
        initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
        className="py-5 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
      >
        <div>
          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
            Sobre nosotros
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Más de una década moviendo negocios globales.
          </h2>
        </div>

        <div className="text-white/70 text-lg leading-relaxed space-y-5">
          <p>
            Somos una compañía fundada en 2013 especializada en
            soluciones logísticas internacionales para importadores y
            exportadores.
          </p>

          <p>
            Nuestro enfoque combina experiencia, estrategia y tecnología
            para optimizar operaciones marítimas, terrestres y aéreas
            con estándares internacionales.
          </p>
        </div>
      </motion.section>

{/* NETWORKS */}

<section className="py-20 bg-zinc-950 border-y border-cyan-400/10">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
        Redes Estratégicas
      </p>

      <h2 className="text-4xl md:text-6xl font-black">
        Miembros oficiales de importantes networks logísticos
      </h2>

    </div>

    {/* ADN + AMANAC */}
<div className="grid md:grid-cols-2 gap-8">

  <a
    href="https://adnlogistico.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative overflow-hidden
      rounded-[35px]
      border border-cyan-400/10
      h-[230px]
    "
  >
    <img
      src="/adnl.jpg"
      alt="ADN Logístico"
      className="
        absolute inset-0
        w-full h-full
        object-cover
        group-hover:scale-110
        transition duration-700
      "
    />
  </a>

  <a
    href="https://www.amanac.org.mx/sitio2008/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative overflow-hidden
      rounded-[35px]
      border border-cyan-400/10
      h-[230px]
    "
  >
    <img
      src="/amanac.png"
      alt="AMANAC"
      className="
        absolute inset-0
        w-full h-full
        object-cover
        group-hover:scale-110
        transition duration-700
      "
    />
  </a>

</div>
{/* BNG */}
<div className="mt-8 mx-auto bng-card">
  <a
    href="https://bnglogisticsnetwork.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative block overflow-hidden
      rounded-[35px]
      border border-cyan-400/10
      h-[230px]
      w-full
    "
  >
    <img
      src="/bng.png"
      alt="BNG Logistics Network"
      className="
        absolute inset-0
        w-full h-full
        object-cover
        group-hover:scale-110
        transition duration-700
      "
    />
  </a>
</div>

  </div>

</section>
 <section className="py-5 px-6 max-w-7xl mx-auto">
<div className="text-center mb-20">

  <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
    Nuestra Esencia
  </p>

  <h2 className="text-5xl md:text-7xl font-black">
    Impulsamos el Comercio Global
  </h2>

</div>
  <div className="grid md:grid-cols-2 gap-10">

    {/* MISIÓN */}
    <motion.div
      whileHover={{ y: -10 }}
      className="
      relative
      overflow-hidden
      rounded-[35px]
      h-[500px]
      group
      "
    >

      <img
        src="/mision.jpg"
        alt="Misión"
        className="
        absolute inset-0
        w-full h-full
        object-cover
        group-hover:scale-110
        transition duration-1000
        "
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 p-10 flex flex-col justify-end h-full">

        <p className="uppercase tracking-[0.3em] text-blue-400 mb-3">
          Misión
        </p>

        <h3 className="text-4xl font-black mb-4">
          Soluciones logísticas eficientes
        </h3>

        <p className="text-white/70 mb-6">
          Estrategias y alternativas para importadores y exportadores con un servicio competitivo y de alta calidad.
        </p>

        <a
          href="/brochure.pdf"
          target="_blank"
          className="
          bg-cyan-600
          hover:bg-cyan-500
          px-6
          py-3
          rounded-full
          w-fit
          "
        >
          Ver Brochure
        </a>

      </div>

    </motion.div>

    {/* VISIÓN */}
    <motion.div
      whileHover={{ y: -10 }}
      className="
      relative
      overflow-hidden
      rounded-[35px]
      h-[500px]
      group
      "
    >

      <img
        src="/vision.jpg"
        alt="Visión"
        className="
        absolute inset-0
        w-full h-full
        object-cover
        group-hover:scale-110
        transition duration-1000
        "
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 p-10 flex flex-col justify-end h-full">

        <p className="uppercase tracking-[0.3em] text-blue-400 mb-3">
          Visión
        </p>

        <h3 className="text-4xl font-black mb-4">
          Liderazgo logístico global
        </h3>

        <p className="text-white/70 mb-6">
          Consolidarnos como una empresa capaz de generar impacto real en los negocios de nuestros clientes.
        </p>

        <a
          href="/brochure.pdf"
          target="_blank"
          className="
          bg-cyan-600
          hover:bg-cyan-500
          px-6
          py-3
          rounded-full
          w-fit
          "
        >
          Ver Brochure
        </a>

      </div>

    </motion.div>

  </div>

</section>     

      {/* SERVICIOS */}
      <motion.section
        id="servicios"
        initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
        className="py-20 px-6 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
            Servicios
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Soluciones logísticas integrales
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
           {[
  {
    title: "Carga marítima",
    link: "/servicios/maritimo",
    image: "/maritimo.jpg",
  },

  {
    title: "Carga aérea",
    link: "/servicios/aereo",
    image: "/aereo.jpg",
  },

  {
    title: "Servicios terrestre",
    link: "/servicios/terrestre",
    image: "/terrestre.jpg",
  },

  {
    title: "Despacho aduanal",
    link: "/servicios/aduanal",
    image: "/despacho.jpg",
  },

  {
    title: "Seguro de carga",
    link: "/servicios/seguro",
    image: "/seguro.jpg",
  },

  {
    title: "Acondicionamiento de carga",
    link: "/servicios/acondicionamiento",
    image: "/acondicionamiento.jpg",
  },
].map((service, index) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Link
      href={service.link}
      className="
group relative block overflow-hidden
rounded-[35px]
h-[320px]
border-cyan-700
bg-white/[0.03]
backdrop-blur-xl
shadow-[0_0_40px_rgba(34,211,238,0.08)]
hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
transition-all duration-700
"
    >
      <div className="absolute inset-0 bg-cyan-700"></div>
      
      <img
  src={service.image}
  alt={service.title}
  style={{ border: "2px solid cyan" }}
        className="
absolute inset-0
w-full h-full
object-cover
scale-100
group-hover:scale-125
group-hover:rotate-1
transition duration-[2000ms]
"
      />

      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/30 transition duration-500" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex items-end p-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-black leading-tight mb-3 group-hover:translate-y-[-4px] transition duration-500">
            {service.title}
          </h3>

          <p className="text-white/70 text-sm uppercase tracking-[0.2em]">
            Ver más
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
))}

          </div>
        </div>
      </motion.section>


<section className="py-9 bg-zinc-950 border-b border-cyan-400/10">

  <div className="text-center mb-12">

  <p className="uppercase tracking-[0.3em] text-cyan-400 mb-3">
    Conectamos México con el Mundo
  </p>
  <h3 className="text-4xl md:text-6xl font-black">
    CONOCE NUESTRAS OFICINAS
  </h3>
    <div className="relative mx-auto w-full max-w-5xl aspect-[16/9]">

      <img
  src="/mapa-mexico.png"
  alt="Mapa México"
  className="
  w-full
  h-full
  object-contain
  opacity-90
  "
/>

      {/* CDMX */}
      <a
        href="https://maps.app.goo.gl/fA2xsa3ephdyES438"
        target="_blank"
        className="
        absolute
        left-[51%]
        top-[58%]
        "
      >
        <div className="w-5 h-5 bg-cyan-400 rounded-full animate-ping absolute" />
        <div
  className="
w-6
h-6
bg-cyan-400
rounded-full
relative
shadow-[0_0_25px_rgba(34,211,238,1)]
" />
      </a>

      {/* AICM */}
      <a
        href="https://maps.app.goo.gl/3JbVP465jNEcsB4c9"
        target="_blank"
        className="
        absolute
        left-[52%]
        top-[57%]
        "
      >
        <div className="w-5 h-5 bg-cyan-400 rounded-full animate-ping absolute" />
        <div
  className="
w-6
h-6
bg-cyan-400
rounded-full
relative
shadow-[0_0_25px_rgba(34,211,238,1)]
" 
/>
      </a>

      {/* AIFA */}
      <a
        href="https://maps.app.goo.gl/RH1AtCgJ2JRwc7y49"
        target="_blank"
        className="
        absolute
        left-[51%]
        top-[52%]
        "
      >
        <div className="w-5 h-5 bg-cyan-400 rounded-full animate-ping absolute" />
        <div
  className="
w-6
h-6
bg-cyan-400
rounded-full
relative
shadow-[0_0_25px_rgba(34,211,238,1)]
" 
/>
      </a>

      {/* CANCUN */}
      <a
        href="https://maps.app.goo.gl/6mnPrtoEuh7VSsno8"
        target="_blank"
        className="
        absolute
        left-[91%]
        top-[49%]
        "
      >
        <div className="w-5 h-5 bg-cyan-400 rounded-full animate-ping absolute" />
        <div
 className="
w-6
h-6
bg-cyan-400
rounded-full
relative
shadow-[0_0_25px_rgba(34,211,238,1)]
"
/>
      </a>

    </div>

  </div>

</section>
 {/* SUCURSALES */}
      <motion.section
        id="sucursales"
        initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
        className="py-0 px-6 max-w-7xl mx-auto"
      
>   <div className="grid md:grid-cols-4 gap-8">
          {[
  {
    nombre: "CDMX",
    link: "https://maps.app.goo.gl/MRcgWWUgW16oHLYKA?g_st=ic"
  },

  {
    nombre: "AICM",
    link: "https://maps.app.goo.gl/TaEuGFUPDgV7xHUJ6?g_st=ic"
  },

  {
    nombre: "AIFA",
    link: "https://maps.app.goo.gl/2FMt4Jwei8SkKC818?g_st=ic"
  },

  {
    nombre: "Cancún",
    link: "https://maps.app.goo.gl/YxfEPPJyfNRuvnzs9?g_st=ipc"
  }
].map((office) => (

  <a
    key={office.nombre}
    href={office.link}
    target="_blank"
    className="
    block
    p-7
    rounded-3xl
    bg-white/5
    border
    border-white/10
    hover:border-cyan-400
    hover:scale-105
    transition
    duration-500
    "
  >

    <h3 className="text-2xl font-bold mb-4">
      {office.nombre}
    </h3>

    <p className="text-white/60">
      Ver ubicación en Google Maps
    </p>

  </a>

))}
        </div>
      </motion.section>

<div className="h-24 bg-gradient-to-b from-zinc-950 to-[#04131d]" />

<section
  id="cotizar"
  className="
  py-32
  bg-[#04132d]
  border-t
  border-cyan-400/10
  "
>

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-5xl font-black mb-4">
Solicita una cotización
</h2> 

<p className="text-white/60 mb-12">
Un asesor especializado se pondrá en contacto contigo.
</p>
<form
  onSubmit={(e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const empresa = e.target.empresa.value;
    const correo = e.target.correo.value;
    const telefono = e.target.telefono.value;
    const servicio = e.target.servicio.value;
    const origen = e.target.origen.value;
    const destino = e.target.destino.value;
    const mercancia = e.target.mercancia.value;
    const descripcion = e.target.descripcion.value;

    const mensaje = `
NUEVA SOLICITUD DE COTIZACIÓN

👤 Nombre: ${nombre}
🏢 Empresa: ${empresa}
📧 Correo: ${correo}
📱 Teléfono: ${telefono}

📦 Servicio: ${servicio}
🌎 Origen: ${origen}
📍 Destino: ${destino}

Mercancía:
${mercancia}

Descripción:
${descripcion}
`;

    window.open(
      `https://wa.me/525532281631?text=${encodeURIComponent(
        mensaje
      )}`,
      "_blank"
    );
  }}
  className="grid md:grid-cols-2 gap-6"
>

<input
name="nombre"
placeholder="Nombre"
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="empresa"
placeholder="Empresa"
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="correo"
placeholder="Correo"
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="telefono"
placeholder="Teléfono"
className="bg-black/30 p-4 rounded-xl"
/>

<select
name="servicio"
className="bg-black/30 p-4 rounded-xl"
>

<option>Marítimo</option>
<option>Aéreo</option>
<option>Terrestre</option>
<option>Aduanal</option>
<option>Seguro</option>
</select>

<input
name="origen"
placeholder="Origen"
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="destino"
placeholder="Destino"
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="mercancia"
placeholder="Tipo de mercancía"
className="bg-black/30 p-4 rounded-xl"
/>

<textarea
name="descripcion"
placeholder="Describe tu operación"
className="
md:col-span-2
bg-black/30
p-4
rounded-xl
"
/>

<button
className="
md:col-span-2
bg-cyan-700
hover:bg-cyan-600
py-5
rounded-xl
font-bold
text-lg
transition
"
>
Solicitar cotización
</button>

</form>
</div>
</section>

<footer className="bg-[#04131d] border-t border-cyan-400/10 py-20">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

    <div>
      <img
        src="/logo.png"
        alt="Traficargo"
        className="h-16 mb-6"
      />

      <p className="text-white/60">
        Logística Internacional Premium para empresas globales.
      </p>
    </div>

    <div>
      <h3 className="font-bold mb-4">
        Navegación
      </h3>

      <ul className="space-y-2 text-white/60">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Blog</li>
        <li>Contacto</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">
        Servicios
      </h3>

      <ul className="space-y-2 text-white/60">
        <li>Marítimo</li>
        <li>Aéreo</li>
        <li>Terrestre</li>
        <li>Aduanal</li>
        <li>Seguro</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">
        Contacto
      </h3>

      <ul className="space-y-2 text-white/60">
        <li>+52 55 1742 3015</li>
        <li>ventas@traficargo.com.mx</li>
        <li>CDMX · AICM · AIFA · Cancún</li>
      </ul>
    </div>

<Link
  href="/aviso-privacidad"
  className="hover:text-cyan-400 transition"
>
  Aviso de Privacidad
</Link>

<Link
  href="/terminos-condiciones"
  className="hover:text-cyan-400 transition"
>
  Términos y Condiciones
</Link>

  </div>

  <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-sm">
    © 2026 TRAFICARGO INTERNACIONAL. Todos los derechos reservados.
  </div>

</footer>
{chatOpen && (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className="
      fixed
      bottom-28
      right-6
      z-[100]
      w-[calc(100vw-3rem)]
      max-w-[380px]
      overflow-hidden
      rounded-[28px]
      border
      border-cyan-400/20
      bg-[#06131d]/95
      backdrop-blur-xl
      shadow-[0_20px_70px_rgba(0,0,0,0.60)]
    "
  >

    {/* CABECERA */}
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

      <div className="flex items-center gap-3">

        <div className="
          flex h-10 w-10
          items-center justify-center
          rounded-full
          bg-cyan-500/15
          text-cyan-300
        ">
          <MessageCircle size={20} />
        </div>

        <div>
          <p className="font-bold text-white">
            Asistente Traficargo
          </p>

          <p className="text-xs text-cyan-300">
            Asistencia logística
          </p>
        </div>

      </div>

      <button
        type="button"
        onClick={() => setChatOpen(false)}
        className="
          rounded-full
          p-2
          text-white/60
          hover:bg-white/10
          hover:text-white
          transition
        "
      >
        <X size={20} />
      </button>

    </div>

    {/* CONVERSACIÓN */}
    <div className="max-h-[520px] space-y-4 overflow-y-auto p-5">

  <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
    Hola, soy el asistente virtual de Traficargo.
    Puedo ayudarte a cotizar una operación, resolver dudas logísticas
    o conectarte con nuestro equipo.
  </div>

  {/* MENÚ PRINCIPAL */}
  {chatStep === "inicio" && (
    <>
      <p className="text-sm font-semibold text-white">
        ¿Qué necesitas hacer?
      </p>

      <div className="grid gap-2">
        {[
          "Cotizar una operación",
          "Tengo una duda logística",
          "Necesito ayuda con una operación",
          "Hablar con un asesor",
        ].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
  if (option === "Cotizar una operación") {
    setChatStep("operacion");
  }

  if (option === "Tengo una duda logística") {
    setChatStep("duda");
  }

  if (option === "Necesito ayuda con una operación") {
    setChatStep("ayuda");
  }

  if (option === "Hablar con un asesor") {
    setChatStep("asesor");
  }
}} 
            className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-3 text-left text-sm text-white/90 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
          >
            {option}
          </button>
        ))}
      </div>
    </>
  )}

  {/* DUDA LOGÍSTICA */}
  {chatStep === "duda" && (
    <>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
        Tengo una duda logística
      </div>

      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
        Claro. Escríbeme tu duda sobre importaciones, exportaciones,
        transporte marítimo, aéreo, terrestre o procesos logísticos.
      </div>

      {aiQuestion && (
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
          {aiQuestion}
        </div>
      )}

      {aiAnswer && (
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
          {aiAnswer}
        </div>
      )}

      {aiLoading && (
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-cyan-300/70">
          Consultando al asistente...
        </div>
      )}

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const question = chatInput.trim();
          if (!question || aiLoading) return;

          setAiQuestion(question);
          setAiAnswer("");
          setChatInput("");
          setAiLoading(true);

          try {
            const response = await fetch("/api/asistente", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: question }),
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(
                result.message || "No se pudo obtener una respuesta."
              );
            }

            setAiAnswer(
              result.answer ||
              result.message ||
              "Respuesta recibida."
            );
          } catch (error) {
            console.error("Error en el asistente:", error);

            setAiAnswer(
              "El asistente inteligente está temporalmente fuera de servicio. Puedes volver al menú para solicitar una cotización o contactar a nuestro equipo."
            );
          } finally {
            setAiLoading(false);
          }
        }}
        className="flex gap-2"
      >
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Escribe tu duda logística..."
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
          autoFocus
        />

        <button
          type="submit"
          disabled={aiLoading}
          className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {aiLoading ? "..." : "Enviar"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => {
          setChatStep("inicio");
          setChatInput("");
          setAiQuestion("");
          setAiAnswer("");
        }}
        className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
      >
        Volver al menú
      </button>
    </>
  )}
{/* AYUDA CON UNA OPERACIÓN */}
{chatStep === "ayuda" && (
  <>
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
      Necesito ayuda con una operación
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
      Claro. Si ya tienes una operación con Traficargo, nuestro equipo
      puede ayudarte con su seguimiento.
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
      Para comenzar, indícame tu número o referencia de operación.
    </div>
  <form
  onSubmit={(e) => {
    e.preventDefault();

    const value = chatInput.trim();

    if (!value) return;

    setSupportData((data) => ({
      ...data,
      reference: value,
    }));

    setChatInput("");
    setChatStep("ayudaNombre");
  }}
  className="flex gap-2"
>
  <input
    value={chatInput}
    onChange={(e) => setChatInput(e.target.value)}
    placeholder="Referencia de operación..."
    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
    autoFocus
  />

  <button
    type="submit"
    className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
  >
    Enviar
  </button>
</form>
    <button
      type="button"
      onClick={() => setChatStep("inicio")}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      Volver al menú
    </button>
  </>
)}
{/* DATOS PARA AYUDA CON UNA OPERACIÓN */}
{["ayudaNombre", "ayudaEmpresa", "ayudaContacto", "ayudaProblema"].includes(chatStep) && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      {chatStep === "ayudaNombre" &&
        "Gracias. ¿Cuál es tu nombre?"}

      {chatStep === "ayudaEmpresa" &&
        "¿De qué empresa nos contactas?"}

      {chatStep === "ayudaContacto" &&
        "Déjanos un teléfono o correo para poder contactarte."}

      {chatStep === "ayudaProblema" &&
        "Cuéntanos brevemente qué sucede con tu operación o qué apoyo necesitas."}

    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();

        const value = chatInput.trim();

        if (!value) return;

        const nextStep: Record<string, string> = {
          ayudaNombre: "ayudaEmpresa",
          ayudaEmpresa: "ayudaContacto",
          ayudaContacto: "ayudaProblema",
          ayudaProblema: "ayudaResumen",
        };

        const fieldMap: Record<
          string,
          keyof typeof supportData
        > = {
          ayudaNombre: "name",
          ayudaEmpresa: "company",
          ayudaContacto: "contact",
          ayudaProblema: "problem",
        };

        setSupportData((data) => ({
          ...data,
          [fieldMap[chatStep]]: value,
        }));

        setChatInput("");
        setChatStep(nextStep[chatStep]);
      }}
      className="flex gap-2"
    >
      <input
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Escribe aquí..."
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
        autoFocus
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        Enviar
      </button>
    </form>
  </>
)}

{/* RESUMEN DE AYUDA */}
{chatStep === "ayudaResumen" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
      Listo, {supportData.name}. Estos son los datos de tu solicitud de apoyo:
    </div>

    <div className="space-y-1 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4 text-sm text-white/80">

      <p>
        <span className="text-white/45">Referencia:</span>{" "}
        {supportData.reference}
      </p>

      <p>
        <span className="text-white/45">Nombre:</span>{" "}
        {supportData.name}
      </p>

      <p>
        <span className="text-white/45">Empresa:</span>{" "}
        {supportData.company}
      </p>

      <p>
        <span className="text-white/45">Contacto:</span>{" "}
        {supportData.contact}
      </p>

      <p>
        <span className="text-white/45">Situación:</span>{" "}
        {supportData.problem}
      </p>

    </div>
<button
  type="button"
  onClick={async () => {
    try {
      const response = await fetch("/api/soporte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supportData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "No se pudo enviar la solicitud."
        );
      }

      setChatStep("ayudaEnviada");
    } catch (error) {
      console.error("Error enviando solicitud de ayuda:", error);
      alert(
        "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente."
      );
    }
  }}
  className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"
>
  Enviar solicitud de ayuda a Traficargo
</button> 
    <button
      type="button"
      onClick={() => setChatStep("inicio")}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
    >
      Volver al menú
    </button>
  </>
)}
{/* AYUDA ENVIADA */}
{chatStep === "ayudaEnviada" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      <p className="font-semibold text-cyan-300">
        ✓ Solicitud registrada
      </p>

      <p className="mt-2">
        Gracias, {supportData.name}. Ya tenemos los datos de tu solicitud de apoyo.
      </p>

      <p className="mt-2 text-white/60">
        Un integrante del equipo de Traficargo podrá revisar tu operación y ponerse en contacto contigo.
      </p>

    </div>

    <button
      type="button"
      onClick={() => {
        setChatStep("inicio");
        setChatInput("");

        setSupportData({
          reference: "",
          name: "",
          company: "",
          contact: "",
          problem: "",
        });
      }}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
    >
      Volver al menú
    </button>
  </>
)}
{/* HABLAR CON UN ASESOR */}
{chatStep === "asesor" && (
  <>
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
      Hablar con un asesor
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
      Claro. Podemos pedirle a un asesor de Traficargo que se ponga en contacto contigo.
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
      Para comenzar, ¿cuál es tu nombre?
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();

        const value = chatInput.trim();

        if (!value) return;

        setSupportData({
          reference: "ASESOR",
          name: value,
          company: "",
          contact: "",
          problem: "",
        });

        setChatInput("");
        setChatStep("asesorEmpresa");
      }}
      className="flex gap-2"
    >
      <input
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Tu nombre..."
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
        autoFocus
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        Enviar
      </button>
    </form>

    <button
      type="button"
      onClick={() => {
        setChatStep("inicio");
        setChatInput("");
      }}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      Volver al menú
    </button>
  </>
)}
{/* DATOS PARA HABLAR CON UN ASESOR */}
{["asesorEmpresa", "asesorContacto", "asesorMotivo"].includes(chatStep) && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      {chatStep === "asesorEmpresa" &&
        "Gracias. ¿De qué empresa nos contactas?"}

      {chatStep === "asesorContacto" &&
        "¿A qué teléfono o correo puede contactarte nuestro asesor?"}

      {chatStep === "asesorMotivo" &&
        "Por último, cuéntanos brevemente en qué podemos ayudarte."}

    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();

        const value = chatInput.trim();

        if (!value) return;

        const nextStep: Record<string, string> = {
          asesorEmpresa: "asesorContacto",
          asesorContacto: "asesorMotivo",
          asesorMotivo: "asesorResumen",
        };

        const fieldMap: Record<
          string,
          keyof typeof supportData
        > = {
          asesorEmpresa: "company",
          asesorContacto: "contact",
          asesorMotivo: "problem",
        };

        setSupportData((data) => ({
          ...data,
          [fieldMap[chatStep]]: value,
        }));

        setChatInput("");
        setChatStep(nextStep[chatStep]);
      }}
      className="flex gap-2"
    >
      <input
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Escribe aquí..."
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
        autoFocus
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        Enviar
      </button>
    </form>
  </>
)}

{/* RESUMEN PARA ASESOR */}
{chatStep === "asesorResumen" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
      Listo, {supportData.name}. Confirma tus datos antes de solicitar contacto con un asesor:
    </div>

    <div className="space-y-1 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4 text-sm text-white/80">

      <p>
        <span className="text-white/45">Nombre:</span>{" "}
        {supportData.name}
      </p>

      <p>
        <span className="text-white/45">Empresa:</span>{" "}
        {supportData.company}
      </p>

      <p>
        <span className="text-white/45">Contacto:</span>{" "}
        {supportData.contact}
      </p>

      <p>
        <span className="text-white/45">Motivo:</span>{" "}
        {supportData.problem}
      </p>

    </div>

    <button
      type="button"
      onClick={async () => {
        try {
          const response = await fetch("/api/asesor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(supportData),
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(
              result.message || "No se pudo enviar la solicitud."
            );
          }

          setChatStep("asesorEnviado");
        } catch (error) {
          console.error("Error enviando solicitud de asesor:", error);
          alert(
            "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente."
          );
        }
      }}
      className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"
    >
      Solicitar contacto con un asesor
    </button>

    <button
      type="button"
      onClick={() => setChatStep("inicio")}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      Volver al menú
    </button>
  </>
)}

{/* SOLICITUD DE ASESOR REGISTRADA */}
{chatStep === "asesorEnviado" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      <p className="font-semibold text-cyan-300">
        ✓ Solicitud registrada
      </p>

      <p className="mt-2">
        Gracias, {supportData.name}. Ya tenemos tus datos para solicitar contacto con un asesor.
      </p>

      <p className="mt-2 text-white/60">
        Un asesor de Traficargo podrá revisar tu solicitud y ponerse en contacto contigo.
      </p>

    </div>

    <button
      type="button"
      onClick={() => {
        setChatStep("inicio");
        setChatInput("");

        setSupportData({
          reference: "",
          name: "",
          company: "",
          contact: "",
          problem: "",
        });
      }}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
    >
      Volver al menú
    </button>
  </>
)}
  {/* IMPORTACIÓN O EXPORTACIÓN */}
  {chatStep === "operacion" && (
    <>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
        Quiero cotizar una operación
      </div>

      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
        Perfecto. ¿Se trata de una importación o una exportación?
      </div>

      <div className="grid grid-cols-2 gap-2">
        {["Importación", "Exportación"].map((operation) => (
          <button
            key={operation}
            type="button"
            onClick={() => {
              setQuoteData((data) => ({
                ...data,
                operation,
              }));

              setChatStep("transporte");
            }}
            className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-3 text-sm text-white/90 transition hover:bg-cyan-400/10"
          >
            {operation}
          </button>
        ))}
      </div>
    </>
  )}

  {/* TIPO DE TRANSPORTE */}
  {chatStep === "transporte" && (
    <>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
        {quoteData.operation}
      </div>

      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
        ¿Qué tipo de transporte necesitas?
      </div>

      <div className="grid gap-2">
        {[
          "Marítimo",
          "Aéreo",
          "Terrestre",
          "No sé cuál necesito",
        ].map((transport) => (
          <button
            key={transport}
            type="button"
            onClick={() => {
              setQuoteData((data) => ({
                ...data,
                transport,
              }));

              setChatStep("origen");
            }}
            className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-3 text-left text-sm text-white/90 transition hover:bg-cyan-400/10"
          >
            {transport}
          </button>
        ))}
      </div>
    </>
  )}

  {/* PREGUNTAS ESCRITAS */}
  {[
    "origen",
    "destino",
    "mercancia",
    "peso",
    "nombre",
    "empresa",
    "contacto",
  ].includes(chatStep) && (
    <>
      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

        {chatStep === "origen" &&
          "¿Desde qué ciudad, puerto o aeropuerto sale tu mercancía?"}

        {chatStep === "destino" &&
          "¿A qué ciudad, puerto o aeropuerto debe llegar?"}

        {chatStep === "mercancia" &&
          "¿Qué tipo de mercancía necesitas transportar?"}

        {chatStep === "peso" &&
          "¿Conoces el peso, volumen o dimensiones aproximadas? Si no lo sabes, escribe “No lo sé”."}

        {chatStep === "nombre" &&
          "Muy bien. ¿Cuál es tu nombre?"}

        {chatStep === "empresa" &&
          "¿De qué empresa nos contactas?"}

        {chatStep === "contacto" &&
          "Por último, déjanos un teléfono o correo para que un asesor pueda contactarte."}

      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const value = chatInput.trim();

          if (!value) return;

          const nextStep: Record<string, string> = {
            origen: "destino",
            destino: "mercancia",
            mercancia: "peso",
            peso: "nombre",
            nombre: "empresa",
            empresa: "contacto",
            contacto: "resumen",
          };

          const fieldMap: Record<
            string,
            keyof typeof quoteData
          > = {
            origen: "origin",
            destino: "destination",
            mercancia: "merchandise",
            peso: "weight",
            nombre: "name",
            empresa: "company",
            contacto: "contact",
          };

          setQuoteData((data) => ({
            ...data,
            [fieldMap[chatStep]]: value,
          }));

          setChatInput("");

          setChatStep(nextStep[chatStep]);
        }}
        className="flex gap-2"
      >
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Escribe aquí..."
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
          autoFocus
        />

        <button
          type="submit"
          className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
        >
          Enviar
        </button>
      </form>
    </>
  )}

  {/* RESUMEN */}
  {chatStep === "resumen" && (
    <>
      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
        Listo, {quoteData.name}. Ya tengo los datos principales de tu solicitud:
      </div>

      <div className="space-y-1 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4 text-sm text-white/80">

        <p>
          <span className="text-white/45">Operación:</span>{" "}
          {quoteData.operation}
        </p>

        <p>
          <span className="text-white/45">Transporte:</span>{" "}
          {quoteData.transport}
        </p>

        <p>
          <span className="text-white/45">Origen:</span>{" "}
          {quoteData.origin}
        </p>

        <p>
          <span className="text-white/45">Destino:</span>{" "}
          {quoteData.destination}
        </p>

        <p>
          <span className="text-white/45">Mercancía:</span>{" "}
          {quoteData.merchandise}
        </p>

        <p>
          <span className="text-white/45">Peso / volumen:</span>{" "}
          {quoteData.weight}
        </p>

        <p>
          <span className="text-white/45">Empresa:</span>{" "}
          {quoteData.company}
        </p>

        <p>
          <span className="text-white/45">Contacto:</span>{" "}
          {quoteData.contact}
        </p>

      </div>

      <button
        type="button"
        onClick={async () => {
  try {
    const response = await fetch("/api/cotizaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quoteData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "No se pudo enviar la solicitud."
      );
    }

    setChatStep("enviado");
  } catch (error) {
    console.error("Error al enviar la cotización:", error);
    alert(
      "No pudimos enviar tu solicitud. Intenta nuevamente."
    );
  }
}}
        className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"
      >
        Enviar solicitud a Traficargo
      </button>

      <button
        type="button"
        onClick={() => {
          setChatStep("inicio");

          setQuoteData({
            operation: "",
            transport: "",
            origin: "",
            destination: "",
            merchandise: "",
            weight: "",
            name: "",
            company: "",
            contact: "",
          });
        }}
        className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
      >
        Iniciar otra consulta
      </button>
        </>
  )}

  {/* SOLICITUD ENVIADA */}
  {chatStep === "enviado" && (
    <>
      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
        <p className="font-semibold text-cyan-300">
          ✓ Solicitud recibida
        </p>

        <p className="mt-2">
          Gracias, {quoteData.name}. Tu solicitud de cotización fue
          recibida correctamente por Traficargo.
        </p>

        <p className="mt-2 text-white/60">
          Un asesor revisará la información y se pondrá en contacto contigo.
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          setChatStep("inicio");

          setQuoteData({
            operation: "",
            transport: "",
            origin: "",
            destination: "",
            merchandise: "",
            weight: "",
            name: "",
            company: "",
            contact: "",
          });
        }}
        className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
      >
        Iniciar otra consulta
      </button>
    </>
  )}

</div>

  </motion.div>
)}
{/* BOT TRAFICARGO */}
<button
  type="button"
  onClick={() => setChatOpen(!chatOpen)}
  className="
    fixed
    bottom-6
    right-6
    z-[100]
    w-16
    h-16
    rounded-full
    bg-cyan-600
    hover:bg-cyan-500
    flex
    items-center
    justify-center
    shadow-[0_0_35px_rgba(34,211,238,0.45)]
    transition
    duration-300
    hover:scale-110
  "
  aria-label="Abrir asistente Traficargo"
>
  <MessageCircle size={28} />
</button>

    </main>
   
  );
}
