"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const topics = ["Songwriting", "Feature or collaboration", "Artist development", "Press or interview", "Something else"];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-300 focus:border-magenta focus:outline-none focus:ring-4 focus:ring-magenta/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState(topics[0]);
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No key configured yet: fall back to the visitor's email app
    if (!key) {
      const subject = encodeURIComponent(`${topic}: enquiry from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    data.append("access_key", key);
    data.append("subject", `New ${topic.toLowerCase()} enquiry from the Woriidem website`);
    data.append("topic", topic);
    data.append("from_name", "Woriidem website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative rounded-[28px] border border-line bg-bg p-6 shadow-soft sm:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
            role="status"
          >
            <CheckCircle2 className="h-14 w-14 text-magenta" />
            <h3 className="mt-6 text-3xl font-bold tracking-tight">Message received.</h3>
            <p className="mt-3 max-w-sm text-muted">Thanks for reaching out. Your message is with me now, and I’ll get back to you as soon as I can.</p>
            <button type="button" onClick={() => setStatus("idle")} className="link-draw mt-8">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} className="space-y-6">
            <fieldset>
              <legend className="mb-3 text-sm font-semibold">What is it about?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    aria-pressed={topic === t}
                    className={cn(
                      "min-h-[44px] rounded-full border px-4 text-sm font-medium transition-all duration-300",
                      topic === t
                        ? "border-accent bg-accent text-white shadow-glow"
                        : "border-line text-ink/75 hover:border-magenta/60 hover:text-hl"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Your name
                </label>
                <input id="name" name="name" required autoComplete="name" placeholder="First and last name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email address
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Tell me a little more
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="The project, the artist, the timeline. Links to demos are welcome."
                className={cn(field, "resize-y")}
              />
            </div>

            {/* Spam trap for bots, hidden from people */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

            {status === "error" && (
              <p role="alert" className="rounded-2xl bg-magenta/10 px-4 py-3 text-sm text-hl">
                Something went wrong sending that. Please try again, or email {site.email} directly.
              </p>
            )}

            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">Your details are only used to reply to you.</p>
              <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:pointer-events-none disabled:opacity-70">
                <span>{status === "sending" ? "Sending" : "Send message"}</span>
                {status === "sending" ? (
                  <LoaderCircle aria-hidden className="h-[18px] w-[18px] animate-spin" />
                ) : (
                  <ArrowRight aria-hidden className="btn-icon h-[18px] w-[18px]" />
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
