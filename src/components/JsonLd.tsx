import { getActiveSocialLinks, siteConfig } from "@/config/site";
import { courses } from "@/content/courses";

export function JsonLd() {
  const sameAs = getActiveSocialLinks().map((link) => link.href);

  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.whatsappNumber.replace(/\D/g, "")}`,
    areaServed: { "@type": "Country", name: "Perú" },
    knowsLanguage: "es",
    founder: { "@type": "Person", name: siteConfig.instructor.name },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Programas",
      itemListElement: courses.map((course) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: course.title,
          description: course.summary,
          provider: { "@type": "EducationalOrganization", name: siteConfig.name },
        },
      })),
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
