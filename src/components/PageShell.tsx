import Link from "next/link";
import type { ReactNode } from "react";

import type { BreadcrumbItem } from "@/lib/seo";

import { Header } from "./Header";
import { RevealObserver } from "./RevealObserver";
import { Footer } from "./sections/Closing";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <RevealObserver />
      <Header />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Ruta de navegación">
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path}>
              {last ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
