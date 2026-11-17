export type SocialLink = {
  label: string;
  href: string;
};

const DEFAULT_SITE_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Sparkea Academy",
  tagline: "Programación, videojuegos e inteligencia artificial para aprender creando.",
  description:
    "Clases online en vivo de programación para niños, adolescentes y universitarios en Perú. Crea videojuegos con Scratch, aprende Python construyendo un mini-RPG y refuerza lógica y algoritmos. Grupos de máximo 8 alumnos, fines de semana.",
  locale: "es_PE",
  url: resolveSiteUrl(),

  contact: {
    whatsappNumber: "51989313055",
    whatsappMessage: "Hola, quisiera reservar una clase demostrativa gratis.",
    email: "contacto@example.com",
  },

  social: [
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
  ] satisfies SocialLink[],

  instructor: {
    name: "Gustavo Ugarte",
    initials: "GU",
    photo: null as string | null,
  },
} as const;

export const navItems = [
  { label: "Kids", href: "#kids" },
  { label: "Teens", href: "#teens" },
  { label: "Universitarios", href: "#universitarios" },
  { label: "Cómo enseñamos", href: "#metodo" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
] as const;

export function getWhatsAppUrl(message: string = siteConfig.contact.whatsappMessage): string {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getActiveSocialLinks(): SocialLink[] {
  return siteConfig.social.filter((link) => link.href.trim() !== "");
}
