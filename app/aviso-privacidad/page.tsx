"use client";

import Link from "next/link";
import { useSiteLanguage } from "../components/useSiteLanguage";

export default function AvisoPrivacidad() {
  const language = useSiteLanguage();

  const tx = (es: string, en: string) =>
    language === "en" ? en : es;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/">
            <img src="/logo.png" alt="Traficargo" className="h-14" />
          </Link>

          <Link
            href="/"
            className="rounded-full border border-cyan-400/20 px-5 py-2 transition hover:border-cyan-400"
          >
            {tx("Volver al inicio", "Back to Home")}
          </Link>
        </div>
      </nav>

      {/* LOGOTIPO DE FONDO */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-1/2 z-0 w-[900px] -translate-x-1/2 -translate-y-1/2 select-none opacity-20"
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
          TRAFICARGO INTERNACIONAL
        </p>

        <h1 className="mb-12 text-5xl font-black md:text-7xl">
          {tx("Aviso de Privacidad", "Privacy Notice")}
        </h1>

        <div className="space-y-10 text-lg leading-relaxed text-white/70">
          {/* INTRODUCCIÓN */}
          <section>
            <p>
              {tx(
                "En cumplimiento al deber de resguardo de información y de datos personales y con fundamento en los dispuesto por los artículos 3 fracción I, 8, 12, 15, 16 y demás relativos de la Ley Federal de Protección de Datos Personales en Posesión de Particulares, TRAFICARGO INTERNACIONAL SA DE CV, con nombre comercial TRAFICARGO, pone a su disposición el presente Aviso de Privacidad.",
                "In compliance with its obligation to safeguard information and personal data, and pursuant to Articles 3, Section I, 8, 12, 15, 16, and other applicable provisions of the Federal Law on Protection of Personal Data Held by Private Parties, TRAFICARGO INTERNACIONAL SA DE CV, operating under the trade name TRAFICARGO, makes this Privacy Notice available to you."
              )}
            </p>
          </section>

          {/* IDENTIDAD */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Identidad y domicilio del responsable de la protección de datos personales",
                "Identity and Address of the Personal Data Controller"
              )}
            </h2>

            <p>
              {tx(
                "TRAFICARGO INTERNACIONAL SA DE CV, con nombre comercial TRAFICARGO, ubicado en Durango 245 Interior 203A, Colonia Roma Norte, CP. 06700, Ciudad de México, es la persona responsable del uso y protección de sus datos personales.",
                "TRAFICARGO INTERNACIONAL SA DE CV, operating under the trade name TRAFICARGO, located at Durango 245, Interior 203A, Colonia Roma Norte, Postal Code 06700, Mexico City, is responsible for the use and protection of your personal data."
              )}
            </p>
          </section>

          {/* DATOS PERSONALES */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Datos personales utilizados",
                "Personal Data Collected and Used"
              )}
            </h2>

            <p>
              {tx(
                "Para llevar a cabo las finalidades descritas en este Aviso de Privacidad, haremos uso de los siguientes datos personales:",
                "To fulfill the purposes described in this Privacy Notice, we will use the following categories of personal data:"
              )}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-8">
              <li>{tx("Datos de contacto.", "Contact information.")}</li>
              <li>
                {tx(
                  "Datos de identificación.",
                  "Identification information."
                )}
              </li>
              <li>
                {tx(
                  "Datos sobre características físicas.",
                  "Information about physical characteristics."
                )}
              </li>
              <li>{tx("Datos de facturación.", "Billing information.")}</li>
              <li>
                {tx(
                  "Datos patrimoniales o financieros.",
                  "Asset-related or financial information."
                )}
              </li>
            </ul>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Cookies, web beacons y tecnologías similares",
                "Cookies, Web Beacons, and Similar Technologies"
              )}
            </h2>

            <p>
              {tx(
                "Utilizamos cookies, web beacons y/o tecnologías similares para mejorar su experiencia en nuestro sitio web. Estas herramientas recopilan información como su dirección IP, tipo de navegador, páginas visitadas y la duración de su visita.",
                "We use cookies, web beacons, and/or similar technologies to improve your experience on our website. These tools collect information such as your IP address, browser type, pages visited, and the duration of your visit."
              )}
            </p>

            <p className="mt-4">
              {tx(
                "Esta información se puede utilizar para analizar tendencias, administrar el sitio y mejorar nuestros servicios. Puede deshabilitar estas tecnologías en la configuración de su navegador, pero tenga en cuenta que esto podría afectar la funcionalidad del sitio.",
                "This information may be used to analyze trends, administer the website, and improve our services. You may disable these technologies through your browser settings; however, doing so may affect certain website features."
              )}
            </p>
          </section>

          {/* SEGURIDAD */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Medidas de seguridad y tiempo de conservación",
                "Security Measures and Data Retention Period"
              )}
            </h2>

            <p>
              {tx(
                "Hemos implementado medidas de seguridad técnicas, administrativas y físicas para resguardar la seguridad de sus datos personales, cumpliendo con los estándares legales.",
                "We have implemented technical, administrative, and physical security measures to protect your personal data in accordance with applicable legal standards."
              )}
            </p>

            <p className="mt-4">
              {tx(
                "La retención de sus datos se extenderá por un periodo de 12 meses, en consonancia con los propósitos expuestos en este aviso y los plazos legales correspondientes.",
                "Your personal data will be retained for a period of 12 months, consistent with the purposes described in this notice and the applicable legal retention periods."
              )}
            </p>
          </section>

          {/* FINALIDADES */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Finalidades del tratamiento de datos personales",
                "Purposes of Personal Data Processing"
              )}
            </h2>

            <p>
              {tx(
                "Utilizaremos los datos recabados para las siguientes finalidades, que son necesarias para el servicio solicitado:",
                "We will use the collected data for the following purposes, which are necessary to provide the requested service:"
              )}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-8">
              <li>
                {tx(
                  "Finalidad de contacto, aclaraciones y comunicación.",
                  "Contact, inquiries, clarifications, and communication."
                )}
              </li>
              <li>
                {tx(
                  "Finalidad de facturación y cobro.",
                  "Billing and payment collection."
                )}
              </li>
              <li>
                {tx(
                  "Finalidad de envío y entrega de productos y servicios.",
                  "Shipping and delivery of products and services."
                )}
              </li>
              <li>
                {tx(
                  "Finalidad de establecer una relación comercial.",
                  "Establishing a business relationship."
                )}
              </li>
            </ul>

            <p className="mt-6">
              {tx(
                "De manera adicional, utilizaremos su información personal para las siguientes finalidades, que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:",
                "Additionally, we will use your personal information for the following purposes, which are not necessary to provide the requested service but help us improve the attention and service we offer:"
              )}
            </p>

            <ul className="mt-4 list-disc pl-8">
              <li>
                {tx(
                  "Finalidad de realizar encuestas de satisfacción.",
                  "Conducting customer satisfaction surveys."
                )}
              </li>
            </ul>
          </section>

          {/* TRANSFERENCIAS */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Transferencias de datos que se efectúen",
                "Personal Data Transfers"
              )}
            </h2>

            <p>
              {tx(
                "No compartiremos sus datos personales con terceros, salvo por requerimientos legales. Los datos serán utilizados exclusivamente para los fines señalados en este Aviso de Privacidad.",
                "We will not share your personal data with third parties except when required by law. Your data will be used exclusively for the purposes stated in this Privacy Notice."
              )}
            </p>
          </section>

          {/* DERECHOS ARCO */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx("Derechos ARCO", "ARCO Rights")}
            </h2>

            <p>
              {tx(
                "Usted tiene el derecho de conocer los datos personales que tenemos sobre usted, así como su utilización y las condiciones bajo las cuales son tratados. Asimismo, podrá solicitar la rectificación, cancelación u oposición del tratamiento de sus datos personales conforme a la legislación aplicable.",
                "You have the right to know which personal data we hold about you, how it is used, and the conditions under which it is processed. You may also request access to, rectification or cancellation of your personal data, or object to its processing, in accordance with applicable law. These rights are commonly known in Mexico as ARCO rights."
              )}
            </p>

            <div className="mt-6 rounded-3xl border border-cyan-400/10 bg-white/5 p-6">
              <p>
                <strong>{tx("Nombre:", "Name:")}</strong>{" "}
                Arturo Javier Rascón Maldonado
              </p>
              <p>
                <strong>{tx("Domicilio:", "Address:")}</strong>{" "}
                Durango 245 Interior 203A, Col. Roma Norte, CP. 06700, CDMX.
              </p>
              <p>
                <strong>{tx("Teléfono:", "Phone:")}</strong>{" "}
                55 1742 3015
              </p>
              <p>
                <strong>{tx("Correo electrónico:", "Email:")}</strong>{" "}
                arascon@traficargo.com.mx
              </p>
            </div>

            <p className="mt-6">
              {tx(
                "Si desea ejercer sus derechos ARCO puede enviar su solicitud a:",
                "To exercise your ARCO rights, you may submit your request to:"
              )}
            </p>

            <p className="mt-2 font-semibold text-cyan-400">
              administracion@traficargo.com.mx
            </p>

            <p className="mt-4">
              {tx(
                "El plazo para brindar respuesta a su solicitud será de 10 días hábiles.",
                "The response period for your request will be 10 business days."
              )}
            </p>
          </section>

          {/* LIMITACIÓN */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Limitación del uso o divulgación de los datos",
                "Limitation of Data Use or Disclosure"
              )}
            </h2>

            <p>
              {tx(
                "Si desea revocar el consentimiento otorgado para el tratamiento de sus datos personales o limitar su divulgación, puede presentar la solicitud correspondiente al correo:",
                "If you wish to withdraw your consent to the processing of your personal data or limit its disclosure, you may submit the corresponding request to:"
              )}
            </p>

            <p className="mt-2 font-semibold text-cyan-400">
              administracion@traficargo.com.mx
            </p>

            <p className="mt-4">
              {tx(
                "La respuesta será proporcionada en un plazo máximo de 10 días hábiles.",
                "A response will be provided within a maximum of 10 business days."
              )}
            </p>
          </section>

          {/* CAMBIOS */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {tx(
                "Cambios al aviso de privacidad",
                "Changes to This Privacy Notice"
              )}
            </h2>

            <p>
              {tx(
                "El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio o por otras causas.",
                "This Privacy Notice may be modified or updated as a result of new legal requirements; changes in our products or services; our privacy practices; changes to our business model; or other circumstances."
              )}
            </p>

            <p className="mt-4">
              {tx(
                "Usted puede solicitar información sobre actualizaciones al presente aviso mediante:",
                "You may request information about updates to this Privacy Notice by contacting:"
              )}
            </p>

            <p className="mt-2 font-semibold text-cyan-400">
              administracion@traficargo.com.mx
            </p>
          </section>

          {/* ACTUALIZACIÓN */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-white/50">
              {tx(
                "Última actualización: 29 de julio de 2025.",
                "Last updated: July 29, 2025."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* DEGRADADO */}
      <div className="h-24 bg-gradient-to-b from-transparent to-[#04131d]" />

      {/* FOOTER */}
      <footer className="w-full border-t border-cyan-400/10 bg-[#04131d] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          {/* MARCA */}
          <div>
            <img src="/logo.png" alt="Traficargo" className="mb-6 h-16" />

            <p className="text-white/60">
              {tx(
                "Logística Internacional Premium para empresas globales.",
                "Premium International Logistics for Global Businesses."
              )}
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h3 className="mb-4 font-bold">
              {tx("Navegación", "Navigation")}
            </h3>

            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/" className="transition hover:text-cyan-400">
                  {tx("Inicio", "Home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#nosotros"
                  className="transition hover:text-cyan-400"
                >
                  {tx("Nosotros", "About Us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="transition hover:text-cyan-400"
                >
                  {tx("Servicios", "Services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#sucursales"
                  className="transition hover:text-cyan-400"
                >
                  {tx("Sucursales", "Our Offices")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="transition hover:text-cyan-400"
                >
                  {tx("Contacto", "Contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-4 font-bold">{tx("Legal", "Legal")}</h3>

            <ul className="space-y-2 text-white/60">
              <li>
                <Link
                  href="/aviso-privacidad"
                  className="transition hover:text-cyan-400"
                >
                  {tx("Aviso de Privacidad", "Privacy Notice")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="transition hover:text-cyan-400"
                >
                  {tx("Términos y Condiciones", "Terms and Conditions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="mb-4 font-bold">
              {tx("Contacto", "Contact")}
            </h3>

            <ul className="space-y-2 text-white/60">
              <li>+52 55 1742 3015</li>
              <li>ventas@traficargo.com.mx</li>
              <li>CDMX · AICM · AIFA · Cancún</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          {tx(
            "© 2026 TRAFICARGO INTERNACIONAL. Todos los derechos reservados.",
            "© 2026 TRAFICARGO INTERNACIONAL. All rights reserved."
          )}
        </div>
      </footer>
    </main>
  );
}