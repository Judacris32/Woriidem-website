"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

/** Lazy Spotify player. Keeps a fixed height so nothing jumps while it loads. */
export function SpotifyEmbed({ id, title }: { id: string; title: string }) {
  const { resolvedTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const theme = resolvedTheme === "dark" ? "0" : "1";

  return (
    <div className="relative h-[152px] overflow-hidden rounded-[14px] bg-surface">
      {!loaded && <div aria-hidden className="absolute inset-0 animate-pulse bg-surface-2" />}
      <iframe
        key={theme}
        title={`${title} on Spotify`}
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=${theme}`}
        width="100%"
        height="152"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        onLoad={() => setLoaded(true)}
        className="relative block border-0"
      />
    </div>
  );
}
