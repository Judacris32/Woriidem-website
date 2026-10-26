import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  /** "onDark" always shows the white version (over photos, dark bands). "auto" follows the theme. */
  tone?: "auto" | "onDark";
  className?: string;
  priority?: boolean;
};

const W = 913;
const H = 160;

export function Logo({ tone = "auto", className, priority }: Props) {
  const base = cn("h-8 w-auto select-none sm:h-9", className);

  if (tone === "onDark") {
    return <Image src="/brand/logo-horizontal-dark.png" alt="Woriidem" width={W} height={H} priority={priority} className={base} />;
  }

  return (
    <>
      <Image src="/brand/logo-horizontal-light.png" alt="Woriidem" width={W} height={H} priority={priority} className={cn(base, "dark:hidden")} />
      <Image src="/brand/logo-horizontal-dark.png" alt="Woriidem" width={W} height={H} priority={priority} className={cn(base, "hidden dark:block")} />
    </>
  );
}
