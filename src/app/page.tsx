import { Header } from "@/components/Header";
import { JsonLd, JsonLdScript } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";
import { Faq, FinalCta, Footer } from "@/components/sections/Closing";
import { Courses, QuickPrograms } from "@/components/sections/Courses";
import { Hero } from "@/components/sections/Hero";
import { Method, Pricing, Safety } from "@/components/sections/Info";
import { siteConfig } from "@/config/site";
import { faqs } from "@/content/home";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Clases de programación y videojuegos para niños`,
  absoluteTitle: true,
  description:
    "Cursos de programación online en Perú: tu hijo crea videojuegos con Scratch (8-12) o Python (13-17). Clases en vivo, fines de semana, máximo 8 alumnos.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="site-shell">
      <JsonLd />
      <JsonLdScript data={faqSchema(faqs)} />
      <RevealObserver />
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <QuickPrograms />
        <Courses />
        <Method />
        <Safety />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
