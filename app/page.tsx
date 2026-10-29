
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
type SiteLanguage = "es" | "en";
const translations = {
  es: {
    // NAVEGACIÓN
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    offices: "Sucursales",
    blog: "Blog",

    // HERO
    heroSubtitle: "Logística Internacional Premium",
    heroTitle1: "MOVEMOS",
    heroTitle2: "EL MUNDO",
    heroDescription:
      "Soluciones estratégicas en logística internacional, transportación marítima, aérea y terrestre para empresas globales.",
    quoteNow: "Cotizar ahora",
    viewServices: "Ver servicios",

    // ESTADÍSTICAS
    experienceTitle: "Años de experiencia",
    experienceDescription:
      "Operaciones logísticas internacionales con estándares premium.",
    clientsTitle: "Clientes globales",
    clientsDescription:
      "Cobertura marítima, aérea, terrestre y aduanal en México.",
    monitoringTitle: "Monitoreo operativo",
    monitoringDescription:
      "Seguimiento y trazabilidad internacional en tiempo real.",

    // NOSOTROS
    aboutSubtitle: "Sobre nosotros",
    aboutTitle: "Más de una década moviendo negocios globales.",
    aboutDescription1:
      "Somos una compañía fundada en 2013 especializada en soluciones logísticas internacionales para importadores y exportadores.",
    aboutDescription2:
      "Nuestro enfoque combina experiencia, estrategia y tecnología para optimizar operaciones marítimas, terrestres y aéreas con estándares internacionales.",

    // NETWORKS
    networksSubtitle: "Redes Estratégicas",
    networksTitle:
      "Miembros oficiales de importantes networks logísticos",

    // MISIÓN Y VISIÓN
    essenceSubtitle: "Nuestra Esencia",
    essenceTitle: "Impulsamos el Comercio Global",
    mission: "Misión",
    missionTitle: "Soluciones logísticas eficientes",
    missionDescription:
      "Estrategias y alternativas para importadores y exportadores con un servicio competitivo y de alta calidad.",
    vision: "Visión",
    visionTitle: "Liderazgo logístico global",
    visionDescription:
      "Consolidarnos como una empresa capaz de generar impacto real en los negocios de nuestros clientes.",
    brochure: "Ver Brochure",

    // SERVICIOS
    servicesTitle: "Soluciones logísticas integrales",
    seaFreight: "Carga marítima",
    airFreight: "Carga aérea",
    landFreight: "Transporte terrestre",
    customs: "Despacho aduanal",
    cargoInsurance: "Seguro de carga",
    cargoHandling: "Acondicionamiento de carga",
    learnMore: "Ver más",

    // OFICINAS
    mexicoWorld: "Conectamos México con el Mundo",
    officesTitle: "CONOCE NUESTRAS OFICINAS",
    viewLocation: "Ver ubicación en Google Maps",

    // COTIZACIÓN
    quoteTitle: "Solicita una cotización",
    quoteDescription:
      "Un asesor especializado se pondrá en contacto contigo.",
    name: "Nombre",
    company: "Empresa",
    email: "Correo",
    phone: "Teléfono",
    origin: "Origen",
    destination: "Destino",
    merchandise: "Tipo de mercancía",
    operationDescription: "Describe tu operación",
    requestQuote: "Solicitar cotización",

    // FOOTER
    footerDescription:
      "Logística Internacional Premium para empresas globales.",
    navigation: "Navegación",
    contact: "Contacto",
    privacy: "Aviso de Privacidad",
    terms: "Términos y Condiciones",
    rights: "Todos los derechos reservados.",
  },

  en: {
    // NAVIGATION
    home: "Home",
    about: "About Us",
    services: "Services",
    offices: "Our Offices",
    blog: "Blog",

    // HERO
    heroSubtitle: "Premium International Logistics",
    heroTitle1: "MOVING",
    heroTitle2: "THE WORLD",
    heroDescription:
      "Strategic international logistics solutions, including ocean, air, and ground freight services for businesses worldwide.",
    quoteNow: "Request a Quote",
    viewServices: "Explore Our Services",

    // STATISTICS
    experienceTitle: "Years of Experience",
    experienceDescription:
      "International logistics operations delivered to premium standards.",
    clientsTitle: "Global Clients",
    clientsDescription:
      "Ocean, air, ground freight, and customs brokerage services throughout Mexico.",
    monitoringTitle: "Operational Monitoring",
    monitoringDescription:
      "Real-time international shipment tracking and visibility.",

    // ABOUT US
    aboutSubtitle: "About Us",
    aboutTitle: "Over a decade connecting businesses worldwide.",
    aboutDescription1:
      "Founded in 2013, we specialize in international logistics solutions for importers and exporters.",
    aboutDescription2:
      "We combine expertise, strategic planning, and technology to optimize ocean, ground, and air freight operations in line with international standards.",

    // NETWORKS
    networksSubtitle: "Strategic Partnerships",
    networksTitle:
      "Proud members of leading international logistics networks",

    // MISSION AND VISION
    essenceSubtitle: "Our Core Values",
    essenceTitle: "Driving Global Trade",
    mission: "Mission",
    missionTitle: "Efficient Logistics Solutions",
    missionDescription:
      "Providing importers and exporters with strategic alternatives, competitive solutions, and high-quality service.",
    vision: "Vision",
    visionTitle: "Global Logistics Leadership",
    visionDescription:
      "To establish ourselves as a logistics company that makes a meaningful impact on our clients' businesses.",
    brochure: "View Brochure",

    // SERVICES
    servicesTitle: "Comprehensive Logistics Solutions",
    seaFreight: "Ocean Freight",
    airFreight: "Air Freight",
    landFreight: "Ground Transportation",
    customs: "Customs Brokerage",
    cargoInsurance: "Cargo Insurance",
    cargoHandling: "Cargo Handling",
    learnMore: "Learn More",

    // OFFICES
    mexicoWorld: "Connecting Mexico to the World",
    officesTitle: "EXPLORE OUR OFFICES",
    viewLocation: "View Location on Google Maps",

    // QUOTATION
    quoteTitle: "Request a Quote",
    quoteDescription:
      "One of our logistics specialists will contact you shortly.",
    name: "Full Name",
    company: "Company",
    email: "Email Address",
    phone: "Phone Number",
    origin: "Origin",
    destination: "Destination",
    merchandise: "Type of Cargo",
    operationDescription: "Tell us about your shipment",
    requestQuote: "Submit Quote Request",

    // FOOTER
    footerDescription:
      "Premium International Logistics for businesses worldwide.",
    navigation: "Navigation",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    rights: "All rights reserved.",
  },
} as const;

export default function Home() {
  // TRAFICARGO - Desarrollo bilingüe ES/EN
  const [siteLanguage, setSiteLanguage] = useState<SiteLanguage | null>(null);
const [languageLoaded, setLanguageLoaded] = useState(false);

useEffect(() => {
  const savedLanguage = localStorage.getItem("traficargo-language");

  if (savedLanguage === "es" || savedLanguage === "en") {
    setSiteLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
  }

  setLanguageLoaded(true);
}, []);

const chooseLanguage = (language: SiteLanguage) => {
  localStorage.setItem("traficargo-language", language);

  document.documentElement.lang = language;

  setSiteLanguage(language);
};
const t = translations[siteLanguage ?? "es"];

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
    {/* PANTALLA DE BIENVENIDA BILINGÜE */}

{languageLoaded && !siteLanguage && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="
      fixed inset-0 z-[200]
      flex items-center justify-center
      bg-[#04131d]
      px-6
    "
    role="dialog"
    aria-modal="true"
    aria-labelledby="welcome-title"
  >
    <div
      className="
        w-full max-w-2xl
        rounded-[35px]
        border border-cyan-400/20
        bg-white/[0.04]
        backdrop-blur-xl
        p-10 md:p-16
        text-center
        shadow-[0_0_80px_rgba(34,211,238,0.12)]
      "
    >

      {/* LOGOTIPO */}

      <motion.img
        src="/logo.png"
        alt="Traficargo Internacional"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          mx-auto
          mb-10
          h-28 md:h-36
          w-auto
          object-contain
        "
      />

      {/* BIENVENIDA */}

      <motion.h1
        id="welcome-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          text-3xl md:text-5xl
          font-black
          text-white
          mb-5
        "
      >
        Bienvenido / Welcome
      </motion.h1>

      <p className="text-white/60 text-lg mb-12">
        Selecciona tu idioma
        <br />
        Select your language
      </p>

      {/* BOTONES */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <button
          type="button"
          onClick={() => chooseLanguage("es")}
          className="
            border border-cyan-400/30
            bg-cyan-700
            hover:bg-cyan-600
            text-white
            py-5
            rounded-2xl
            font-bold
            text-lg
            transition-all duration-300
            hover:scale-105
          "
        >
          ESPAÑOL
        </button>

        <button
          type="button"
          onClick={() => chooseLanguage("en")}
          className="
            border border-cyan-400/30
            bg-cyan-700
            hover:bg-cyan-600
            text-white
            py-5
            rounded-2xl
            font-bold
            text-lg
            transition-all duration-300
            hover:scale-105
          "
        >
          ENGLISH
        </button>

      </div>

      <p className="mt-12 text-white/30 text-xs tracking-[0.3em] uppercase">
        Connecting businesses worldwide
      </p>

    </div>
  </motion.div>
)}
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
  {t.home}

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
  {t.about}

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
  {t.services}

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
  {t.offices}

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
  {t.blog}
</a>

</div>
{/* SELECTOR DE IDIOMA */}

<div className="flex items-center gap-3 text-sm font-bold">

  <button
    type="button"
    onClick={() => chooseLanguage("es")}
    aria-label="Cambiar a español"
    aria-pressed={siteLanguage === "es"}
    className={`transition ${
      siteLanguage === "es"
        ? "text-cyan-400"
        : "text-white/60 hover:text-cyan-400"
    }`}
  >
    ES
  </button>

  <span className="text-white/30">|</span>

  <button
    type="button"
    onClick={() => chooseLanguage("en")}
    aria-label="Switch to English"
    aria-pressed={siteLanguage === "en"}
    className={`transition ${
      siteLanguage === "en"
        ? "text-cyan-400"
        : "text-white/60 hover:text-cyan-400"
    }`}
  >
    EN
  </button>

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
  
  <a href="#inicio" onClick={() => setMenuOpen(false)}>{t.home}</a>
  <a href="#nosotros" onClick={() => setMenuOpen(false)}>{t.about}</a>
  <a href="#servicios" onClick={() => setMenuOpen(false)}>{t.services}</a>
  <a href="#sucursales" onClick={() => setMenuOpen(false)}>{t.offices}</a>
  <a href="/blog">{t.blog}</a>

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
    {t.heroSubtitle}
   </p>

    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none mb-6 text-center drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)] md:drop-shadow-none">
  {t.heroTitle1}
  <br />
  {t.heroTitle2}
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
      {t.heroDescription}
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
  {t.quoteNow}
</a>

      <a
  href="#servicios"
  className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full"
>
  {t.viewServices}
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
        {t.experienceTitle}
      </p>

      <p className="text-white/60 leading-relaxed">
        {t.experienceDescription}
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
        {t.clientsTitle}
      </p>

      <p className="text-white/60 leading-relaxed">
        {t.clientsDescription}
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
        {t.monitoringTitle}
      </p>

      <p className="text-white/60 leading-relaxed">
        {t.monitoringDescription}
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
    {(siteLanguage === "en"
      ? [
          "Global Logistics",
          "Import Services",
          "Export Services",
          "Premium Cargo",
          "Customs Clearance",
          "International Transportation",
        ]
      : [
          "Logística Global",
          "Importación",
          "Exportación",
          "Carga Premium",
          "Despacho Aduanal",
          "Transporte Internacional",
        ]
    ).map((item) => (
      <div
        key={item}
        className="
          min-w-[320px]
          h-[160px]
          rounded-[40px]
          bg-white/[0.03]
          border border-cyan-400/10
          backdrop-blur-xl
          flex items-center
          justify-center
          text-center
          px-6
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
            {t.aboutSubtitle}
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            {t.aboutTitle}
          </h2>
        </div>

        <div className="text-white/70 text-lg leading-relaxed space-y-5">
          <p>
            {t.aboutDescription1}
          </p>

          <p>
            {t.aboutDescription2}
          </p>
        </div>
      </motion.section>

{/* NETWORKS */}

<section className="py-20 bg-zinc-950 border-y border-cyan-400/10">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
        {t.networksSubtitle}
      </p>

      <h2 className="text-4xl md:text-6xl font-black">
        {t.networksTitle}
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
    {t.essenceSubtitle}
  </p>

  <h2 className="text-5xl md:text-7xl font-black">
    {t.essenceTitle}
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
          {t.mission}
        </p>

        <h3 className="text-4xl font-black mb-4">
          {t.missionTitle}
        </h3>

        <p className="text-white/70 mb-6">
          {t.missionDescription}
        </p>

        <a
  href={siteLanguage === "en" ? "/brochure-en.pdf" : "/brochure-es.pdf"}
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-cyan-600
    hover:bg-cyan-500
    px-6
    py-3
    rounded-full
    w-fit
  "
>
  {t.brochure}
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
          {t.vision}
        </p>

        <h3 className="text-4xl font-black mb-4">
          {t.visionTitle}
        </h3>

        <p className="text-white/70 mb-6">
          {t.visionDescription}
        </p>

        <a
  href={siteLanguage === "en" ? "/brochure-en.pdf" : "/brochure-es.pdf"}
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-cyan-600
    hover:bg-cyan-500
    px-6
    py-3
    rounded-full
    w-fit
  "
>
  {t.brochure}
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
            {t.services}
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            {t.servicesTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
  {
    title: t.seaFreight,
    link: "/servicios/maritimo",
    image: "/maritimo.jpg",
  },
  {
    title: t.airFreight,
    link: "/servicios/aereo",
    image: "/aereo.jpg",
  },
  {
    title: t.landFreight,
    link: "/servicios/terrestre",
    image: "/terrestre.jpg",
  },
  {
    title: t.customs,
    link: "/servicios/aduanal",
    image: "/despacho.jpg",
  },
  {
    title: t.cargoInsurance,
    link: "/servicios/seguro",
    image: "/seguro.jpg",
  },
  {
    title: t.cargoHandling,
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
            {t.learnMore}
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
    {t.mexicoWorld}
  </p>
  <h3 className="text-4xl md:text-6xl font-black">
    {t.officesTitle}
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
      {t.viewLocation}
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
  {siteLanguage === "en"
    ? "Request a Quote"
    : "Solicita una cotización"}
</h2>

<p className="text-white/60 mb-12">
  {siteLanguage === "en"
    ? "A specialized logistics advisor will contact you."
    : "Un asesor especializado se pondrá en contacto contigo."}
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
placeholder={t.name}
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="empresa"
placeholder={t.company}
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="correo"
placeholder={t.email}
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="telefono"
placeholder={t.phone}
className="bg-black/30 p-4 rounded-xl"
/>

<select
name="servicio"
className="bg-black/30 p-4 rounded-xl"
>

<option value="Marítimo">
  {siteLanguage === "en" ? "Ocean Freight" : "Marítimo"}
</option>

<option value="Aéreo">
  {siteLanguage === "en" ? "Air Freight" : "Aéreo"}
</option>

<option value="Terrestre">
  {siteLanguage === "en" ? "Ground Freight" : "Terrestre"}
</option>

<option value="Aduanal">
  {siteLanguage === "en" ? "Customs Clearance" : "Aduanal"}
</option>

<option value="Seguro">
  {siteLanguage === "en" ? "Cargo Insurance" : "Seguro"}
</option>
</select>

<input
name="origen"
placeholder={t.origin}
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="destino"
placeholder={t.destination}
className="bg-black/30 p-4 rounded-xl"
/>

<input
name="mercancia"
placeholder={t.merchandise}
className="bg-black/30 p-4 rounded-xl"
/>

<textarea
name="descripcion"
placeholder={t.operationDescription}
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
{siteLanguage === "en"
  ? "Request a Quote"
  : "Solicitar cotización"}
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
        {t.footerDescription}
      </p>
    </div>

    <div>
      <h3 className="font-bold mb-4">
        {t.navigation}
      </h3>

      <ul className="space-y-2 text-white/60">
        <li>{t.home}</li>
        <li>{t.about}</li>
        <li>{t.services}</li>
        <li>{t.blog}</li>
        <li>{t.contact}</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">
        {t.services}
      </h3>

      <ul className="space-y-2 text-white/60">
        <li>{t.seaFreight}</li>
        <li>{t.airFreight}</li>
        <li>{t.landFreight}</li>
        <li>{t.customs}</li>
        <li>{t.cargoInsurance}</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">
        {t.contact}
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
  {t.privacy}
</Link>

<Link
  href="/terminos-condiciones"
  className="hover:text-cyan-400 transition"
>
  {t.terms}
</Link>

  </div>

  <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-sm">
    © 2026 TRAFICARGO INTERNACIONAL. All rights reserved.
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
            {siteLanguage === "en" ? "Traficargo Assistant" : "Asistente Traficargo"}
          </p>

          <p className="text-xs text-cyan-300">
            {siteLanguage === "en" ? "Logistics Support" : "Asistencia logística"}
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
    {siteLanguage === "en"
      ? "Hello, I’m Traficargo’s virtual assistant. I can help you request a quote, answer logistics questions, or connect you with our team."
      : "Hola, soy el asistente virtual de Traficargo. Puedo ayudarte a cotizar una operación, resolver dudas logísticas o conectarte con nuestro equipo."}
  </div>

  {/* MENÚ PRINCIPAL */}
  {chatStep === "inicio" && (
    <>
      <p className="text-sm font-semibold text-white">
        {siteLanguage === "en" ? "How can we help you?" : "¿Qué necesitas hacer?"}
      </p>

      <div className="grid gap-2">
        {[
          { label: siteLanguage === "en" ? "Request a quote" : "Cotizar una operación", step: "operacion" },
          { label: siteLanguage === "en" ? "Ask a logistics question" : "Tengo una duda logística", step: "duda" },
          { label: siteLanguage === "en" ? "Get help with a shipment" : "Necesito ayuda con una operación", step: "ayuda" },
          { label: siteLanguage === "en" ? "Speak with an advisor" : "Hablar con un asesor", step: "asesor" },
        ].map((option) => (
          <button
            key={option.step}
            type="button"
            onClick={() => setChatStep(option.step)} 
            className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-3 text-left text-sm text-white/90 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  )}

  {/* DUDA LOGÍSTICA */}
  {chatStep === "duda" && (
    <>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
        {siteLanguage === "en" ? "I have a logistics question" : "Tengo una duda logística"}
      </div>

      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
        {siteLanguage === "en" ? "Of course. Ask me about imports, exports, ocean freight, air freight, ground transportation, or logistics processes." : "Claro. Escríbeme tu duda sobre importaciones, exportaciones, transporte marítimo, aéreo, terrestre o procesos logísticos."}
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
          {siteLanguage === "en" ? "Checking with the assistant..." : "Consultando al asistente..."}
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
              body: JSON.stringify({
  message: aiQuestion,
  language: siteLanguage,
}),
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
    (siteLanguage === "en"
      ? "Response received."
      : "Respuesta recibida.")
);
          } catch (error) {
            console.error("Error en el asistente:", error);

            setAiAnswer(
              siteLanguage === "en"
                ? "The intelligent assistant is temporarily unavailable. You can go back to the menu to request a quote or contact our team."
                : "El asistente inteligente está temporalmente fuera de servicio. Puedes volver al menú para solicitar una cotización o contactar a nuestro equipo."
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
          placeholder={siteLanguage === "en" ? "Type your logistics question..." : "Escribe tu duda logística..."}
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
          autoFocus
        />

        <button
          type="submit"
          disabled={aiLoading}
          className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {aiLoading
  ? "..."
  : siteLanguage === "en"
    ? "Send"
    : "Enviar"}
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
        {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
      </button>
    </>
  )}
{/* AYUDA CON UNA OPERACIÓN */}
{chatStep === "ayuda" && (
  <>
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
      {siteLanguage === "en" ? "I need help with a shipment" : "Necesito ayuda con una operación"}
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
      {siteLanguage === "en"
        ? "Of course. If you already have an operation with Traficargo, our team can help you track it."
        : "Claro. Si ya tienes una operación con Traficargo, nuestro equipo puede ayudarte con su seguimiento."}
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

  {siteLanguage === "en"
    ? "To get started, please enter your shipment or operation reference number."
    : "Para comenzar, indícame tu número o referencia de operación."}
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
    placeholder={siteLanguage === "en" ? "Shipment reference..." : "Referencia de operación..."}
    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
    autoFocus
  />

  <button
    type="submit"
    className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
  >
    {siteLanguage === "en" ? "Send" : "Enviar"}
  </button>
</form>
    <button
      type="button"
      onClick={() => setChatStep("inicio")}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
    </button>
  </>
)}
{/* DATOS PARA AYUDA CON UNA OPERACIÓN */}
{["ayudaNombre", "ayudaEmpresa", "ayudaContacto", "ayudaProblema"].includes(chatStep) && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      {chatStep === "ayudaNombre" &&
        (siteLanguage === "en"
          ? "Thank you. What is your name?"
          : "Gracias. ¿Cuál es tu nombre?")}

      {chatStep === "ayudaEmpresa" &&
        (siteLanguage === "en"
          ? "What company do you represent?"
          : "¿De qué empresa nos contactas?")}

      {chatStep === "ayudaContacto" &&
        (siteLanguage === "en"
          ? "Please leave us a phone number or email so we can contact you."
          : "Déjanos un teléfono o correo para poder contactarte.")}

      {chatStep === "ayudaProblema" &&
        (siteLanguage === "en"
          ? "Tell us briefly what is happening with your operation or what support you need."
          : "Cuéntanos brevemente qué sucede con tu operación o qué apoyo necesitas.")}

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
        placeholder={
          siteLanguage === "en"
            ? "Type your message here..."
            : "Escribe aquí..."
        }
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
        autoFocus
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        {siteLanguage === "en" ? "Send" : "Enviar"}
      </button>
    </form>
  </>
)}

{/* RESUMEN DE AYUDA */}
{chatStep === "ayudaResumen" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
  {siteLanguage === "en"
    ? `All set, ${supportData.name}. Here is a summary of your support request:`
    : `Listo, ${supportData.name}. Estos son los datos de tu solicitud de apoyo:`}
</div>

    <div className="space-y-1 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4 text-sm text-white/80">

      <p>
  <span className="text-white/45">
    {siteLanguage === "en" ? "Reference:" : "Referencia:"}
  </span>{" "}
  {supportData.reference}
</p>

      <p>
        <span className="text-white/45">
  {siteLanguage === "en" ? "Name:" : "Nombre:"}
</span>{" "}
        {supportData.name}
      </p>

      <p>
        <span className="text-white/45">
  {siteLanguage === "en" ? "Company:" : "Empresa:"}
</span>{" "}
        {supportData.company}
      </p>

      <p>
        <span className="text-white/45">
  {siteLanguage === "en" ? "Contact:" : "Contacto:"}
</span>{" "}
        {supportData.contact}
      </p>

      <p>
        <span className="text-white/45">
  {siteLanguage === "en" ? "Situation:" : "Situación:"}
</span>{" "}
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
        body: JSON.stringify({ ...supportData, language: siteLanguage ?? "es" }),
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
      {siteLanguage === "en"
  ? "Send Support Request to Traficargo"
  : "Enviar solicitud de ayuda a Traficargo"}
</button> 
    <button
      type="button"
      onClick={() => setChatStep("inicio")}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
    >
      {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
    </button>
  </>
)}
{/* AYUDA ENVIADA */}
{chatStep === "ayudaEnviada" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      <p className="font-semibold text-cyan-300">
        {siteLanguage === "en" ? "✓ Request submitted" : "✓ Solicitud registrada"}
      </p>

      <p className="mt-2">
        {siteLanguage === "en"
          ? `Thank you, ${supportData.name}. We have your support request details.`
          : `Gracias, ${supportData.name}. Ya tenemos los datos de tu solicitud de apoyo.`}
      </p>

      <p className="mt-2 text-white/60">
        {siteLanguage === "en"
          ? "A Traficargo team member will review your operation and contact you."
          : "Un integrante del equipo de Traficargo podrá revisar tu operación y ponerse en contacto contigo."}
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
      {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
    </button>
  </>
)}
{/* HABLAR CON UN ASESOR */}
{chatStep === "asesor" && (
  <>
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
      {siteLanguage === "en" ? "Speak with an advisor" : "Hablar con un asesor"}
    </div>

    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
  {siteLanguage === "en"
    ? "Of course. We can arrange for a Traficargo advisor to contact you."
    : "Claro. Podemos pedirle a un asesor de Traficargo que se ponga en contacto contigo."}
</div>

<div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">
  {siteLanguage === "en"
    ? "To get started, what is your name?"
    : "Para comenzar, ¿cuál es tu nombre?"}
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
        placeholder={
  siteLanguage === "en"
    ? "Your name..."
    : "Tu nombre..."
}
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
        autoFocus
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        {siteLanguage === "en" ? "Send" : "Enviar"}
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
      {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
    </button>
  </>
)}
{/* DATOS PARA HABLAR CON UN ASESOR */}
{["asesorEmpresa", "asesorContacto", "asesorMotivo"].includes(chatStep) && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

     {chatStep === "asesorEmpresa" &&
  (siteLanguage === "en"
    ? "Thank you. Which company are you contacting us from?"
    : "Gracias. ¿De qué empresa nos contactas?")}

{chatStep === "asesorContacto" &&
  (siteLanguage === "en"
    ? "What phone number or email address can our advisor use to contact you?"
    : "¿A qué teléfono o correo puede contactarte nuestro asesor?")}

{chatStep === "asesorMotivo" &&
  (siteLanguage === "en"
    ? "Finally, please briefly tell us how we can help you."
    : "Por último, cuéntanos brevemente en qué podemos ayudarte.")}

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
        placeholder={
  siteLanguage === "en"
    ? "Write here..."
    : "Escribe aquí..."
}
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
        autoFocus
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        {siteLanguage === "en" ? "Send" : "Enviar"}
      </button>
    </form>
  </>
)}

{/* RESUMEN PARA ASESOR */}
{chatStep === "asesorResumen" && (
  <>
  <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
  {siteLanguage === "en"
    ? `All set, ${supportData.name}. Please confirm your information before requesting contact with an advisor:`
    : `Listo, ${supportData.name}. Confirma tus datos antes de solicitar contacto con un asesor:`}
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
            body: JSON.stringify({ ...supportData, language: siteLanguage ?? "es" }),
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
      {siteLanguage === "en" ? "Request contact with an advisor" : "Solicitar contacto con un asesor"}
    </button>

    <button
      type="button"
      onClick={() => setChatStep("inicio")}
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
    </button>
  </>
)}

{/* SOLICITUD DE ASESOR REGISTRADA */}
{chatStep === "asesorEnviado" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      <p className="font-semibold text-cyan-300">
  {siteLanguage === "en"
    ? "✓ Request Submitted"
    : "✓ Solicitud registrada"}
</p>

<p className="mt-2">
  {siteLanguage === "en"
    ? `Thank you, ${supportData.name}. We have received your request to speak with an advisor.`
    : `Gracias, ${supportData.name}. Ya tenemos tus datos para solicitar contacto con un asesor.`}
</p>

<p className="mt-2 text-white/60">
  {siteLanguage === "en"
    ? "A Traficargo advisor will be able to review your request and contact you."
    : "Un asesor de Traficargo podrá revisar tu solicitud y ponerse en contacto contigo."}
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
      {siteLanguage === "en" ? "Back to menu" : "Volver al menú"}
    </button>
  </>
)}
  {/* IMPORTACIÓN O EXPORTACIÓN */}
  {chatStep === "operacion" && (
    <>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-sm text-white">
        {siteLanguage === "en" ? "I would like to request a quote" : "Quiero cotizar una operación"}
      </div>

      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
        {siteLanguage === "en" ? "Great. Is this an import or an export?" : "Perfecto. ¿Se trata de una importación o una exportación?"}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {["Importación", "Exportación"].map((operation) => (
          <button
            key={siteLanguage === "en" ? (operation === "Importación" ? "Import" : "Export") : operation}
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
            {siteLanguage === "en" ? (operation === "Importación" ? "Import" : "Export") : operation}
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
        {siteLanguage === "en" ? "What type of transportation do you need?" : "¿Qué tipo de transporte necesitas?"}
      </div>

      <div className="grid gap-2">
        {[
          "Marítimo",
          "Aéreo",
          "Terrestre",
          "No sé cuál necesito",
        ].map((transport) => (
          <button
            key={siteLanguage === "en" ? ({"Marítimo":"Ocean Freight","Aéreo":"Air Freight","Terrestre":"Ground Freight","No sé cuál necesito":"Not sure"} as Record<string,string>)[transport] ?? transport : transport}
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
            {siteLanguage === "en" ? ({"Marítimo":"Ocean Freight","Aéreo":"Air Freight","Terrestre":"Ground Freight","No sé cuál necesito":"Not sure"} as Record<string,string>)[transport] ?? transport : transport}
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
  (siteLanguage === "en"
    ? "Which city, port, or airport is your shipment departing from?"
    : "¿Desde qué ciudad, puerto o aeropuerto sale tu mercancía?")}

        {chatStep === "destino" &&
          (siteLanguage === "en"
            ? "To which city, port, or airport should it be delivered?"
            : "¿A qué ciudad, puerto o aeropuerto debe llegar?")}

        {chatStep === "mercancia" &&
          (siteLanguage === "en"
            ? "What type of cargo do you need to transport?"
            : "¿Qué tipo de mercancía necesitas transportar?")}

        {chatStep === "peso" &&
          (siteLanguage === "en"
            ? "Do you know the weight, volume, or approximate dimensions? If not, write “I don’t know”."
            : "¿Conoces el peso, volumen o dimensiones aproximadas? Si no lo sabes, escribe “No lo sé”.")}

        {chatStep === "nombre" &&
          (siteLanguage === "en"
            ? "Great. What is your name?"
            : "Muy bien. ¿Cuál es tu nombre?")}

        {chatStep === "empresa" &&
          (siteLanguage === "en"
            ? "From which company are you contacting us?"
            : "¿De qué empresa nos contactas?")}

        {chatStep === "contacto" &&
          (siteLanguage === "en"
            ? "Finally, please provide a phone number or email address so an advisor can reach out to you."
            : "Por último, déjanos un teléfono o correo para que un asesor pueda contactarte.")}

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
          placeholder={
  siteLanguage === "en"
    ? "Type here..."
    : "Escribe aquí..."
}
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/50"
          autoFocus
        />

        <button
          type="submit"
          className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
        >
          {siteLanguage === "en" ? "Send" : "Enviar"}
        </button>
      </form>
    </>
  )}

  {/* RESUMEN */}
  {chatStep === "resumen" && (
    <>
      <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm text-white/80">
  {siteLanguage === "en"
    ? `All set, ${quoteData.name}. Here is a summary of your quotation request:`
    : `Listo, ${quoteData.name}. Ya tengo los datos principales de tu solicitud:`}
</div>

      <div className="space-y-1 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4 text-sm text-white/80">

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Operation:" : "Operación:"}
          </span>{" "}
          {quoteData.operation}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Transport:" : "Transporte:"}
          </span>{" "}
          {quoteData.transport}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Origin:" : "Origen:"}
          </span>{" "}
          {quoteData.origin}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Destination:" : "Destino:"}
          </span>{" "}
          {quoteData.destination}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Merchandise:" : "Mercancía:"}
          </span>{" "}
          {quoteData.merchandise}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Weight / Volume:" : "Peso / volumen:"}
          </span>{" "}
          {quoteData.weight}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Company:" : "Empresa:"}
          </span>{" "}
          {quoteData.company}
        </p>

        <p>
          <span className="text-white/45">
            {siteLanguage === "en" ? "Contact:" : "Contacto:"}
          </span>{" "}
          {quoteData.contact}
        </p>

      </div>

      <button
        type="button"
        onClick={async () => {
          if (
  !supportData.reference.trim() ||
  !supportData.name.trim() ||
  !supportData.company.trim() ||
  !supportData.contact.trim() ||
  !supportData.problem.trim()
) {
  alert(
    siteLanguage === "en"
      ? "Please complete all the required information before submitting your request."
      : "Completa toda la información requerida antes de enviar tu solicitud."
  );
  return;
}
  try {
    const response = await fetch("/api/cotizaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...quoteData, language: siteLanguage ?? "es" }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        siteLanguage === "en"
          ? result.message || "We couldn't submit your request right now. Please try again."
          : result.message || "No se pudo enviar la solicitud."
      );
    }

    setChatStep("enviado");
  } catch (error) {
    console.error("Error al enviar la cotización:", error);
    alert(
      siteLanguage === "en"
  ? "We couldn't submit your request right now. Please try again."
  : "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente."
    );
  }
}}
        className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"
      >
        {siteLanguage === "en"
  ? "Submit Request to Traficargo"
  : "Enviar solicitud a Traficargo"}
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
        {siteLanguage === "en"
  ? "Back to menu"
  : "Volver al menú"}
      </button>
        </>
  )}

  {/* SOLICITUD ENVIADA */}
  {chatStep === "enviado" && (
  <>
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/[0.06] p-4 text-sm leading-relaxed text-white/80">

      <p className="font-semibold text-cyan-300">
        {siteLanguage === "en"
          ? "✓ Request Received"
          : "✓ Solicitud recibida"}
      </p>

      <p className="mt-2">
        {siteLanguage === "en"
          ? `Thank you, ${quoteData.name}. Your quotation request has been successfully received by Traficargo.`
          : `Gracias, ${quoteData.name}. Tu solicitud de cotización fue recibida correctamente por Traficargo.`}
      </p>

      <p className="mt-2 text-white/60">
        {siteLanguage === "en"
          ? "A logistics advisor will review your information and contact you shortly."
          : "Un asesor revisará la información y se pondrá en contacto contigo."}
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
      className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      {siteLanguage === "en"
        ? "Start Another Request"
        : "Iniciar otra consulta"}
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
