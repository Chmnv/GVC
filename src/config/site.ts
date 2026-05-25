export const siteConfig = {
  name: "Galaxy Volleyball Club",
  shortName: "GVC",
  tagline: "Притяжение силы. Орбита команды.",
  description:
    "Galaxy Volleyball Club — премиальный волейбольный клуб нового поколения. Технологии, тренировки и атмосфера большого спорта.",
  url: "https://galaxyvolleyball.club",
  locale: "ru-RU",
  keywords: [
    "волейбол",
    "Galaxy Volleyball Club",
    "GVC",
    "спортивный клуб",
    "тренировки",
    "команда",
  ],
  social: {
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
    youtube: "https://youtube.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
