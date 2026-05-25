export const siteConfig = {
  name: "Galaxy Volleyball Club",
  shortName: "GVC",
  tagline: "Gravity of strength. Orbit of the team.",
  description:
    "Galaxy Volleyball Club — a next-generation premium volleyball club. Technology, training and the atmosphere of big-time sports in every match.",
  url: "https://galaxyvolleyball.club",
  locale: "en-US",
  keywords: [
    "volleyball",
    "Galaxy Volleyball Club",
    "GVC",
    "sports club",
    "training",
    "team",
  ],
  social: {
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
    youtube: "https://youtube.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
