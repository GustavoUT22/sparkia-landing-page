import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "code"
  | "group"
  | "menu"
  | "message"
  | "progress"
  | "shield"
  | "spark"
  | "target"
  | "whatsapp"
  | "x";

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  code: <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />,
  group: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  progress: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  spark: (
    <path d="m12 3 1.3 4.2a5 5 0 0 0 3.3 3.3L21 12l-4.4 1.5a5 5 0 0 0-3.3 3.3L12 21l-1.3-4.2a5 5 0 0 0-3.3-3.3L3 12l4.4-1.5a5 5 0 0 0 3.3-3.3Z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.7l1.5-4.8A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8 7.8c.3-.5.5-.5.9-.5h.4c.2 0 .4.1.5.5l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.7 1.3 1.7 2.2 3 2.8.3.2.5.1.7-.1l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.2.5.3.5.5 0 .2-.1 1.1-.6 1.7-.5.6-1.4 1-2.3 1-1 0-2.8-.6-4.7-2.2-2.3-2-3.8-4.4-3.9-5.9 0-.7.2-1.4.6-1.9" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
