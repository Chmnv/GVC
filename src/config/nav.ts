import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Клуб", href: "#about" },
  { label: "Команда", href: "#team" },
  { label: "Расписание", href: "#schedule" },
  { label: "Достижения", href: "#achievements" },
  { label: "Контакты", href: "#contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Клуб",
    items: [
      { label: "О нас", href: "#about" },
      { label: "Тренеры", href: "#team" },
      { label: "Достижения", href: "#achievements" },
    ],
  },
  {
    title: "Тренировки",
    items: [
      { label: "Расписание", href: "#schedule" },
      { label: "Группы", href: "#groups" },
      { label: "Записаться", href: "#contact" },
    ],
  },
  {
    title: "Контакты",
    items: [
      { label: "Email", href: "mailto:hello@galaxyvolleyball.club" },
      { label: "Telegram", href: "https://t.me/" },
      { label: "Instagram", href: "https://instagram.com/" },
    ],
  },
];
