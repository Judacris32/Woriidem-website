import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="Error 404"
      title={
        <>
          This track <span className="text-magenta">does not exist</span>
        </>
      }
      intro="The page you were looking for has moved or never made the final cut. Head back home and pick up from there."
      desktop={{ src: "/images/stage-walkout.jpg", w: 1080, h: 720 }}
      mobile={{ src: "/images/stage-vest-chest.jpg", w: 720, h: 1080 }}
      alt="Woriidem on stage"
    >
      <Button href="/">Back to home</Button>
      <Button href="/credits" variant="light">
        Hear the songs
      </Button>
    </PageHeader>
  );
}
