import Link from "next/link";
import { Logo } from "./Logo";
import { SocialIcon } from "./Icons";
import { nav, site, socials } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-white dark:border-t dark:border-white/10 dark:bg-[#08080b]">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Link href="/" aria-label="Woriidem, home" className="inline-block rounded-lg">
            <Logo tone="onDark" />
          </Link>
          <p className="text-justified mt-6 leading-relaxed text-white/65">
            Songwriter, composer and artist developer, based in London. I also run {site.label}.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-magenta hover:bg-magenta hover:text-white"
              >
                <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
            {[...nav, { href: "/contact", label: "Contact" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/75 transition-colors duration-300 hover:text-violet">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Get in touch</p>
          <a href={`mailto:${site.email}`} className="mt-5 block break-all font-display text-lg font-semibold transition-colors hover:text-violet">
            {site.email}
          </a>
          <p className="mt-3 text-white/60">{site.location}</p>
          <Link href="/contact" className="btn btn-primary btn-sm mt-7">
            <span>Start a conversation</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.label}. All rights reserved.
          </p>
          <p>
            Designed and built by <span className="text-white/70">@Judacris_Jude</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
