import Image from "next/image";
import { Award, Quote } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { ClosingCta } from "@/components/ClosingCta";
import { Button } from "@/components/Button";
import { CountUp } from "@/components/CountUp";
import { CreditCard } from "@/components/CreditCard";
import { HxppierCover, Tracklist } from "@/components/Hxppier";
import { Reveal } from "@/components/Reveal";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { award, credits, hxppier, press, quote, site, stats } from "@/lib/content";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Woriidem",
  alternateName: site.fullName,
  jobTitle: "Songwriter, Composer and Artist Developer",
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  award: "GMA Fan Choice Award, Galaxy Music Awards Season 5 (2023)",
  worksFor: { "@type": "Organization", name: site.label },
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: ["https://soundcloud.com/worii_dem1_ng"],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <HomeHero />

      {/* Stats */}
      <section aria-label="At a glance" className="relative z-10 -mt-14">
        <div className="container">
          <Reveal className="grid grid-cols-2 overflow-hidden rounded-[26px] border border-line bg-bg shadow-soft lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 text-center sm:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} count={s.value !== 2023} />
                </p>
                <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-snug text-muted sm:text-[0.95rem]">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Credits preview */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Selected credits"
            title={
              <>
                Songs I helped <Hl>write</Hl>
              </>
            }
            intro="You might know the voices before you know my name, and that’s fine by me. These are a few of the records I co-wrote, from a 2019 album cut to a duet that’s passed five million plays."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {credits.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08} className="h-full">
                <CreditCard credit={c} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Button href="/credits" variant="outline">
              See all my credits
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="How I work"
            title={
              <>
                Words are only <Hl>half</Hl> the song
              </>
            }
          />
          <div className="mt-14 grid items-center gap-14 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/portrait-couch.jpg"
                  alt="Woriidem seated on an amber sofa in a white sweatshirt"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover object-[50%_35%]"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 rounded-[20px] border border-line bg-bg px-6 py-5 text-center shadow-soft sm:-right-6">
                <p className="font-display text-4xl font-extrabold tracking-tight text-magenta">100+</p>
                <p className="mt-1 text-sm text-muted">songs written</p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.1} className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
                <p className="text-justified">
                  A song starts long before I write the first line. It starts with the artist: what they’re trying to say, how they want it to feel, and who they are when the mic is off. Once I understand that, the words usually find their own way.
                </p>
                <p className="text-justified">
                  That’s how I’ve worked through more than a hundred songs, for and with artists like Salle, T.I Blaze, Naka, Mekamzee, Krrystal and Blazer Q. The sound changes from record to record. What I’m chasing never does: a song people can see themselves in.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <figure className="mt-9 border-l-[3px] border-magenta pl-6">
                  <Quote aria-hidden className="h-6 w-6 text-magenta" />
                  <blockquote className="text-justified mt-3 font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                    {quote.text}
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">{quote.by}</figcaption>
                </figure>
                <div className="mt-9">
                  <Button href="/about" variant="outline">
                    Read my story
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Award + press band */}
      <section className="bg-night py-24 text-white md:py-32 dark:bg-charcoal/40">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center !text-violet">Recognition</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-magenta/15 text-magenta">
                <Award className="h-7 w-7" />
              </span>
              <span className="text-sm uppercase tracking-[0.2em] text-white/60">{award.body}</span>
            </div>
            <h2 className="mt-6 text-[2.4rem] font-extrabold leading-[1] tracking-tightest sm:text-6xl">
              The fans <span className="text-magenta">chose</span> me.
            </h2>
            <p className="text-justified mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70 [text-align-last:center]">
              {award.summary}
            </p>
            <p className="mt-5 text-sm text-white/50">
              {award.date} · {award.place}
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
            {press.map((p, i) => (
              <Reveal key={p.href} delay={0.08 * i} className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-magenta/50 hover:bg-white/[0.07] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-semibold text-violet">{p.outlet}</span>
                    <span className="text-white/50">{p.date}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-[1.6rem]">{p.title}</h3>
                  <p className="text-justified mt-3 leading-relaxed text-white/60">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-white/85">
                    Read the article
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Button href="/press" variant="light">
              Press and awards
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Hxppier 25 */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="My own record"
            title={
              <>
                Hxppier <Hl>25</Hl>
              </>
            }
            intro="I’ve spent years writing for other voices. This one’s mine. Seven tracks, written and performed by me, in private preview right now. The public release is coming."
          />
          <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
            <Reveal className="mx-auto w-full max-w-[500px]">
              <HxppierCover />
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <Tracklist />
              </Reveal>
              <Reveal delay={0.16} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button href="/music">About the project</Button>
                <Button href={hxppier.soundcloud} variant="outline" icon="external">
                  Follow me on SoundCloud
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Label teaser */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow={site.label}
            title={
              <>
                A label that starts with the <Hl>artist</Hl>
              </>
            }
            intro="Writing a hit is one job. Building a career around it is another. Through Woriidem Entertainment, I help emerging artists find their sound, make better records and understand the business side before it catches them out."
          />
          <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Artist development", "Finding who you are on a record, then growing into it."],
                  ["Songwriting and direction", "Writing with you and keeping the project sounding like you."],
                  ["Release planning", "What comes out, when, and why. The part most people skip."],
                  ["Branding and promotion", "Getting the music to the people it was made for."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[20px] border border-line bg-bg p-5">
                    <div className="flex items-center gap-3">
                      <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-magenta" />
                      <h3 className="font-display text-[1.05rem] font-bold tracking-tight">{title}</h3>
                    </div>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.16} className="mt-8 flex justify-center lg:justify-start">
                <Button href="/label">About the label</Button>
              </Reveal>
            </div>
            <Reveal className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/portrait-denim.jpg"
                  alt="Woriidem in a denim-print two-piece walking past an orange shipping container"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
