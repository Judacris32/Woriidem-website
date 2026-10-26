import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { InstagramIcon, SpotifyIcon } from "@/components/Icons";
import { ClosingCta } from "@/components/ClosingCta";
import { collaborators, credits, upcoming } from "@/lib/content";

export const metadata: Metadata = {
  title: "Songwriting Credits",
  description:
    "Songs co-written by Woriidem for Salle, T.I Blaze, Naka, Mekamzee, Krrystal and Blazer Q, with over 9 million Spotify streams between them.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Songwriting credits"
        title={
          <>
            The songs behind <span className="text-magenta">the songs</span>
          </>
        }
        intro="Over nine million Spotify plays across four released records, and plenty more written behind the scenes. Press play on any of them below."
        desktop={{ src: "/images/stage-smiling.jpg", w: 1080, h: 722 }}
        mobile={{ src: "/images/portrait-sofa-wide.jpg", w: 720, h: 1080 }}
        alt="Woriidem smiling on stage with the band behind him"
        imgClass="object-[50%_40%] md:object-[35%_35%]"
      />

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Released"
            title={
              <>
                Co-written and <Hl>out now</Hl>
              </>
            }
            intro="Every one of these songs started in a session with the artist. My job was to help shape the words, the melody and the feeling, then step back so the artist could make it their own."
          />

          <div className="mt-16 space-y-6">
            {credits.map((c, i) => (
              <Reveal key={c.slug}>
                <article className="card-lift grid gap-6 rounded-[28px] border border-line bg-bg p-5 sm:p-7 md:grid-cols-[220px_1fr] md:gap-10 lg:grid-cols-[260px_1fr]">
                  <div className="relative aspect-square overflow-hidden rounded-[20px] bg-surface">
                    <Image src={c.cover} alt={`${c.title} cover art`} fill sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 90vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <span className="font-semibold tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="rounded-full bg-magenta/10 px-3 py-1 font-semibold text-hl">{c.role}</span>
                      <span className="text-muted">
                        {c.release} · {c.year}
                      </span>
                    </div>
                    <h3 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{c.title}</h3>
                    <p className="mt-1 text-lg text-muted">{c.artists}</p>
                    <p className="text-justified mt-4 max-w-2xl leading-relaxed text-muted">{c.note}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm font-semibold">
                        <SpotifyIcon className="h-4 w-4 text-hl" />
                        {c.streams} plays
                      </span>
                      {c.people
                        .filter((p) => p.instagram)
                        .map((p) => (
                          <a
                            key={p.name}
                            href={p.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-line px-3.5 text-sm font-medium transition-colors duration-300 hover:border-magenta hover:bg-magenta hover:text-white"
                          >
                            <InstagramIcon className="h-4 w-4" />
                            {p.name}
                          </a>
                        ))}
                    </div>

                    <div className="mt-6">
                      <SpotifyEmbed id={c.spotifyId} title={c.title} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Coming soon"
              title={
                <>
                  Songs on the <Hl>way</Hl>
                </>
              }
              intro="Not everything I write is out yet. Some songs are finished and sitting with the artist, ready to come out at the right time."
            />
            <Reveal delay={0.1} className="mt-9 rounded-[24px] border border-line bg-bg p-7">
              <div className="flex items-center gap-3 text-sm font-semibold text-hl">
                <Clock aria-hidden className="h-4 w-4" />
                Unreleased
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight">{upcoming.title}</h3>
              <p className="mt-1 text-muted">{upcoming.artist}</p>
              <p className="text-justified mt-4 leading-relaxed text-muted">{upcoming.detail}</p>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Featured collaborations"
              title={
                <>
                  Artists I’ve <Hl>worked with</Hl>
                </>
              }
              intro="These are some of the artists I’ve written songs with or for. In total, I’ve written more than a hundred songs, and I’m still going."
            />
            <Reveal delay={0.1} className="mt-9 flex flex-wrap gap-3">
              {collaborators.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-line bg-bg px-5 py-3 font-display text-lg font-semibold tracking-tight transition-colors duration-300 hover:border-magenta hover:text-hl"
                >
                  {name}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
