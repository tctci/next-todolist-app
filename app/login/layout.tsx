import clsx from "clsx";
import loginStyle from "@/styles/login.module.css"
export default function PricingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className={clsx("flex flex-col items-center justify-center gap-4 py-8 md:py-10",loginStyle.container)}>
        <div className="inline-block max-w-lg text-center justify-center">
          {children}
        </div>
      </section>
    );
  }
  