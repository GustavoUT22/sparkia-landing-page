import { courses } from "@/content/courses";
import { getLanding } from "@/content/landings";
import { organizationSchema } from "@/lib/seo";

export function JsonLdScript({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

export function JsonLd() {
  const catalog = [
    ...courses.map((course) => ({ name: course.title, description: course.summary, path: course.page })),
    ...(["taller-ia-videojuegos-kids", "clases-particulares-programacion"] as const).map((slug) => {
      const landing = getLanding(slug);
      return { name: landing.courseName, description: landing.lead, path: landing.path };
    }),
  ];
  return <JsonLdScript data={organizationSchema(catalog)} />;
}
