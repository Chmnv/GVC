import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  hint?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AchievementItem {
  year: string;
  title: string;
  description: string;
}
