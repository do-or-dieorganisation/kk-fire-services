import { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Achievement {
  icon: LucideIcon;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface AMCPlan {
  title: string;
  description: string;
  includes?: string;
  note?: string;
  highlight: boolean;
}