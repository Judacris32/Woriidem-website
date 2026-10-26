"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { ArtDirectedImage } from "./PageHeader";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const HOLD = 6500; // ms each photo stays on screen
const FADE = 1.4; // s crossfade

// Each slide pairs a landscape photo (desktop) with a portrait one (phones).
// Object positions keep his face in the top half, clear of the hero text.
const slides = [
  {
    desktop: { src: "/images/stage-mic-raised.jpg", w: 1080, h: 720 },
    mobile: { src: "/images/stage-vest.jpg", w: 720, h: 1080 },
    alt: "Woriidem on stage in a purple floral shirt, microphone raised to the crowd",
    pos: "object-[55%_20%] md:object-[50%_22%]",
  },
  {
    desktop: { src: "/images/stage-pointing.jpg", w: 1080, h: 720 },
    mobile: { src: "/images/stage-cash-throw.jpg", w: 720, h: 1080 },
    alt: "Woriidem pointing out to the crowd from a festival stage",
    pos: "object-[55%_15%] md:object-[50%_30%]",
  },
  {
    desktop: { src: "/images/stage-smiling.jpg", w: 1080, h: 722 },
    mobile: { src: "/images/stage-vest-chest.jpg", w: 720, h: 1080 },
    alt: "Woriidem smiling on stage with the band behind him",
    pos: "object-[50%_18%] md:object-[45%_25%]",
  },
  {
    desktop: { src: "/images/stage-arm-out.jpg", w: 1080, h: 720 },
    mobile: { src: "/images/portrait-porch.jpg", w: 720, h: 1080 },
    alt: "Woriidem with his arm outstretched mid-performance",
    pos: "object-[50%_20%] md:object-[50%_22%]",
  },
];

export function HomeHero() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  // Advance after each hold; restarting the timer whenever the slide changes
  // means a manual jump gets a full hold too.
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % slides.length), HOLD);
    return () => clearTimeout(t);
  }, [active, reduce]);

  return (
    <section
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night text-white"
    >
      {/* Photo layers */}
      <div className="absolute inset-0 -z-20">
        {slides.map((s, i) => {
          const on = i === active;
          return (
            <motion.div
              key={s.desktop.src}
              initial={false}
              animate={{ opacity: on ? 1 : 0 }}
              transition={{ duration: FADE, ease: "easeInOut" }}
              className="absolute inset-0"
              aria-hidden={!on}
            >
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: on ? 1 : 1.12 }}
                transition={on ? { duration: HOLD / 1000 + FADE, ease: "linear" } : { duration: 0, delay: FADE }}
                className="h-full w-full"
              >
                <ArtDirectedImage desktop={s.desktop} mobile={s.mobile} alt={s.alt} className={s.pos} priority={i === 0} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Light at the top so his face reads, heavier at the bottom behind the text */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(11_11_15/0.6)_0%,rgb(11_11_15/0.15)_28%,rgb(11_11_15/0.35)_52%,rgb(11_11_15/0.92)_82%,rgb(11_11_15/0.97)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,transparent_35%,rgb(11_11_15/0.55)_100%)]" />

      <div className="container relative flex flex-col items-center pb-14 pt-40 text-center md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.78rem] font-medium tracking-wide text-white/90 backdrop-blur-md"
        >
          <Award aria-hidden className="h-4 w-4 text-violet" />
          GMA Fan Choice Award winner, 2023
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="mt-6 w-full"
        >
          <span className="sr-only">Woriidem</span>
          <Image
            src="/brand/logo-wordmark-dark.png"
            alt=""
            width={1227}
            height={179}
            priority
            sizes="(min-width: 1024px) 640px, 80vw"
            className="mx-auto h-auto w-[80%] max-w-[640px] drop-shadow-[0_8px_40px_rgb(0_0_0/0.5)]"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-6 font-display text-[0.74rem] font-semibold uppercase leading-loose tracking-[0.3em] text-white/85 sm:text-sm sm:tracking-[0.38em]"
        >
          <span className="block sm:inline">
            Songwriter <span className="text-magenta">·</span> Composer
          </span>
          <span className="hidden text-magenta sm:inline"> · </span>
          <span className="block sm:inline">Artist Developer</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72, ease }}
          className="text-justified mt-5 max-w-[30rem] text-[1.05rem] leading-relaxed text-white/80 [hyphens:manual] [text-align-last:center] sm:text-lg"
        >
          I’ve written on records with more than nine million Spotify streams. I start with the artist, find the feeling, and build the song around it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3"
        >
          <Button href="/credits" className="px-5 text-[0.88rem] sm:px-7 sm:text-[0.95rem]">
            Hear the songs
          </Button>
          <Button href="/contact" variant="light" className="px-5 text-[0.88rem] sm:px-7 sm:text-[0.95rem]">
            Work with me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 md:hidden"
        >
          <Progress active={active} onSelect={setActive} reduce={!!reduce} />
        </motion.div>
      </div>

      {/* Slide progress: vertical bars on the right edge (tablet and up) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block lg:right-8"
      >
        <Progress active={active} onSelect={setActive} reduce={!!reduce} vertical />
      </motion.div>
    </section>
  );
}

function Progress({
  active,
  onSelect,
  reduce,
  vertical,
}: {
  active: number;
  onSelect: (i: number) => void;
  reduce: boolean;
  vertical?: boolean;
}) {
  return (
    <div className={cn("flex gap-1", vertical ? "flex-col" : "flex-row")}>
      {slides.map((s, i) => (
        <button
          key={s.desktop.src}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Show photo ${i + 1} of ${slides.length}`}
          aria-current={i === active}
          className={cn("group grid place-items-center", vertical ? "h-11 w-6" : "h-11 w-10")}
        >
          <span
            className={cn(
              "relative block overflow-hidden rounded-full bg-white/25 transition-colors group-hover:bg-white/50",
              vertical ? "h-8 w-[3px]" : "h-[3px] w-8"
            )}
          >
            {i === active && (
              <motion.span
                key={`fill-${active}`}
                initial={vertical ? { height: reduce ? "100%" : "0%" } : { width: reduce ? "100%" : "0%" }}
                animate={vertical ? { height: "100%" } : { width: "100%" }}
                transition={{ duration: reduce ? 0 : HOLD / 1000, ease: "linear" }}
                className={cn("absolute left-0 top-0 rounded-full bg-magenta", vertical ? "w-full" : "h-full")}
              />
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
