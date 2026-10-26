import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { HxppierCover, Tracklist } from "@/components/Hxppier";
import { Reveal } from "@/components/Reveal";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { InTheWorks } from "@/components/InTheWorks";
import { ClosingCta } from "@/components/ClosingCta";
import { hxppier } from "@/lib/content";

export const metadata: Metadata = {
  title: "Music: Hxppier 25",
  description: "Hxppier 25 is Woriidem's seven-track project as a recording artist: Stalling, Choose, Pose, Abobi, Stay Alive, Deserve and Pay Me.",
};

export default function MusicPage() {
  return (
    <>
      <PageHeader
        eyebrow="My own music"
        title={
          <>
            Hxppier <span className="text-magenta">25</span>
          </>
        }
        intro="I usually write for someone else. This time the voice on the record is mine. Seven tracks."
        desktop={{ src: "/images/stage-arm-out.jpg", w: 1080, h: 720 }}
        mobile={{ src: "/images/stage-cash-throw.jpg", w: 720, h: 1080 }}
        alt="Woriidem with his arm outstretched mid-performance"
        imgClass="object-[60%_30%] md:object-[50%_30%]"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
          </span>
          {hxppier.status} · Release coming soon
        </span>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow={hxppier.type}
            title={
              <>
                Stepping in front of the <Hl>mic</Hl>
              </>
            }
          />
          <div className="mt-14 grid items-start gap-14 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[520px] lg:sticky lg:top-28">
            <HxppierCover />
          </Reveal>

          <div>
            <Reveal delay={0.1} className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
              <p className="text-justified">
                Most of my work lives inside other people&rsquo;s songs, and I love that. Hxppier 25 is different. It&rsquo;s the project where I step out from behind the pen and put my own voice on every track.
              </p>
              <p className="text-justified">
                Read the track titles in order and you&rsquo;ll see the story: stalling, choosing, staying alive, knowing what you deserve and asking to be paid for it. The name says the rest. Happier, and earned.
              </p>
              <p className="text-justified">
                It&rsquo;s in private preview for now. When it goes public, this is where you&rsquo;ll hear it first.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight">Tracklist</h3>
                <span className="text-sm text-muted">{hxppier.tracks.length} tracks</span>
              </div>
              <Tracklist />
            </Reveal>

            <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
              <Button href={hxppier.soundcloud} icon="external">
                Follow me on SoundCloud
              </Button>
              <Button href="/contact" variant="outline">
                Get release updates
              </Button>
            </Reveal>
          </div>
          </div>
        </div>
      </section>

      <InTheWorks />

      <ClosingCta />
    </>
  );
}
