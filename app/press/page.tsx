import type { Metadata } from "next";
import { ArrowUpRight, Award, CalendarDays, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { award, press, shortBio, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press & Awards",
  description:
    "Woriidem in the press: GMA Fan Choice Award winner at the 5th Galaxy Music Awards (2023), featured by NotjustOk and The Independent. Short bio and press contact.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press and awards"
        title={
          <>
            Noticed by the fans, <span className="text-magenta">and the press</span>
          </>
        }
        intro="An award voted for by the listeners, and the coverage that followed. If you’re a journalist or promoter, everything you need is on this page."
        desktop={{ src: "/images/stage-walkout.jpg", w: 1080, h: 720 }}
        mobile={{ src: "/images/stage-vest-chest.jpg", w: 720, h: 1080 }}
        alt="Woriidem walking towards the band on a lit stage"
        imgClass="object-[50%_30%] md:object-[50%_40%]"
      />

      {/* Award */}
      <section className="py-24 md:py-32">
        <div className="container">
          <Reveal className="relative overflow-hidden rounded-[32px] border border-line bg-surface p-8 sm:p-12 lg:p-16">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-magenta/10" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-magenta/10 px-4 py-2 text-sm font-semibold text-hl">
                  <Award aria-hidden className="h-4 w-4" />
                  Winner
                </span>
                <h2 className="mt-6 text-[2.4rem] font-extrabold leading-[1] tracking-tightest sm:text-6xl">
                  {award.title.replace(" Award", "")} <Hl>Award</Hl>
                </h2>
                <p className="mt-3 text-lg font-medium text-muted">{award.body}</p>
                <p className="text-justified mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">{award.summary}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-5 py-4">
                  <CalendarDays aria-hidden className="h-5 w-5 text-hl" />
                  <span className="font-medium">Confirmed {award.date}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-5 py-4">
                  <MapPin aria-hidden className="h-5 w-5 text-hl" />
                  <span className="font-medium">{award.place}, Nigeria</span>
                </div>
                <Button href={award.link} variant="outline" icon="external" className="w-full">
                  Official winners list
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                In the <Hl>press</Hl>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {press.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.08} className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift group flex h-full flex-col rounded-[28px] border border-line bg-bg p-8 sm:p-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-2xl font-extrabold tracking-tight">{p.outlet}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">&ldquo;{p.title}&rdquo;</h3>
                  <p className="text-justified mt-4 leading-relaxed text-muted">{p.excerpt}</p>
                  <p className="mt-auto pt-8 text-sm text-muted">
                    By <span className="font-semibold text-ink">{p.author}</span> · {p.date}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press kit */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="For press and media"
            title={
              <>
                Need a bio for an <Hl>article?</Hl>
              </>
            }
            intro="Journalists, bloggers and event promoters can copy this short bio and use it as it is. For photos or an interview, send me a message."
          />
          <div className="mx-auto mt-14 max-w-3xl lg:mt-16">
          <Reveal delay={0.1}>
            <div className="rounded-[28px] border border-line bg-surface p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-bold tracking-tight">Short bio, ready to use</h3>
                <CopyButton text={shortBio} />
              </div>
              <p className="text-justified mt-5 leading-[1.8] text-muted">{shortBio}</p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/contact">Press enquiries</Button>
              <Button href={`mailto:${site.email}`} variant="outline" icon="none">
                {site.email}
              </Button>
            </div>
          </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
