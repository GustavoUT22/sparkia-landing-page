"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/config/site";

import { Logo, WhatsAppButton } from "./Brand";
import { Icon } from "./Icon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <nav
          id="menu-principal"
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton className="nav-cta">Escríbenos por WhatsApp</WhatsAppButton>
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </div>
    </header>
  );
}
