import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { ClosingCta } from "@/components/ClosingCta";
import { quote, site, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Woriidem, born Uzochi Gerald Ihenacho: songwriter, composer and artist developer from Owerri, now based in London, and founder of Woriidem Entertainment Ltd.",
};

const facts = [
  { k: "Real name", v: site.fullName },
  { k: "Known as", v: "Woriidem" },
  { k: "Based in", v: "London, UK" },
  { k: "Roots", v: "Owerri, Imo State" },
  { k: "Does", v: "Songwriting, composition, artist development" },
  { k: "Runs", v: site.label },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title={
          <>
            I write for the artist, <span className="text-magenta">first</span>
          </>
        }
        intro="I’m Uzochi Gerald Ihenacho, but you can call me Woriidem. Songwriter, composer, artist developer and label founder. Raised in Owerri, now based in London."
        desktop={{ src: "/images/stage-pointing.jpg", w: 1080, h: 720 }}
        mobile={{ src: "/images/portrait-porch.jpg", w: 720, h: 1080 }}
        alt="Woriidem pointing out to the crowd from a festival stage"
        imgClass="object-[50%_25%] md:object-[45%_40%]"
      />

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="My story"
            title={
              <>
                A hundred songs in, and I still start with a <Hl>conversation</Hl>
              </>
            }
          />
          <div className="mt-14 lg:mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal delay={0.1} className="space-y-5 text-[1.05rem] leading-[1.8] text-muted">
              <p className="text-justified">
                I grew up in Owerri, Imo State, and studied at Imo State University. Music was always the thing I came back to, and somewhere along the way it stopped being a hobby and became the work: writing songs, shaping them with artists, and helping younger talent figure out who they are on a record.
              </p>
              <p className="text-justified">
                I&rsquo;ve now written or composed more than a hundred songs. My co-writes include Soul by Salle and T.I Blaze, which has passed five million plays on Spotify, and Gbana by Naka and Mekamzee, which is past four million. I&rsquo;ve also written with Krrystal and Blazer Q, and there are more songs finished and waiting with artists who haven&rsquo;t dropped them yet.
              </p>
              <p className="text-justified">
                My method is simple to explain and hard to do. Before a single line goes down, I want to understand the artist: what they&rsquo;re trying to say, what it should feel like, and what the listener should walk away with. The words and the melody come out of that, never the other way round.
              </p>
              <p className="text-justified">
                I see today&rsquo;s Afrobeats as a meeting point, with highlife, hip-hop, R&amp;B, amapiano and traditional rhythms all coming together. A good song can move between any of these styles. All it needs is a strong story, a good melody and real emotion.
              </p>
              <p className="text-justified">
                In 2023, the fans voted me the winner of the Fan Choice Award at the fifth Galaxy Music Awards in Port Harcourt. Today I run Woriidem Entertainment Ltd, work with emerging artists, and I&rsquo;m getting Hxppier 25, my own seven-track project, ready for the world.
              </p>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image src="/images/portrait-studio.jpg" alt="Woriidem in a white sweatshirt and black cap, finger to his temple" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover object-[50%_15%]" />
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-surface">
                {facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[110px_1fr] gap-4 px-6 py-4 text-[0.95rem]">
                    <dt className="font-semibold text-muted">{f.k}</dt>
                    <dd className="font-medium">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-night py-24 text-white md:py-28 dark:bg-charcoal/40">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center !text-violet">In my words</p>
            <blockquote className="text-justified mt-8 font-display text-2xl font-medium leading-snug tracking-tight [text-align-last:center] sm:text-4xl">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">{quote.by}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Milestones"
            title={
              <>
                How it’s <Hl>played out</Hl> so far
              </>
            }
            intro="A few moments along the way, from my early album credits to the award, the press and my own record."
          />
          <ol className="relative mx-auto mt-16 max-w-2xl border-l border-line pl-8 sm:pl-12">
            {timeline.map((t, i) => (
              <li key={t.year + t.title} className="relative pb-12 last:pb-0">
                <span aria-hidden className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-bg bg-magenta ring-1 ring-magenta/40 sm:-left-[55px]" />
                <Reveal delay={i * 0.04}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hl">{t.year}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{t.title}</h3>
                  <p className="text-justified mt-2 max-w-xl leading-relaxed text-muted">{t.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="mt-14 flex flex-wrap justify-center gap-3">
            <Button href="/credits">Hear my credits</Button>
            <Button href="/press" variant="outline">
              Press and awards
            </Button>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
