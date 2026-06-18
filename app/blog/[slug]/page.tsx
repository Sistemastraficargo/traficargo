import Link from "next/link";
import { notFound } from "next/navigation";
import { articulos } from "@/data/articulos";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articulos.map((articulo) => ({
    slug: articulo.slug,
  }));
}

export default function ArticuloPage({ params }: Props) {
  const articulo = articulos.find((item) => item.slug === params.slug);

  if (!articulo) {
    notFound();
  }

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
            href="/blog"
            className="text-sm uppercase tracking-wider hover:text-cyan-400 transition"
          >
            Volver al blog
          </Link>
        </div>
      </nav>

      {/* HERO ARTÍCULO */}
      <section className="relative min-h-[85vh] flex items-end px-6 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={articulo.imagen}
            alt={articulo.titulo}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
            {articulo.categoria}
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            {articulo.titulo}
          </h1>

          <p className="text-white/50">
            {articulo.fecha}
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="relative z-10 py-20 px-6">
        <article
          className="
          max-w-4xl
          mx-auto
          bg-black/70
          backdrop-blur-xl
          border
          border-cyan-400/10
          rounded-[45px]
          p-8
          md:p-16
          "
        >
          <p className="text-2xl text-white/70 leading-relaxed mb-12">
            {articulo.resumen}
          </p>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            {articulo.contenido.map((parrafo) => (
              <p key={parrafo}>
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <Link
              href="/#cotizar"
              className="inline-flex bg-cyan-700 hover:bg-cyan-600 transition px-10 py-5 rounded-full font-bold"
            >
              Solicitar asesoría
            </Link>
          </div>
        </article>
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