import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";
import { Faq, FinalCta, Footer } from "@/components/sections/Closing";
import { Courses, QuickPrograms } from "@/components/sections/Courses";
import { Hero } from "@/components/sections/Hero";
import { Instructor, Method, Pricing, Safety } from "@/components/sections/Info";

export default function HomePage() {
  return (
    <div className="site-shell">
      <JsonLd />
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
