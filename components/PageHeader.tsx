"use client";

import { getImageProps } from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Img = { src: string; w: number; h: number; position?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  desktop: Img;
  mobile: Img;
  alt: string;
  /** Tailwind object-position classes, e.g. "object-[50%_30%] md:object-center" */
  imgClass?: string;
  children?: React.ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Art-directed picture: a landscape photo on desktop, a portrait one on phones */
export function ArtDirectedImage({
  desktop,
  mobile,
  alt,
  className,
  priority = true,
}: {
  desktop: Img;
  mobile: Img;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const common = { alt, sizes: "100vw", priority, quality: 82 };
  const {
    props: { srcSet: desktopSet },
  } = getImageProps({ ...common, src: desktop.src, width: desktop.w, height: desktop.h });
  const {
    props: { srcSet: mobileSet, ...rest },
  } = getImageProps({ ...common, src: mobile.src, width: mobile.w, height: mobile.h });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSet} />
      <source media="(max-width: 767px)" srcSet={mobileSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...rest} className={cn("h-full w-full object-cover", className)} />
    </picture>
  );
}

export function PageHeader({ eyebrow, title, intro, desktop, mobile, alt, imgClass, children }: Props) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-night text-white md:min-h-[72vh]">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0 -z-20"
      >
        <ArtDirectedImage desktop={desktop} mobile={mobile} alt={alt} className={imgClass} />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-night/75 via-night/55 to-night/90" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(11_11_15/0.55)_100%)]" />

      <div className="container relative pb-16 pt-32 text-center md:pb-20 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="eyebrow justify-center !text-white/85"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="mx-auto mt-6 max-w-4xl text-[2.7rem] font-extrabold leading-[1] tracking-tightest sm:text-6xl lg:text-[5.2rem]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-justified mx-auto mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-white/80 [text-align-last:center] sm:text-lg"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
