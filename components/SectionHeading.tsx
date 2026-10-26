import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

/** Eyebrow + heading + optional justified intro. Centred by default. */
export function SectionHeading({ eyebrow, title, intro, align = "center", className, as: Tag = "h2" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", center && "justify-center")}>{eyebrow}</p>
      <Tag className="mt-5 text-[2.15rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">{title}</Tag>
      {intro && (
        <p
          className={cn(
            "text-justified mt-6 text-[1.05rem] leading-relaxed text-muted",
            center && "mx-auto max-w-2xl [text-align-last:center]"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Magenta highlight for a word inside a heading */
export function Hl({ children }: { children: React.ReactNode }) {
  return <span className="text-magenta">{children}</span>;
}
