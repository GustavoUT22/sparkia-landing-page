import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Condiciones del servicio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Información legal", title: "Condiciones del servicio" });
}
