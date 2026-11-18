import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Sparkia Academy: clases de programación y videojuegos online para niños y jóvenes";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Niños, adolescentes y universitarios",
    title: "Aprende a programar creando videojuegos",
  });
}
