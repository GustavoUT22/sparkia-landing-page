import Link from "next/link";

import { getWhatsAppUrl } from "@/config/site";
import { getLanding, type LandingSlug } from "@/content/landings";
import { breadcrumbSchema, buildMetadata, courseSchema, faqSchema } from "@/lib/seo";

import { CheckList, WhatsAppButton } from "../Brand";
import { Icon } from "../Icon";
import { CourseVisual } from "../Illustrations";
import { JsonLdScript } from "../JsonLd";
import { Breadcrumbs, PageShell } from "../PageShell";
import { Faq, FinalCta } from "../sections/Closing";

const faqHeadings: Record<LandingSlug, string> = {
  "kids-scratch-videojuegos": "Dudas frecuentes de madres y padres",
  "teens-python-mini-rpg": "Dudas frecuentes de madres y padres",
  "universitarios-logica-algoritmos": "Dudas frecuentes sobre el curso",
  "taller-ia-videojuegos-kids": "Dudas frecuentes sobre el taller",
  "clases-particulares-programacion": "Dudas frecuentes sobre las clases",
};

function crumbs(slug: LandingSlug) {
  const landing = getLanding(slug);
  const base = [{ name: "Inicio", path: "/" }];
  if (landing.path.startsWith("/cursos/")) {
    return [...base, { name: "Cursos", path: "/#programas" }, { name: landing.breadcrumb, path: landing.path }];
  }
  return [...base, { name: landing.breadcrumb, path: landing.path }];
}

export function landingMetadata(slug: LandingSlug) {
  const landing = getLanding(slug);
  return buildMetadata({
    title: landing.seo.title,
    description: landing.seo.description,
    path: landing.path,
    ogTitle: landing.seo.ogTitle,
  });
}

export function CourseLandingPage({ slug }: { slug: LandingSlug }) {
  const landing = getLanding(slug);
  const breadcrumbItems = crumbs(slug);
  const schemaCrumbs = breadcrumbItems.filter((item) => !item.path.includes("#"));
  const sessionCols = landing.syllabus.sessions.length < 4 ? "cols-2" : "";

  return (
    <PageShell>
      <JsonLdScript
        data={[courseSchema(landing), faqSchema(landing.faqs), breadcrumbSchema(schemaCrumbs)]}
      />

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy" data-reveal>
            <Breadcrumbs items={breadcrumbItems} />
            <div className="eyebrow">
              <Icon name="spark" size={16} /> {landing.eyebrow}
            </div>
            <h1>{landing.h1}</h1>
            <p className="page-lead">{landing.lead}</p>
            <ul className="details-row" aria-label="Datos principales">
              {landing.pills.map((pill) => (
                <li key={pill.label} className="detail-pill">
                  <Icon name={pill.icon} size={17} />
                  {pill.label}
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <WhatsAppButton message={landing.cta.whatsappMessage}>{landing.cta.button}</WhatsAppButton>
              <a className="button button-secondary" href="#temario">
                Ver temario <Icon name="arrow" size={19} />
              </a>
            </div>
          </div>
          <CourseVisual id={landing.visual} />
        </div>
      </section>

      <section className="page-section white">
        <div className="container two-col">
          <div className="section-heading" data-reveal>
            <span className={`section-kicker ${landing.tone}`}>{landing.breadcrumb.toUpperCase()}</span>
            <h2>{landing.intro.heading}</h2>
            {landing.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="info-card" data-reveal>
            <h2>{landing.audience.heading}</h2>
            <CheckList items={landing.audience.items} />
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container two-col">
          <div className="outcome-box" data-reveal>
            <h2 className="mini-title">{landing.objectives.heading.toUpperCase()}</h2>
            <CheckList items={landing.objectives.items} />
          </div>
          {landing.project ? (
            <div className="info-card" data-reveal>
              <div className="step-icon">
                <Icon name="target" />
              </div>
              <h2>{landing.project.heading}</h2>
              <p>{landing.project.text}</p>
              <CheckList items={landing.project.items} />
            </div>
          ) : (
            <div className="info-card" data-reveal>
              <div className="step-icon">
                <Icon name="target" />
              </div>
              <h2>{landing.requirements.heading}</h2>
              <CheckList items={landing.requirements.items} />
            </div>
          )}
        </div>
      </section>

      <section className="page-section white" id="temario">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <span className="section-kicker violet">TEMARIO</span>
            <h2>{landing.syllabus.heading}</h2>
            {landing.syllabus.note && <p>{landing.syllabus.note}</p>}
          </div>
          <ol className={`steps-grid session-grid ${sessionCols}`}>
            {landing.syllabus.sessions.map((session, index) => (
              <li className="step-card session-card" key={session.title} data-reveal>
                <span className="step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{session.title}</h3>
                <p>{session.result}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <span className="section-kicker violet">FORMATO</span>
            <h2>{landing.format.heading}</h2>
            {landing.format.note && <p>{landing.format.note}</p>}
          </div>
          <ul className="steps-grid format-grid">
            {landing.format.items.map((item) => (
              <li className="step-card format-card" key={item.label} data-reveal>
                <div className="step-icon">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="two-col spaced">
            {landing.project && (
              <div className="info-card" data-reveal>
                <h2>{landing.requirements.heading}</h2>
                <CheckList items={landing.requirements.items} />
              </div>
            )}
            <div className="info-card" data-reveal>
              <h2>{landing.certificate.heading}</h2>
              <p>{landing.certificate.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="precio">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <span className="section-kicker violet">INVERSIÓN</span>
            <h2>{landing.price.heading}</h2>
          </div>
          <div className="pricing-grid compact">
            {landing.price.options.map((option) => (
              <article className="price-card" key={option.label} data-reveal>
                <div className="price-icon">
                  <Icon name="calendar" />
                </div>
                <h3>{option.label}</h3>
                <p className="price">
                  <span>S/</span>
                  {option.amount}
                </p>
                <p>{option.detail}</p>
                <a
                  href={getWhatsAppUrl(`${landing.cta.whatsappMessage} (${option.label}: S/${option.amount}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar <span className="sr-only">{option.label}</span>
                  <Icon name="arrow" size={17} />
                </a>
              </article>
            ))}
            {landing.price.fallback && (
              <article className="price-card" data-reveal>
                <div className="price-icon">
                  <Icon name="message" />
                </div>
                <h3>{landing.price.fallback}</h3>
                <p>Te respondemos con fechas, horarios y precio vigente.</p>
                <a href={getWhatsAppUrl(landing.cta.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                  <Icon name="arrow" size={17} />
                </a>
              </article>
            )}
          </div>
          <p className="price-note">* {landing.price.note}</p>
        </div>
      </section>

      <Faq
        items={landing.faqs}
        heading={faqHeadings[slug]}
        text="Si tu duda no está aquí, escríbenos por WhatsApp."
        whatsappMessage={landing.cta.whatsappMessage}
      />

      <FinalCta
        eyebrow={landing.eyebrow}
        heading={landing.cta.heading}
        text={landing.cta.text}
        button={landing.cta.button}
        whatsappMessage={landing.cta.whatsappMessage}
        note={
          landing.visual === "uni"
            ? "Sin compromiso · Respuesta directa por WhatsApp"
            : "Sin compromiso · Coordinación directa con padres o tutores"
        }
      />

      <section className="page-section white related-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="section-kicker violet">TAMBIÉN TE PUEDE INTERESAR</span>
            <h2>Sigue explorando</h2>
          </div>
          <ul className="related-grid">
            {landing.related.map((link) => (
              <li key={link.href} data-reveal>
                <Link className="related-card" href={link.href}>
                  <b>{link.label}</b>
                  <span>{link.text}</span>
                  <span className="text-link">
                    Ver más <Icon name="arrow" size={17} />
                  </span>
                </Link>
              </li>
            ))}
            <li data-reveal>
              <Link className="related-card" href="/guias">
                <b>Guías para madres, padres y estudiantes</b>
                <span>Respuestas honestas a las dudas más comunes antes de empezar.</span>
                <span className="text-link">
                  Ver guías <Icon name="arrow" size={17} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
