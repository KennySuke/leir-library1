export interface FooterLink {
  label: string;
  href?: string;
  bold?: boolean;
}

// Edit these links to change footer targets. "leir" is intentionally left without href.
export const footerLinks: FooterLink[] = [
  { label: "leir", bold: true },
  { label: "telegram", href: "https://t.me/KennyKso" },
  { label: "tg channel", href: "https://t.me/leirlibrary" },
  { label: "mail", href: "mailto:homepunkleir@gmail.com" },
];

// How many times to repeat the link group in the scrolling footer (for continuous effect)
export const footerRepeatCount = 8;
