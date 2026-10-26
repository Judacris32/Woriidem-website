import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ClosingCta } from "@/components/ClosingCta";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Woriidem on stage, in the studio and in between.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            On stage and <span className="text-magenta">off it</span>
          </>
        }
        intro="On stage at festivals, relaxed at home, and everything in between. Tap any photo to see it full size."
        desktop={{ src: "/images/stage-mic-raised.jpg", w: 1080, h: 720 }}
        mobile={{ src: "/images/stage-cash-throw.jpg", w: 720, h: 1080 }}
        alt="Woriidem on stage with his microphone raised"
        imgClass="object-[60%_30%] md:object-[50%_25%]"
      />
      <section className="py-20 md:py-28">
        <div className="container">
          <GalleryGrid photos={photos} />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
