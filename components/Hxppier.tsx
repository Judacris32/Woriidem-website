import Image from "next/image";
import { Lock } from "lucide-react";
import { hxppier } from "@/lib/content";
import { EqBars } from "./Icons";
import { cn } from "@/lib/utils";

/** Designed stand-in cover for Hxppier 25 until official artwork exists */
export function HxppierCover({ className }: { className?: string }) {
  return (
    <div className={cn("group relative aspect-square overflow-hidden rounded-[26px] bg-night shadow-soft", className)}>
      <Image
        src="/images/stage-vest.jpg"
        alt="Woriidem performing under red and pink lights"
        fill
        sizes="(min-width: 1024px) 520px, 90vw"
        className="object-cover object-[50%_22%] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(11_11_15/0.7)_0%,rgb(11_11_15/0.1)_32%,rgb(11_11_15/0.25)_55%,rgb(11_11_15/0.95)_100%)]" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <Image src="/brand/logo-icon-dark.png" alt="" width={428} height={413} className="h-12 w-auto sm:h-14" />
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            7 tracks
          </span>
        </div>
        <div>
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.4em] text-white/70">Woriidem</p>
          <p className="mt-1 font-display text-[3.4rem] font-black leading-[0.85] tracking-tightest text-white sm:text-7xl">
            HXPPIER
            <br />
            <span className="text-magenta">25&rsquo;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Tracklist() {
  return (
    <ol className="divide-y divide-line overflow-hidden rounded-[22px] border border-line bg-bg">
      {hxppier.tracks.map((t, i) => (
        <li key={t} className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-surface sm:px-6">
          <span className="relative w-6 shrink-0">
            <span className="text-sm tabular-nums text-muted transition-opacity group-hover:opacity-0">{String(i + 1).padStart(2, "0")}</span>
            <EqBars className="absolute left-0 top-1/2 -translate-y-1/2 text-magenta opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="flex-1 font-display text-lg font-semibold tracking-tight">{t}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <Lock aria-hidden className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Preview</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
