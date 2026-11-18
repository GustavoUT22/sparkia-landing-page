import type { Metadata } from "next";

import { absoluteUrl, getActiveSocialLinks, hasRealEmail, siteConfig } from "@/config/site";
import type { CourseLanding, FaqItem } from "@/content/landings";

export const organizationId = `${siteConfig.url}/#organizacion`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  type = "website",
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
}: PageSeo): Metadata {
  const shareTitle = ogTitle ?? title;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages: { "es-PE": path },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: shareTitle,
      description,
      ...(type === "article" && publishedTime ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function providerSchema() {
  return {
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function organizationSchema(courses: { name: string; description: string; path: string }[]) {
  const sameAs = getActiveSocialLinks().map((link) => link.href);
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    ...(hasRealEmail() ? { email: siteConfig.contact.email } : {}),
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
          name: course.name,
          description: course.description,
          url: absoluteUrl(course.path),
          provider: providerSchema(),
        },
      })),
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function courseSchema(landing: CourseLanding) {
  const url = absoluteUrl(landing.path);
  const offers = landing.price.options.map((option) => ({
    "@type": "Offer",
    name: option.label,
    category: "Paid",
    price: option.amount.toFixed(2),
    priceCurrency: "PEN",
    url,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: landing.courseName,
    description: landing.seo.description,
    url,
    inLanguage: "es",
    educationalLevel: landing.schema.educationalLevel,
    teaches: landing.schema.teaches,
    audience: { "@type": "EducationalAudience", audienceType: landing.schema.audience },
    provider: providerSchema(),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      inLanguage: "es",
      ...(landing.schema.workload ? { courseWorkload: landing.schema.workload } : {}),
    },
    ...(offers.length > 0 ? { offers } : {}),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = absoluteUrl(article.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "es",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: `${url}/opengraph-image`,
    author: providerSchema(),
    publisher: providerSchema(),
  };
}
