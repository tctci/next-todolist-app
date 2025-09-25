import { CheckCircleIcon, ClockIcon,StarIcon,PlayCircleIcon}  from '@heroicons/react/24/solid'
import { ComponentType } from 'react'

export type SiteConfig = typeof siteConfig;

export const iconMap = {
  'check-circle': CheckCircleIcon,
  'clock': ClockIcon,
  'star' : StarIcon,
  'play-circle':PlayCircleIcon

} as const

export type IconName = keyof typeof iconMap

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
      icon: 'check-circle' as IconName
    },
    {
      label: "Docs",
      href: "/docs",
      icon: 'clock' as IconName
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: 'star' as IconName
    },
    {
      label: "Blog",
      href: "/blog",
      icon: 'play-circle' as IconName
    },
 
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],

};
