import { Mail } from "lucide-react";

type IconProps = { className?: string };

export function SoundCloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M11 8.2c.5-.2 1.1-.3 1.7-.3 2.6 0 4.8 2 5 4.5.3-.1.6-.2 1-.2 1.8 0 3.3 1.5 3.3 3.3S20.5 19 18.7 19H11.6a.6.6 0 0 1-.6-.6V8.2Z" />
      <rect x="8.6" y="9.2" width="1.3" height="9.8" rx=".65" />
      <rect x="6.2" y="10.6" width="1.3" height="8.4" rx=".65" />
      <rect x="3.8" y="12.2" width="1.3" height="6.8" rx=".65" />
      <rect x="1.4" y="14" width="1.3" height="5" rx=".65" />
    </svg>
  );
}

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className={className}>
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" opacity="0.14" />
      <circle cx="12" cy="12" r="10" />
      <path d="M7 9.4c3.4-1 7.2-.7 10.2 1" />
      <path d="M7.6 12.6c2.8-.8 5.8-.5 8.2.9" />
      <path d="M8.2 15.6c2.2-.6 4.4-.4 6.3.6" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  if (name === "soundcloud") return <SoundCloudIcon className={className} />;
  if (name === "spotify") return <SpotifyIcon className={className} />;
  if (name === "instagram") return <InstagramIcon className={className} />;
  return <Mail aria-hidden className={className} />;
}

/** Small animated equaliser used as a "now playing" accent */
export function EqBars({ className }: IconProps) {
  return (
    <span aria-hidden className={`inline-flex h-4 items-end gap-[3px] ${className ?? ""}`}>
      {[0, 0.25, 0.5, 0.15].map((d, i) => (
        <span key={i} className="block h-full w-[3px] origin-bottom animate-eq rounded-full bg-current" style={{ animationDelay: `${d}s` }} />
      ))}
    </span>
  );
}
