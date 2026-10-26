import Image from "next/image";
import { Play } from "lucide-react";
import type { Credit } from "@/lib/content";

export function CreditCard({ credit }: { credit: Credit }) {
  const url = `https://open.spotify.com/track/${credit.spotifyId}`;
  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-bg sm:rounded-[22px]">
      <div className="relative aspect-square overflow-hidden bg-surface">
        <Image
          src={credit.cover}
          alt={`${credit.title} cover art`}
          fill
          sizes="(min-width: 1024px) 300px, 48vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div aria-hidden className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/35" />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-night/70 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-3 sm:top-3 sm:px-3 sm:text-[0.7rem]">
          {credit.role}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Play ${credit.title} on Spotify`}
          className="absolute bottom-2.5 right-2.5 grid h-11 w-11 translate-y-2 sm:bottom-3 sm:right-3 sm:h-12 sm:w-12 place-items-center rounded-full bg-accent text-white opacity-90 shadow-lg transition-all duration-500 ease-out hover:bg-magenta hover:shadow-glow group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </a>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3.5 sm:gap-1.5 sm:p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight sm:text-xl">{credit.title}</h3>
          <span className="text-xs text-muted sm:text-sm">{credit.year}</span>
        </div>
        <p className="text-sm text-muted sm:text-[0.95rem]">{credit.artists}</p>
        <p className="mt-auto pt-2 text-xs font-semibold text-hl sm:pt-3 sm:text-sm">
          {credit.streams} <span className="font-normal text-muted">Spotify plays</span>
        </p>
      </div>
    </article>
  );
}
