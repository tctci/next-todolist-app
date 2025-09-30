import { Divider } from "@heroui/divider";
import { ClientCataloguebox, ClientPlansListbox } from "./client-listbox";
import { Suspense } from "react";
import { ClientPlansListboxSkeleton } from "@/app/ui/skeletons";
import { getPlans } from "@/app/lib/data";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] px-1 py-2 rounded-small">{children}</div>
);

export const Catalogue = async () => {
  let initialPlans: any[] = [];
  try {
    const res = await getPlans();
    initialPlans = res;
  } catch (error) {
    console.error("Failed to fetch initial plans:", error);
  }

  const items = [
    {
      key: "all",
      label: "All",
      href: "/catalogue/all",
    },
    {
      key: "today",
      label: "Today",
      href: "/catalogue/today",
    },
    {
      key: "week",
      label: "Last 7 days",
      href: "/catalogue/week",
    },
    {
      key: "done",
      label: "Done",
      href: "/catalogue/done",
    },
    {
      key: "trashCan",
      label: "Trash can",
      href: "/catalogue/trashCan",
    },
  ];

  return (
    <ListboxWrapper>
      <ClientCataloguebox items={items} ariaLabel="Navigation Menu" />
      <Divider className="my-3" />
      <Suspense fallback={<ClientPlansListboxSkeleton />}>
        <ClientPlansListbox initialPlans={initialPlans} />
      </Suspense>
    </ListboxWrapper>
  );
};
