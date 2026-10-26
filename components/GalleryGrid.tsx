"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Photo } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index === null ? null : photos[index];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-[20px] bg-surface"
            aria-label={`Open photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span aria-hidden className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/30" />
            <span
              aria-hidden
              className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white/90 text-night opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <Expand className="h-4 w-4" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm sm:p-10"
            onClick={close}
          >
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease }}
              className="relative max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                sizes="90vw"
                className="h-auto max-h-[82vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-white/65">
                {index + 1} / {photos.length}
              </p>
            </motion.div>

            {[
              { label: "Previous photo", d: -1, Icon: ChevronLeft, pos: "left-3 sm:left-6" },
              { label: "Next photo", d: 1, Icon: ChevronRight, pos: "right-3 sm:right-6" },
            ].map(({ label, d, Icon, pos }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={(e) => {
                  e.stopPropagation();
                  step(d);
                }}
                className={`absolute top-1/2 ${pos} grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-magenta hover:bg-magenta`}
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
            <button
              type="button"
              aria-label="Close photo viewer"
              onClick={close}
              autoFocus
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-magenta hover:bg-magenta sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
