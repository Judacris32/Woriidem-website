import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Megaphone, PenLine, Sprout } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { ClosingCta } from "@/components/ClosingCta";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Woriidem Entertainment",
  description:
    "Woriidem Entertainment Ltd is the label founded by songwriter Woriidem, focused on artist development, songwriting, release planning and the business side of music.",
};

const services = [
  {
    Icon: Sprout,
    title: "Artist development",
    text: "Helping emerging artists work out who they are on a record, refine their sound and grow into it at a pace that lasts.",
  },
  {
    Icon: PenLine,
    title: "Songwriting and direction",
    text: "Writing with artists, sharpening their ideas and keeping a project sounding like one person rather than a playlist.",
  },
  {
    Icon: Compass,
    title: "Release planning",
    text: "Deciding what comes out, when and why. Planning and coordination are most of the job, and the part most people skip.",
  },
  {
    Icon: Megaphone,
    title: "Branding and promotion",
    text: "Making sure the music reaches the people it was made for, with an image and a story that actually fit the artist.",
  },
];

const truths = [
  { title: "It takes planning", text: "Making records and running a label are two different jobs. The second one needs coordination, creative management and a plan that looks years ahead, not weeks." },
  { title: "It takes money", text: "Branding, promotion and production all cost something. For an independent label, every decision has to earn its place." },
  { title: "It takes patience", text: "Not every release becomes a hit, and that is fine. Discipline and patience keep you going long enough for the right one to land." },
];

export default function LabelPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.label}
        title={
          <>
            Built around the <span className="text-magenta">artist</span>
          </>
        }
        intro="I started this label to help new artists grow. I help them find their sound, make great records and build a real career in music."
        desktop={{ src: "/images/crowd-moment.jpg", w: 1080, h: 720 }}
        mobile={{ src: "/images/portrait-denim.jpg", w: 720, h: 1080 }}
        alt="Woriidem with fans after a festival set"
        imgClass="object-[50%_35%] md:object-[60%_30%]"
      />

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Why it exists"
            title={
              <>
                Good songs need more than a good <Hl>writer</Hl>
              </>
            }
          />
          <div className="mt-14 lg:mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal delay={0.1} className="space-y-5 text-[1.05rem] leading-[1.8] text-muted">
              <p className="text-justified">
                Writing a strong record is one job. Turning it into a career is another, and plenty of talented artists get stuck in the gap between the two. The music is there. The plan around it is not.
              </p>
              <p className="text-justified">
                Woriidem Entertainment Ltd is my answer to that. It&rsquo;s where songwriting meets the less glamorous side of the industry: planning, coordination, branding, promotion and the long view. I want the artists I work with to make better records, and to understand the business well enough to protect their own careers.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] lg:max-w-none">
            <Image src="/images/stage-vest.jpg" alt="Woriidem laughing on a white porch" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover object-[50%_30%]" />
          </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="What the label does"
            title={
              <>
                Four things, done <Hl>properly</Hl>
              </>
            }
            align="center"
          />
          <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2">
            {services.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="h-full">
                <div className="card-lift group h-full rounded-[24px] border border-line bg-bg p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-magenta/10 text-hl transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
                  <p className="text-justified mt-3 leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="The honest part"
            title={
              <>
                What running a label <Hl>really</Hl> takes
              </>
            }
            intro="When I spoke to NotjustOk in 2025, I didn’t sugar-coat it. Keeping an independent label going is hard work, and three things matter more than anything."
          />
          <div className="mx-auto mt-14 max-w-3xl lg:mt-16">
          <div className="space-y-4">
            {truths.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="flex gap-6 rounded-[24px] border border-line p-7 transition-colors duration-300 hover:border-magenta/40">
                  <span className="font-display text-3xl font-extrabold text-magenta">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{t.title}</h3>
                    <p className="text-justified mt-2 leading-relaxed text-muted">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="flex justify-center pt-6">
              <Button href="/contact">Talk to me about your music</Button>
            </Reveal>
          </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
