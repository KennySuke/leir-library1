export interface FooterLink {
  label: string;
  href?: string;
  bold?: boolean;
}

// Edit these links to change footer targets. "leir" is intentionally left without href.
export const footerLinks: FooterLink[] = [
  { label: "leir", bold: true },
  { label: "telegram", href: "https://t.me/yourhandle" },
  { label: "tg channel", href: "https://t.me/yourchannel" },
  { label: "mail", href: "mailto:you@example.com" },
];

// How many times to repeat the link group in the scrolling footer (for continuous effect)
export const footerRepeatCount = 8;
