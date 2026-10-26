import Image from "next/image";
import { ArrowUpRight, Disc3, NotebookPen, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SoundCloudIcon } from "./Icons";
import { hxppier, upcoming } from "@/lib/content";

const projects = [
  {
    Icon: Disc3,
    status: "Private preview",
    title: hxppier.title,
    meta: "7 tracks · My own record",
    text: "Finished and in private preview. The public release is next.",
  },
  {
    Icon: Users,
    status: "Unreleased",
    title: upcoming.title,
    meta: `7 tracks · With ${upcoming.artist}`,
    text: "Co-written, finished, and waiting for the right moment.",
  },
  {
    Icon: NotebookPen,
    status: "In the notebook",
    title: "Demos and ideas",
    meta: "Rough cuts · Work in progress",
    text: "Hooks, half-verses and voice notes that could become anything.",
  },
];

// Fixed bar heights so the waveform looks the same on server and client
const bars = [28, 46, 64, 38, 82, 56, 92, 70, 44, 60, 88, 52, 36, 74, 96, 58, 40, 68, 84, 48, 30, 62, 78, 42, 54, 90, 66, 34, 50, 72, 86, 46, 32, 58, 76, 40];

export function InTheWorks() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-24 text-white md:py-32">
      {/* soft magenta glow in the corners */}
      <div aria-hidden className="absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-magenta/20 blur-[120px]" />
      <div aria-hidden className="absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-electric/20 blur-[120px]" />

      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center !text-violet">More in the works</p>
          <h2 className="mt-5 text-[2.15rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            The notebook is never <span className="text-magenta">empty</span>
          </h2>
          <p className="text-justified mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70 [text-align-last:center]">
            Hxppier 25 isn&rsquo;t the only thing on my desk. There are songs finished with other artists, rough demos and ideas I&rsquo;m still chasing. Here&rsquo;s what&rsquo;s cooking.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Photo panel */}
          <Reveal className="group relative min-h-[460px] overflow-hidden rounded-[28px] lg:min-h-0">
            <Image
              src="/images/portrait-beanie.jpg"
              alt="Woriidem in a black beanie, looking into the camera"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-[50%_30%] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
                </span>
                In the studio
              </span>
              <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Always writing. <span className="text-violet">Always listening.</span>
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {/* Project cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {projects.map(({ Icon, status, title, meta, text }, i) => (
                <Reveal key={title} delay={0.06 * i} className="h-full">
                  <article className="group flex h-full flex-col rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-magenta/50 hover:bg-white/[0.07]">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-magenta/15 text-violet transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-5 inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/70">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-magenta" />
                      {status}
                    </span>
                    <h3 className="mt-3 text-xl font-bold tracking-tight">{title}</h3>
                    <p className="mt-1 text-[0.8rem] font-medium text-violet">{meta}</p>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* SoundCloud card */}
            <Reveal delay={0.18} className="flex-1">
              <a
                href={hxppier.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-royal via-electric to-magenta p-7 transition-shadow duration-500 hover:shadow-glow sm:p-8"
              >
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgb(255_255_255/0.18),transparent_45%)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-night">
                      <SoundCloudIcon className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Follow along</p>
                      <p className="mt-1 font-display text-2xl font-bold tracking-tight">WORii DEM on SoundCloud</p>
                    </div>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-night">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Animated waveform */}
                <div aria-hidden className="relative flex h-20 items-center gap-[3px] sm:gap-1">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className="block flex-1 origin-center animate-eq rounded-full bg-white/80 transition-colors group-hover:bg-white"
                      style={{ height: `${h}%`, animationDelay: `${(i % 9) * 0.12}s`, animationDuration: `${1 + (i % 5) * 0.18}s` }}
                    />
                  ))}
                </div>

                <p className="relative text-sm text-white/80">
                  New demos and releases land here first. <span className="font-semibold text-white">soundcloud.com/worii_dem1_ng</span>
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
