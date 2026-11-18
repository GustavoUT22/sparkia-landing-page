import Link from "next/link";

import { countWords } from "@/content/blocks";
import { getGuia, guias, type GuiaSlug } from "@/content/guias";
import type { LegalPage } from "@/content/legal";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";

import { ContentBlocks } from "../ContentBlocks";
import { Icon } from "../Icon";
import { JsonLdScript } from "../JsonLd";
import { Breadcrumbs, PageShell } from "../PageShell";

const dateFormatter = new Intl.DateTimeFormat("es-PE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}

export function guiaMetadata(slug: GuiaSlug) {
  const guia = getGuia(slug);
  return buildMetadata({
    title: guia.seoTitle,
    description: guia.description,
    path: guia.path,
    ogTitle: guia.title,
    type: "article",
    publishedTime: guia.datePublished,
    modifiedTime: guia.dateModified,
  });
}

function GuideCard({ slug }: { slug: GuiaSlug }) {
  const guia = getGuia(slug);
  return (
    <Link className="related-card guide-card" href={guia.path}>
      <span className="section-kicker violet">{guia.audience.toUpperCase()}</span>
      <b>{guia.title}</b>
      <span>{guia.description}</span>
      <span className="text-link">
        Leer la guía <Icon name="arrow" size={17} />
      </span>
    </Link>
  );
}

export function GuiasIndexPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Guías", path: "/guias" },
  ];
  return (
    <PageShell>
      <JsonLdScript data={breadcrumbSchema(crumbs)} />
      <section className="page-hero compact">
        <div className="container">
          <div className="page-hero-copy narrow" data-reveal>
            <Breadcrumbs items={crumbs} />
            <div className="eyebrow">
              <Icon name="spark" size={16} /> Guías gratuitas
            </div>
            <h1>Guías sobre clases de programación para niños, adolescentes y universitarios</h1>
            <p className="page-lead">
              Respuestas honestas a las dudas más comunes de madres, padres y estudiantes antes de
              empezar a programar: edades, herramientas, cursos online y exámenes.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section white">
        <div className="container">
          <ul className="related-grid guide-grid">
            {guias.map((guia) => (
              <li key={guia.slug} data-reveal>
                <GuideCard slug={guia.slug} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

export function GuiaPage({ slug }: { slug: GuiaSlug }) {
  const guia = getGuia(slug);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Guías", path: "/guias" },
    { name: guia.title, path: guia.path },
  ];
  const minutes = Math.max(1, Math.round(countWords(guia.blocks) / 200));
  const others = guias.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <JsonLdScript data={[articleSchema(guia), breadcrumbSchema(crumbs)]} />
      <article>
        <header className="page-hero compact">
          <div className="container">
            <div className="page-hero-copy narrow" data-reveal>
              <Breadcrumbs items={crumbs} />
              <div className="eyebrow">
                <Icon name="spark" size={16} /> Guía para {guia.audience.toLowerCase()}
              </div>
              <h1>{guia.title}</h1>
              <p className="page-lead">{guia.description}</p>
              <p className="article-meta">
                Publicado el <time dateTime={guia.datePublished}>{formatDate(guia.datePublished)}</time>
                {" · "}
                {minutes} min de lectura
              </p>
            </div>
          </div>
        </header>
        <div className="page-section white">
          <div className="container prose">
            <ContentBlocks blocks={guia.blocks} />
            <aside className="article-cta" aria-labelledby="guia-cta">
              <h2 id="guia-cta">{guia.cta.heading}</h2>
              <p>{guia.cta.text}</p>
              <ul>
                {guia.cta.links.map((link) => (
                  <li key={link.href}>
                    <Link className="button button-primary" href={link.href}>
                      {link.label} <Icon name="arrow" size={18} />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>
      <section className="page-section alt related-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="section-kicker violet">MÁS GUÍAS</span>
            <h2>Sigue leyendo</h2>
          </div>
          <ul className="related-grid">
            {others.map((item) => (
              <li key={item.slug} data-reveal>
                <GuideCard slug={item.slug} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

export function legalMetadata(page: LegalPage) {
  return buildMetadata({ title: page.seoTitle, description: page.description, path: page.path });
}

export function LegalArticlePage({ page }: { page: LegalPage }) {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: page.title, path: page.path },
  ];
  return (
    <PageShell>
      <JsonLdScript data={breadcrumbSchema(crumbs)} />
      <article>
        <header className="page-hero compact">
          <div className="container">
            <div className="page-hero-copy narrow" data-reveal>
              <Breadcrumbs items={crumbs} />
              <div className="eyebrow">
                <Icon name="shield" size={16} /> Información legal
              </div>
              <h1>{page.title}</h1>
              <p className="prose-note">{page.status}</p>
            </div>
          </div>
        </header>
        <div className="page-section white">
          <div className="container prose">
            <ContentBlocks blocks={page.blocks} />
          </div>
        </div>
      </article>
    </PageShell>
  );
}
