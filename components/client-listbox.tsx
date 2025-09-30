"use client";

import { Listbox, ListboxItem } from "@heroui/listbox";
import { useEffect, useState } from "react";

interface ClientListboxProps {
  items: Array<{ key: string; label: string; href?: string }>;
  ariaLabel: string;
}

export const ClientCataloguebox = ({ items, ariaLabel }: ClientListboxProps) => {
  return (
    <Listbox aria-label={ariaLabel} items={items}>
      {(item) => (
        <ListboxItem 
          href={item.href || `/${item.key}`} 
          key={item.key}
        >
          {item.label}
        </ListboxItem>
      )}
    </Listbox>
  );
};

interface ClientPlansListboxProps {
  initialPlans: any[];
}

export const ClientPlansListbox = ({ initialPlans }: ClientPlansListboxProps) => {
  return (
    <Listbox aria-label="Plans" items={initialPlans}>
      {(item) => (
        <ListboxItem href={`/plan/${item.id}`} key={item.id}>
          {item.title}
        </ListboxItem>
      )}
    </Listbox>
  );
};
