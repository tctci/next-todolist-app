import { Divider } from "@heroui/divider";
import dynamic from "next/dynamic";

// 动态导入客户端组件，禁用 SSR
const ClientListbox = dynamic(() => import("./client-listbox").then(mod => ({ default: mod.ClientListbox })), {
  ssr: false
});

const ClientPlansListbox = dynamic(() => import("./client-listbox").then(mod => ({ default: mod.ClientPlansListbox })), {
  ssr: false
});

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] px-1 py-2 rounded-small">{children}</div>
);

export const SimpleCatalogue = () => {
  const items = [
    { key: "all", label: "All", href: "/catalogue/all" },
    { key: "today", label: "Today", href: "/catalogue/today" },
    { key: "week", label: "Last 7 days", href: "/catalogue/week" },
    { key: "done", label: "Done", href: "/catalogue/done" },
    { key: "trashCan", label: "Trash can", href: "/catalogue/trashCan" },
  ];

  return (
    <ListboxWrapper>
      <ClientListbox items={items} ariaLabel="Navigation Menu" />
      <Divider className="my-3" />
      <ClientPlansListbox initialPlans={[]} />
    </ListboxWrapper>
  );
};
