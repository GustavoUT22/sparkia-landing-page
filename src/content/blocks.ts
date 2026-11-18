export type ContentBlock =
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "parrafo"; texto: string }
  | { tipo: "lista"; items: string[]; ordenada?: boolean }
  | { tipo: "nota"; texto: string };

export function countWords(blocks: ContentBlock[]): number {
  return blocks
    .map((block) => ("items" in block ? block.items.join(" ") : block.texto))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}
