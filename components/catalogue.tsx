"use client";

import { Divider } from "@heroui/divider";
import { Listbox, ListboxSection, ListboxItem } from "@heroui/listbox";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] px-1 py-2 rounded-small">{children}</div>
);

export const Catalogue = () => {
  const items = [
    {
      key: "all",
      label: "All",
    },
    {
      key: "today",
      label: "Today",
    },
    {
      key: "week",
      label: "Last 7 days",
    },
    {
      key: "done",
      label: "Done",
    },
    {
      key: "trashCan",
      label: "Trash can",
    },

  ];


  const lists = [
    {
      id: "1",
      title: "👋 欢迎",
    },
    {
      id: "2",
      title: "💼 工作任务",
    },
    {
      id: "3",
      title: "🏠 个人备忘",
    },
    {
      id: "4",
      title: "📖 学习安排",
    },
    {
      id: "5",
      title: "🏃 锻炼计划",
    },

  ];

  return (
    <ListboxWrapper>
      <Listbox aria-label="Dynamic Actions" items={items}>
        {(item) => <ListboxItem href={`/catalogue/${item.key}`} key={item.key}>{item.label}</ListboxItem>}
      </Listbox>
      <Divider className="my-3"></Divider>
      <Listbox aria-label="Dynamic Actions" items={lists}>
        {(item) => <ListboxItem href={`/list/${item.id}`} key={item.id}>{item.title}</ListboxItem>}
      </Listbox>
    </ListboxWrapper>
  );
};
