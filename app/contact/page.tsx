import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SoundCloudIcon } from "@/components/Icons";
import { Hl, SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Woriidem about songwriting, features, artist development or press.",
};

const reasons = [
  { title: "Songwriting", text: "You need words, a melody or a full song shaped around your voice." },
  { title: "Features and collabs", text: "You have a record that needs another voice or another pen." },
  { title: "Artist development", text: "You’re starting out and want help finding your sound and your direction." },
  { title: "Press", text: "You’re writing a story, booking an interview or putting a feature together." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s make something <span className="text-magenta">worth replaying</span>
          </>
        }
        intro="A song, a session or a story. Whatever it is, I’d love to hear about it."
        desktop={{ src: "/images/stage-smiling.jpg", w: 1080, h: 722 }}
        mobile={{ src: "/images/portrait-porch-smile.jpg", w: 720, h: 1080 }}
        alt="Woriidem smiling on stage"
        imgClass="object-[50%_30%] md:object-[40%_35%]"
      />

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Get in touch"
            title={
              <>
                Tell me what you’re <Hl>working on</Hl>
              </>
            }
            intro="Share as much as you can: who you are, what you have in mind and when you need it. Links to demos or past work help me a lot."
          />
          <div className="mt-14 lg:mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal delay={0.1} className="grid gap-3">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-[20px] border border-line p-5 transition-colors duration-300 hover:border-magenta/40">
                  <h3 className="font-display text-lg font-bold tracking-tight">{r.title}</h3>
                  <p className="text-justified mt-1.5 text-[0.95rem] leading-relaxed text-muted">{r.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.16} className="mt-10 space-y-4">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-hl transition-colors group-hover:bg-accent group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Email</span>
                  <span className="block break-all font-semibold transition-colors group-hover:text-hl">{site.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-hl">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Based in</span>
                  <span className="block font-semibold">{site.location}</span>
                </span>
              </div>
              <a href="https://soundcloud.com/worii_dem1_ng" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-hl transition-colors group-hover:bg-accent group-hover:text-white">
                  <SoundCloudIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">SoundCloud</span>
                  <span className="block font-semibold transition-colors group-hover:text-hl">WORii DEM</span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
