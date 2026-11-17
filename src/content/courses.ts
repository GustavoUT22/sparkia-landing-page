import type { IconName } from "@/components/Icon";

export type CourseId = "kids" | "teens" | "uni";

export type Course = {
  id: CourseId;
  anchor: string;
  quick: { eyebrow: string; title: string; text: string; symbol: string };
  kicker: string;
  kickerTone: "warm" | "cyan" | "navy";
  title: string;
  summary: string;
  details: { icon: IconName; label: string }[];
  outcomesTitle?: string;
  outcomes: string[];
  extraLanguages?: string[];
  cta: string;
  whatsappMessage: string;
};

export const courses: Course[] = [
  {
    id: "kids",
    anchor: "kids",
    quick: { eyebrow: "8–12 años", title: "Kids", text: "Scratch y videojuegos", symbol: "★" },
    kicker: "PROGRAMA KIDS · 8 A 12 AÑOS",
    kickerTone: "warm",
    title: "Crea tu primer videojuego con Scratch",
    summary:
      "Tu hijo aprenderá la lógica detrás de un videojuego mientras construye una historia que puede jugar y compartir.",
    details: [
      { icon: "calendar", label: "4 semanas" },
      { icon: "clock", label: "8 sesiones de 1h15" },
      { icon: "calendar", label: "Sábado y domingo" },
    ],
    outcomesTitle: "LO QUE LOGRARÁ TU HIJO",
    outcomes: [
      "Crear un juego con personajes, puntaje y vidas",
      "Entender secuencias, eventos y decisiones",
      "Presentar su proyecto en una “feria de juegos” final",
    ],
    cta: "Consultar por el curso Kids",
    whatsappMessage:
      "Hola, quisiera información sobre el curso de videojuegos con Scratch (8 a 12 años).",
  },
  {
    id: "teens",
    anchor: "teens",
    quick: { eyebrow: "13–17 años", title: "Teens", text: "Python y mini-RPG", symbol: "◆" },
    kicker: "PROGRAMA TEENS · 13 A 17 AÑOS",
    kickerTone: "cyan",
    title: "Python desde cero: crea tu mini-RPG",
    summary:
      "Aprende Python de verdad y úsalo para construir un juego propio. Menos teoría suelta, más código con propósito.",
    details: [
      { icon: "calendar", label: "4 semanas" },
      { icon: "clock", label: "8 sesiones de 1h15" },
      { icon: "calendar", label: "Sábado y domingo" },
      { icon: "code", label: "Desde cero" },
    ],
    outcomes: [
      "Mapa y exploración",
      "Personajes y diálogos",
      "Inventario y objetos",
      "Decisiones usando lógica de programación",
    ],
    cta: "Consultar por el curso Teens",
    whatsappMessage:
      "Hola, quisiera información sobre el curso de Python y mini-RPG (13 a 17 años).",
  },
  {
    id: "uni",
    anchor: "universitarios",
    quick: {
      eyebrow: "Universitarios",
      title: "Universitarios",
      text: "Lógica y algoritmos",
      symbol: "{ }",
    },
    kicker: "PARA UNIVERSITARIOS",
    kickerTone: "navy",
    title: "Lógica de programación y algoritmos",
    summary:
      "Refuerza las bases que necesitas para avanzar con seguridad en tus cursos y resolver problemas por tu cuenta.",
    details: [],
    outcomes: [
      "Pensamiento lógico y resolución de problemas",
      "Algoritmos, condicionales, bucles y funciones",
      "Práctica guiada con ejercicios progresivos",
    ],
    extraLanguages: ["Java", "C#", "JavaScript", "SQL"],
    cta: "Consultar disponibilidad",
    whatsappMessage:
      "Hola, quisiera información sobre las clases de lógica de programación para universitarios.",
  },
];
