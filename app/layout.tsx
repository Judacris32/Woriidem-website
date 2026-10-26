import type { Metadata, Viewport } from "next";
import "@fontsource-variable/outfit";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Woriidem | Songwriter, Composer & Artist Developer",
    template: "%s | Woriidem",
  },
  description: site.description,
  keywords: [
    "Woriidem",
    "Uzochi Gerald Ihenacho",
    "songwriter",
    "composer",
    "artist developer",
    "Afrobeats songwriter",
    "Woriidem Entertainment",
    "Hxppier 25",
    "London songwriter",
  ],
  authors: [{ name: "Woriidem" }],
  creator: "JayDev Studio",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Woriidem",
    title: "Woriidem | Songwriter, Composer & Artist Developer",
    description: site.description,
    images: [{ url: "/images/stage-mic-raised.jpg", width: 1080, height: 720, alt: "Woriidem on stage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woriidem | Songwriter, Composer & Artist Developer",
    description: site.description,
    images: ["/images/stage-mic-raised.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body>
        <Providers>
          <a
            href="#main"
            className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent px-5 py-3 font-semibold text-white transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
