import { WhatsAppButton } from "../Brand";
import { Icon } from "../Icon";
import { HeroIllustration } from "../Illustrations";

const trustItems = ["100% online", "Fines de semana", "Atención cercana"];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid container">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow">
            <Icon name="spark" size={16} /> Clases online en vivo · Perú
          </div>
          <h1>
            Aprende a crear <span>{"{ videojuegos }"}</span> desde casa
          </h1>
          <p className="hero-sub">
            Programación práctica y acompañada para que tus hijos aprendan creando, en grupos de
            máximo 8 alumnos.
          </p>
          <div className="hero-actions">
            <WhatsAppButton>Reserva una clase demostrativa gratis</WhatsAppButton>
            <a className="button button-secondary" href="#programas">
              Ver programas <Icon name="arrow" size={19} />
            </a>
          </div>
          <ul className="hero-trust" aria-label="Características">
            {trustItems.map((item) => (
              <li key={item}>
                <span>
                  <Icon name="check" size={15} /> {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal className="hero-art-wrap">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
