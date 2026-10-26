import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  icon?: "arrow" | "external" | "none";
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", icon = "arrow", className }: Props) {
  const external = isExternal(href);
  const classes = cn("btn", `btn-${variant}`, size === "sm" && "btn-sm", className);
  const Icon = icon === "external" ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span>{children}</span>
      {icon !== "none" && (
        <Icon aria-hidden className={cn("btn-icon h-[18px] w-[18px]", icon === "external" && "btn-icon-diag")} strokeWidth={2.2} />
      )}
    </>
  );

  if (external) {
    const isWeb = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
