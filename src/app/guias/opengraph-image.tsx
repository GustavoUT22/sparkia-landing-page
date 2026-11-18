import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Guías para padres y estudiantes que quieren empezar a programar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Guías gratuitas", title: "Guías para padres y estudiantes que quieren empezar a programar" });
}
