import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  PiggyBank,
  NotePencil,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import RevealSection from "@/components/RevealSection";

const situations = [
  {
    title: "Seeking Clarity",
    body: "You're unsure which roles actually match your skills and personality.",
    className: "bg-[#FDF3E4] text-zinc-900",
  },
  {
    title: "Managing Volume",
    body: "You're applying to multiple jobs and losing track of what you sent.",
    className: "bg-[#173049] text-white",
  },
  {
    title: "Ready for Growth",
    body: "You're switching careers and need to understand your options.",
    className: "bg-[#5FAFA0] text-white",
  },
];

const capabilities = [
  {
    title: "Career clarity & fit",
    body: "Understand which roles suit your skills and interests, so you apply with confidence.",
    icon: Compass,
    span: "md:col-span-2",
    className: "bg-[#FFF1EB]",
  },
  {
    title: "Salary calculator",
    body: "Know what to expect and negotiate from a position of knowledge, not guesswork.",
    icon: PiggyBank,
    span: "",
    className: "bg-white",
  },
  {
    title: "Application tracking",
    body: "Keep every application organised in one place, so nothing slips through the cracks.",
    icon: NotePencil,
    span: "",
    className: "bg-white",
  },
  {
    title: "Contextual memory",
    body: "Remember exactly what you told each employer, so you walk into interviews prepared.",
    icon: Brain,
    span: "md:col-span-2",
    className: "bg-[#173049] text-white",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF6F1] to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-28 lg:px-8">
          <RevealSection className="lg:col-span-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-[2.9rem] lg:leading-[1.15] dark:text-white">
              Explore careers. Discover your strengths. Connect with purpose.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              Discareer helps you explore career options, understand your
              potential, and receive AI-powered guidance to thrive in
              today&apos;s evolving job market.
            </p>
            <div className="mt-8">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-[#F0714E] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#F0714E]/25 transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
              >
                Get Started for Free
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={0.15} className="relative lg:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl shadow-black/10">
              <Image
                src="https://picsum.photos/seed/discareer-professional-focus/900/1125"
                alt="A professional reviewing career options on a laptop"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-[#F0714E]/15 blur-2xl" />
          </RevealSection>
        </div>
      </section>

      {/* The missing link */}
      <section className="bg-[#F4F1EC] py-20 lg:py-28 dark:bg-zinc-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <RevealSection className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F0714E]">
              The missing link
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Don&apos;t manage your career in the margins.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Current workflows force you to live in two different worlds.
              One offers insights, the other offers listings. Neither helps
              you manage the journey in between.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Discareer bridges the gap.
              </span>{" "}
              We combine self-discovery with active tracking, creating a
              single source of truth for your professional life.
            </p>
          </RevealSection>

          <RevealSection delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-xl shadow-black/5">
              <Image
                src="https://picsum.photos/seed/discareer-journal-notes/900/720"
                alt="Notes and planning materials for a career search"
                fill
                className="object-cover"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Is this you */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Is this you?
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
              Discareer was built for the defining moments of your
              professional life.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            {situations.map((s, i) => (
              <RevealSection
                key={s.title}
                delay={i * 0.08}
                className={`rounded-2xl p-8 ${s.className} ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed opacity-85">
                  {s.body}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Command center */}
      <section className="bg-[#FAFAFA] py-20 lg:py-28 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Your Career Command Center
            </h2>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <RevealSection
                  key={c.title}
                  delay={i * 0.08}
                  className={`rounded-2xl p-8 ${c.span} ${c.className}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed opacity-80">
                    {c.body}
                  </p>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#173049] py-20 lg:py-28">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#F0714E]/20 blur-3xl" />
        <RevealSection className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to take control?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Sign up now and start making confident career decisions.
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-[#F0714E] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-black/20 transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
            >
              Get Started for Free
            </Link>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
