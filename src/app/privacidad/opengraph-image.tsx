import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Aviso de privacidad";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Información legal", title: "Aviso de privacidad" });
}
