import { getActiveSocialLinks, getWhatsAppUrl, siteConfig } from "@/config/site";
import { courses } from "@/content/courses";
import { faqs } from "@/content/home";

import { Logo, WhatsAppButton } from "../Brand";
import { Icon } from "../Icon";

export function Faq() {
  return (
    <section className="faq-section" id="preguntas">
      <div className="container faq-wrap">
        <div className="faq-heading" data-reveal>
          <span className="section-kicker violet">PREGUNTAS FRECUENTES</span>
          <h2>Antes de empezar</h2>
          <p>Si tienes otra pregunta, conversemos directamente por WhatsApp.</p>
          <WhatsAppButton message="Hola, tengo una pregunta sobre las clases.">
            Hacer una pregunta
          </WhatsAppButton>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((faq, index) => (
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

export function FinalCta() {
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
          <Icon name="spark" size={16} /> Tu primera clase va por nuestra cuenta
        </div>
        <h2 id="cta-final">
          Reserva una clase
          <br />
          demostrativa gratis
        </h2>
        <p>Conoce al instructor, cuéntanos qué le interesa aprender y resolvamos tus dudas.</p>
        <WhatsAppButton>Reservar por WhatsApp</WhatsAppButton>
        <small>Sin compromiso · Coordinación directa con padres o tutores</small>
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
        <nav aria-label="Programas">
          <b>Programas</b>
          {courses.map((course) => (
            <a key={course.id} href={`#${course.anchor}`}>
              {course.quick.title}
            </a>
          ))}
        </nav>
        <div>
          <b>Contacto</b>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
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
