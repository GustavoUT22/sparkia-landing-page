import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const title = `${siteConfig.name} | Programación y videojuegos online para niños y jóvenes`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/", languages: { "es-PE": "/" } },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  ...(siteConfig.googleSiteVerification
    ? { verification: { google: siteConfig.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#1e1b4b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
