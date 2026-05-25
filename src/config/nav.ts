import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Memberships", href: "#memberships" },
  { label: "About", href: "#about" },
  { label: "Merch", href: "#merch" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Club",
    items: [
      { label: "About", href: "#about" },
      { label: "Memberships", href: "#memberships" },
      { label: "Achievements", href: "#achievements" },
    ],
  },
  {
    title: "Shop & Media",
    items: [
      { label: "Merch", href: "#merch" },
      { label: "Gallery", href: "#gallery" },
      { label: "News", href: "#news" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Email", href: "mailto:hello@galaxyvolleyball.club" },
      { label: "Telegram", href: "https://t.me/" },
      { label: "Instagram", href: "https://instagram.com/" },
    ],
  },
];
