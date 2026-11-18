import Link from "next/link";

import { getActiveSocialLinks, getWhatsAppUrl, hasRealEmail, siteConfig } from "@/config/site";
import { faqs as homeFaqs } from "@/content/home";
import { landings, type FaqItem } from "@/content/landings";

import { Logo, WhatsAppButton } from "../Brand";
import { Icon } from "../Icon";

export function Faq({
  items = homeFaqs,
  heading = "Antes de empezar",
  text = "Si tienes otra pregunta, conversemos directamente por WhatsApp.",
  whatsappMessage = "Hola, tengo una pregunta sobre las clases.",
}: {
  items?: FaqItem[];
  heading?: string;
  text?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="faq-section" id="preguntas">
      <div className="container faq-wrap">
        <div className="faq-heading" data-reveal>
          <span className="section-kicker violet">PREGUNTAS FRECUENTES</span>
          <h2>{heading}</h2>
          <p>{text}</p>
          <WhatsAppButton message={whatsappMessage}>Hacer una pregunta</WhatsAppButton>
        </div>
        <div className="faq-list" data-reveal>
          {items.map((faq, index) => (
            <details className="faq-item" name="faq" key={faq.q} open={index === 0}>
              <summary>
                <span>{faq.q}</span>
                <span className="faq-icon">
                  <Icon name="chevron" size={20} />
                </span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  eyebrow = "Tu primera clase va por nuestra cuenta",
  heading,
  text = "Conoce al instructor, cuéntanos qué le interesa aprender y resolvamos tus dudas.",
  button = "Reservar por WhatsApp",
  whatsappMessage,
  note = "Sin compromiso · Coordinación directa con padres o tutores",
}: {
  eyebrow?: string;
  heading?: string;
  text?: string;
  button?: string;
  whatsappMessage?: string;
  note?: string;
}) {
  return (
    <section className="final-cta" aria-labelledby="cta-final">
      <div className="container final-cta-inner" data-reveal>
        <span className="cta-brace left" aria-hidden="true">
          {"{"}
        </span>
        <span className="cta-brace right" aria-hidden="true">
          {"}"}
        </span>
        <div className="eyebrow light">
          <Icon name="spark" size={16} /> {eyebrow}
        </div>
        <h2 id="cta-final">
          {heading ?? (
            <>
              Reserva una clase
              <br />
              demostrativa gratis
            </>
          )}
        </h2>
        <p>{text}</p>
        <WhatsAppButton message={whatsappMessage}>{button}</WhatsAppButton>
        <small>{note}</small>
      </div>
    </section>
  );
}

export function Footer() {
  const socialLinks = getActiveSocialLinks();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Cursos">
          <b>Cursos</b>
          {landings.map((landing) => (
            <Link key={landing.slug} href={landing.path}>
              {landing.breadcrumb}
            </Link>
          ))}
        </nav>
        <nav aria-label="Recursos">
          <b>Recursos</b>
          <Link href="/guias">Guías para padres y estudiantes</Link>
          <Link href="/condiciones">Condiciones del servicio</Link>
          <Link href="/privacidad">Aviso de privacidad</Link>
        </nav>
        <div>
          <b>Contacto</b>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          {hasRealEmail() && (
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          )}
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <div className="online-note">
          <span className="live-dot" aria-hidden="true" /> Clases 100% online
          <br />
          desde Perú
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {siteConfig.name}</span>
        <span>Hecho con código y paciencia.</span>
      </div>
    </footer>
  );
}
