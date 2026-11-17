"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight) return;
      item.classList.add("reveal-pending");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
