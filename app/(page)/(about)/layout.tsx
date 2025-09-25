import { Catalogue } from "@/components/catalogue";
import { Divider } from "@heroui/divider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full h-full">
    <Catalogue />
    <Divider orientation="vertical" className="mx-4"></Divider>
    <div>{children}</div>
    </section>
  );
}
