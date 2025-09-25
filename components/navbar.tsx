"use client";


import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig, iconMap, IconName } from "@/config/site";
import { usePathname } from "next/navigation";


export const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="w-19">
      <div className="justify-center flex-col items-center flex">
        {siteConfig.navItems.map((item) => {
          const IconComponent = iconMap[item.icon as IconName];
          return (
            <div key={item.href} className={
              clsx("w-16 h-16 flex justify-center items-center")
            }>
              <NextLink href={item.href}>
                <IconComponent className={
                  clsx('text-default-400 size-9 hover:text-primary transition-colors', pathname === item.href ? 'text-primary' : '')
                } />
                
              </NextLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};
