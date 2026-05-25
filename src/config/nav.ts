import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Club", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Schedule", href: "#schedule" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Club",
    items: [
      { label: "About", href: "#about" },
      { label: "Coaches", href: "#team" },
      { label: "Achievements", href: "#achievements" },
    ],
  },
  {
    title: "Training",
    items: [
      { label: "Schedule", href: "#schedule" },
      { label: "Groups", href: "#groups" },
      { label: "Sign up", href: "#contact" },
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
