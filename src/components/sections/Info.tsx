import Image from "next/image";

import { getWhatsAppUrl, siteConfig } from "@/config/site";
import { methodSteps, prices, safetyRules } from "@/content/home";

import { Icon } from "../Icon";

export function Method() {
  return (
    <section className="method-section" id="metodo">
      <div className="container">
        <div className="section-heading centered" data-reveal>
          <span className="section-kicker violet">CÓMO ENSEÑAMOS</span>
          <h2>Aprender haciendo, con acompañamiento real</h2>
          <p>Cada clase tiene una meta clara y tiempo para practicar con el instructor.</p>
        </div>
        <div className="steps-grid">
          {methodSteps.map((step) => (
            <article className="step-card" key={step.number} data-reveal>
              <div className="step-icon">
                <Icon name={step.icon} />
              </div>
              <span className="step-number" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Safety() {
  return (
    <section className="safety-section" id="padres">
      <div className="container safety-wrap" data-reveal>
        <div className="safety-heading">
          <div className="shield-icon">
            <Icon name="shield" size={30} />
          </div>
          <span className="section-kicker lavender">PARA MADRES, PADRES Y TUTORES</span>
          <h2>La confianza también se enseña</h2>
          <p>Reglas simples y transparentes para cuidar a los alumnos y su proceso de aprendizaje.</p>
        </div>
        <ul className="safety-list">
          {safetyRules.map((rule) => (
            <li key={rule}>
              <span>
                <Icon name="check" size={16} />
              </span>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="pricing-section" id="precios">
      <div className="container">
        <div className="section-heading centered" data-reveal>
          <span className="section-kicker violet">PRECIOS REFERENCIALES</span>
          <h2>Opciones claras para empezar</h2>
          <p>Confirma horarios, vacantes y precio final por WhatsApp.</p>
        </div>
        <div className="pricing-grid">
          {prices.map((price) => (
            <article className={`price-card ${price.featured ? "featured" : ""}`} key={price.title} data-reveal>
              {price.featured && <span className="popular">MÁS CONVENIENTE</span>}
              <div className="price-icon">
                <Icon name={price.icon} />
              </div>
              <h3>{price.title}</h3>
              <p className="price">
                <span>S/</span>
                {price.amount}
              </p>
              <p>{price.detail}</p>
              <a
                href={getWhatsAppUrl(`Hola, quisiera información sobre: ${price.title} (S/${price.amount}).`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar <span className="sr-only">{price.title}</span>
                <Icon name="arrow" size={17} />
              </a>
            </article>
          ))}
        </div>
        <p className="price-note">
          * Precios referenciales. La vacante queda confirmada al coordinar la inscripción y el
          pago con el padre, madre o tutor.
        </p>
      </div>
    </section>
  );
}

export function Instructor() {
  const { instructor } = siteConfig;
  return (
    <section className="instructor-section" id="instructor">
      <div className="container instructor-wrap" data-reveal>
        {instructor.photo ? (
          <div className="photo-placeholder">
            <Image
              className="photo-real"
              src={instructor.photo}
              alt={`Foto de ${instructor.name}`}
              fill
              sizes="(max-width: 760px) 100vw, 380px"
            />
          </div>
        ) : (
          <div className="photo-placeholder" aria-hidden="true">
            <span>{instructor.initials}</span>
            <small>
              FOTO REAL
              <br />
              DEL INSTRUCTOR
            </small>
          </div>
        )}
        <div className="instructor-copy">
          <span className="section-kicker warm">CONOCE AL INSTRUCTOR</span>
          <h2>Hola, soy {instructor.name}</h2>
          <p>
            Soy desarrollador de software y enseño programación a niños, jóvenes y adultos desde
            2023. En mis clases busco que cada alumno entienda lo que hace, se anime a preguntar y
            avance construyendo proyectos reales a su nivel.
          </p>
          <div className="instructor-facts">
            <span>
              <Icon name="code" size={18} /> Desarrollador de software
            </span>
            <span>
              <Icon name="message" size={18} /> Enseñanza cercana y práctica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
