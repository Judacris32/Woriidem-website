import Image from "next/image";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function ClosingCta() {
  return (
    <section className="py-24 md:py-28">
      <div className="container">
        <Reveal className="relative isolate overflow-hidden rounded-[32px] bg-night px-6 py-16 text-center text-white sm:px-12 md:py-24">
          <Image
            src="/images/stage-pointing.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-20 object-cover opacity-40"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/70 to-night/40" />
          <p className="eyebrow justify-center !text-violet">Work together</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-[2.4rem] font-extrabold leading-[1.02] tracking-tightest sm:text-6xl">
            Got a song in you? <span className="text-magenta">Let&rsquo;s find it.</span>
          </h2>
          <p className="text-justified mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70 [text-align-last:center]">
            Writing sessions, features, creative direction, or just a real conversation about where your music goes next. Send me the details and we’ll start there.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Talk to me</Button>
            <Button href={`mailto:${site.email}`} variant="light" icon="none">
              {site.email}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
