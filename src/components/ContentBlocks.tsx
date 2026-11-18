import type { ContentBlock } from "@/content/blocks";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.tipo === "subtitulo") return <h2 key={index}>{block.texto}</h2>;
        if (block.tipo === "parrafo") return <p key={index}>{block.texto}</p>;
        if (block.tipo === "nota")
          return (
            <p key={index} className="prose-note">
              {block.texto}
            </p>
          );
        const ListTag = block.ordenada ? "ol" : "ul";
        return (
          <ListTag key={index}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ListTag>
        );
      })}
    </>
  );
}
