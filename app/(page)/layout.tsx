import { auth } from "@/auth";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";
import { NavbarSkeleton } from "@/app/ui/skeletons";
import { Divider } from "@heroui/divider";
import { UserAvatar } from "@/components/avatar";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full h-full">
      <div className="h-full">
        <div className="my-2">
          <UserAvatar></UserAvatar>
        </div>

        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>
      </div>
      <Divider orientation="vertical"></Divider>
      <div className="w-full p-3 h-full">
        
        {children}
        
        </div>
    </section>
  );
}
