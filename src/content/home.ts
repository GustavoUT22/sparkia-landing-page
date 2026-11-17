import type { IconName } from "@/components/Icon";

export const methodSteps: { icon: IconName; number: string; title: string; text: string }[] = [
  {
    icon: "group",
    number: "01",
    title: "Grupos pequeños",
    text: "Máximo 8 alumnos para escuchar, preguntar y recibir ayuda.",
  },
  {
    icon: "target",
    number: "02",
    title: "Un proyecto final",
    text: "Cada curso termina con algo propio, funcional y presentable.",
  },
  {
    icon: "progress",
    number: "03",
    title: "Seguimiento del progreso",
    text: "Observamos el avance y reforzamos lo que necesite más práctica.",
  },
  {
    icon: "message",
    number: "04",
    title: "Comunicación directa",
    text: "Coordinamos avances y dudas con los padres o tutores.",
  },
];

export const safetyRules = [
  "Inscripción y comunicación solo con padres o tutores.",
  "No grabamos a los alumnos durante las clases.",
  "No agregamos a menores a grupos públicos.",
  "Enseñamos y orientamos; no hacemos tareas por los alumnos.",
];

export const prices: {
  icon: IconName;
  title: string;
  amount: number;
  detail: string;
  featured: boolean;
}[] = [
  {
    icon: "code",
    title: "Clase particular",
    amount: 35,
    detail: "1 hora · Atención individual",
    featured: false,
  },
  {
    icon: "calendar",
    title: "Paquete particular",
    amount: 120,
    detail: "4 horas · Coordina tus horarios",
    featured: true,
  },
  {
    icon: "group",
    title: "Curso grupal",
    amount: 150,
    detail: "4 semanas · Máximo 8 alumnos",
    featured: false,
  },
];

export const faqs = [
  {
    q: "¿Qué necesita mi hijo para participar?",
    a: "Una computadora o laptop (no tablet) con internet estable y micrófono. Para el curso de Scratch, una cuenta gratuita creada por el padre, madre o tutor. Antes de iniciar revisamos juntos que todo esté listo.",
  },
  {
    q: "¿Cómo son las clases online?",
    a: "Nos conectamos por Google Meet. El instructor explica en vivo, comparte ejemplos y acompaña a cada alumno mientras desarrolla su propio proyecto.",
  },
  {
    q: "¿Qué pasa si falta a una clase?",
    a: "Le enviamos un video corto del instructor con la demostración de esa sesión para que se ponga al día. No grabamos a los alumnos.",
  },
  {
    q: "¿Entregan certificado?",
    a: "Sí. Entregamos una constancia digital a quien asiste al menos a 6 de las 8 sesiones y presenta su proyecto final.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "Coordinamos la inscripción y el medio de pago directamente con el padre, madre o tutor por WhatsApp. No solicitamos pagos desde esta web.",
  },
  {
    q: "¿Necesita experiencia previa?",
    a: "No. Los cursos de inicio están pensados para aprender desde cero, con retos adecuados para cada edad.",
  },
];
