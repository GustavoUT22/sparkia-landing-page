import type { ReactNode } from "react";

import { getWhatsAppUrl, siteConfig } from "@/config/site";

import { Icon } from "./Icon";

export function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label={`${siteConfig.name}, ir al inicio`}>
      <span className="logo-mark" aria-hidden="true">
        <span>&lt;</span>
        <b>/</b>
        <span>&gt;</span>
      </span>
      <span>{siteConfig.name}</span>
    </a>
  );
}

export function WhatsAppButton({
  children,
  message,
  className = "",
}: {
  children: ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={`button button-whatsapp ${className}`}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={20} />
      {children}
      <span className="sr-only"> (se abre WhatsApp en una nueva pestaña)</span>
    </a>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span>
            <Icon name="check" size={16} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
