"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SocialIcon } from "./Icons";
import { nav, site, socials } from "@/lib/content";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(!open && y > prev && y > 240);
  });

  // Close the menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll, close on Escape, move focus into the menu
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => menuRef.current?.querySelector<HTMLElement>("a")?.focus(), 350);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled && !open;
  const onDark = !solid;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.4, ease }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500",
            solid
              ? "border-b border-line/70 bg-bg/80 shadow-[0_8px_30px_-18px_rgb(11_11_15/0.35)] backdrop-blur-xl backdrop-saturate-150"
              : "border-b border-transparent bg-transparent"
          )}
        >
          <nav
            aria-label="Main"
            className={cn(
              "container grid grid-cols-[1fr_auto] items-center gap-4 transition-[height] duration-500 lg:grid-cols-[1fr_auto_1fr]",
              solid ? "h-[68px]" : "h-[84px]"
            )}
          >
            <Link href="/" aria-label="Woriidem, home" className="flex w-fit items-center rounded-lg">
              <Logo tone={onDark ? "onDark" : "auto"} priority className="h-7 sm:h-8" />
            </Link>

            <ul className="hidden items-center lg:flex">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative block px-3 py-2 text-[0.9rem] font-medium tracking-[0.01em] transition-colors duration-300 xl:px-4",
                        onDark
                          ? active
                            ? "text-white"
                            : "text-white/75 hover:text-white"
                          : active
                            ? "text-ink"
                            : "text-ink/65 hover:text-hl"
                      )}
                    >
                      {item.label}
                      {active ? (
                        <motion.span
                          layoutId="nav-active"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-magenta xl:inset-x-4"
                        />
                      ) : (
                        <span className="absolute inset-x-3 -bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-magenta/70 transition-transform duration-300 ease-out group-hover:scale-x-100 xl:inset-x-4" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-end gap-2.5">
              <ThemeToggle onDark={onDark} />
              <Link
                href="/contact"
                className={cn("btn btn-sm hidden sm:inline-flex", onDark ? "btn-light" : "btn-primary")}
              >
                <span>Work with me</span>
                <ArrowRight aria-hidden className="btn-icon h-4 w-4" strokeWidth={2.4} />
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className={cn(
                  "relative grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                  onDark ? "border-white/30 bg-white/5 text-white hover:bg-white/15" : "border-line text-ink hover:border-magenta/60"
                )}
              >
                <span className="relative block h-3.5 w-5">
                  <motion.span
                    animate={open ? { top: "50%", rotate: 45, y: "-50%" } : { top: "0%", rotate: 0, y: "0%" }}
                    transition={{ duration: 0.3, ease }}
                    className="absolute left-0 h-[2px] w-full rounded-full bg-current"
                  />
                  <motion.span
                    animate={open ? { top: "50%", rotate: -45, y: "-50%", width: "100%" } : { top: "100%", rotate: 0, y: "-100%", width: "70%" }}
                    transition={{ duration: 0.3, ease }}
                    className="absolute right-0 h-[2px] rounded-full bg-current"
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "circle(0% at calc(100% - 2.6rem) 2.6rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.6rem) 2.6rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.6rem) 2.6rem)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-night text-white lg:hidden"
          >
            <div className="container flex flex-1 flex-col justify-between pb-10 pt-28">
              <ul className="flex flex-col gap-1">
                {[...nav, { href: "/contact", label: "Contact" }].map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ y: 36, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0, transition: { duration: 0.15 } }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="group flex items-baseline gap-4 py-1.5 font-display text-[2.4rem] font-bold leading-tight tracking-tight sm:text-5xl"
                      >
                        <span className="w-7 font-sans text-xs font-semibold tracking-[0.2em] text-white/35">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "transition-[color,transform] duration-300 group-hover:translate-x-1.5",
                            active ? "text-magenta" : "text-white group-hover:text-violet"
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <a href={`mailto:${site.email}`} className="text-sm text-white/70 transition-colors hover:text-white">
                  {site.email}
                </a>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:border-magenta hover:bg-magenta"
                    >
                      <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
