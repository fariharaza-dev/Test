import Link from "next/link";
import {
  MagnifyingGlass,
  Stack,
  TrendUp,
  WarningCircle,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import RevealSection from "@/components/RevealSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import ParallaxImage from "@/components/ParallaxImage";
import StaggerReveal from "@/components/StaggerReveal";

const situations = [
  {
    title: "Seeking Clarity",
    body: "You're unsure which roles actually match your skills and personality.",
    icon: MagnifyingGlass,
    accent: "#F0714E",
  },
  {
    title: "Managing Volume",
    body: "You're applying to multiple jobs and losing track of what you sent.",
    icon: Stack,
    accent: "#173049",
  },
  {
    title: "Ready for Growth",
    body: "You're switching careers and need to understand your options.",
    icon: TrendUp,
    accent: "#5FAFA0",
  },
];

const costs = [
  {
    title: "Applications sent without a strategy.",
    body: "You apply to whatever's open instead of what actually fits, and it shows.",
  },
  {
    title: "Interviews you're not ready for.",
    body: "Without your own notes and context, you're caught off guard by questions you've already been asked before.",
  },
  {
    title: "Offers judged in isolation.",
    body: "No salary benchmark means you don't know if what's on the table is fair.",
  },
];

const outcomes = [
  "You apply with confidence, not hope.",
  "You know your worth before you negotiate.",
  "Every application has a home.",
  "You never repeat yourself in an interview.",
];

const faqs = [
  {
    q: "Is this just another app to manage?",
    a: "No. Discareer replaces the two or three tools you're already juggling with one connected place.",
  },
  {
    q: "Do I need to already be job hunting?",
    a: "No. It works just as well if you're only starting to think about a change.",
  },
  {
    q: "What does it cost?",
    a: "Creating an account is free. Paid plans are available if you want more, but you can get real value without paying anything.",
  },
];

export default function Home() {
  return (
    <>
      {/* Attention: Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-[#FFF1EA] to-white dark:from-zinc-900 dark:to-zinc-950" />
        <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#F0714E]/20 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-8 text-center sm:px-6 lg:pt-28 lg:px-8">
          <RevealSection>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white">
              The clearest path to your next role.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              Discareer combines career clarity, salary insight, and
              application tracking in one place, so you always know your
              next move.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-[#F0714E] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#F0714E]/30 transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
              >
                Get Started for Free
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold text-zinc-700 transition-colors hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={0.15} className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl shadow-black/15 ring-1 ring-black/5">
            <div className="relative aspect-[16/8] w-full">
              <ParallaxImage
                src="https://picsum.photos/seed/discareer-hero-workspace/1600/800"
                alt="A professional planning their career journey"
                priority
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            <div className="absolute left-6 top-6 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-10 sm:top-10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0714E] text-white">
                <MagnifyingGlass size={16} weight="bold" />
              </span>
              <span className="text-sm font-medium text-zinc-800">
                Strong fit for Product Design
              </span>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-10 sm:right-10">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5FAFA0]" />
              <span className="text-sm font-medium text-zinc-800">
                3 applications awaiting reply
              </span>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Interest: Is this you */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              You&apos;re not alone if this sounds familiar.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
              Three moments where most people feel stuck. See if one of
              these is you right now.
            </p>
          </RevealSection>

          <StaggerReveal className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {situations.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="stagger-item flex flex-col items-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full shadow-md"
                    style={{ backgroundColor: s.accent }}
                  >
                    <Icon size={28} weight="bold" className="text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[240px] text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Interest: stakes */}
      <section className="bg-white py-20 lg:py-28 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              Here&apos;s what staying stuck actually costs you.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Not knowing your direction has a real, ongoing cost.
            </p>
          </RevealSection>

          <div className="mt-14 divide-y divide-zinc-200 dark:divide-zinc-800">
            {costs.map((c, i) => (
              <RevealSection
                key={c.title}
                delay={i * 0.08}
                className="flex flex-col gap-3 py-7 sm:flex-row sm:items-start sm:gap-6"
              >
                <WarningCircle
                  size={24}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-[#F0714E]"
                />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {c.body}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Desire: differentiation */}
      <section className="bg-white py-20 lg:py-28 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <RevealSection className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F0714E]">
              The missing link
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              You shouldn&apos;t need five tabs open to plan your career.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Career sites give you insight. Job boards give you listings.
              Neither helps you connect the two.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Discareer bridges the gap.
              </span>{" "}
              One connected place for self-discovery and active tracking, so
              nothing falls through the cracks.
            </p>
          </RevealSection>

          <RevealSection delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] shadow-xl shadow-black/5">
              <ParallaxImage
                src="https://picsum.photos/seed/discareer-journal-notes/900/720"
                alt="Notes and planning materials for a career search"
                className="absolute inset-0"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Desire: proof */}
      <section id="capabilities" className="bg-white py-20 lg:py-28 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              See what changes when it&apos;s all in one place.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Four tools working together, not four different tabs.
            </p>
          </RevealSection>

          <div className="mt-14">
            <FeatureShowcase />
          </div>
        </div>
      </section>

      {/* Desire: payoff */}
      <section className="bg-[#F4F1EC] py-20 lg:py-28 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              This is what it looks like on the other side.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
              Real clarity, not more guesswork.
            </p>
          </RevealSection>

          <StaggerReveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o}
                className="stagger-item flex items-center gap-3 rounded-2xl bg-white px-6 py-5 text-left shadow-sm dark:bg-zinc-800"
              >
                <CheckCircle size={22} weight="fill" className="shrink-0 text-[#5FAFA0]" />
                <p className="text-[15px] font-medium text-zinc-800 dark:text-zinc-200">
                  {o}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Bridge to action: objection handling */}
      <section className="bg-white py-20 lg:py-28 dark:bg-zinc-950">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              A few quick questions, answered.
            </h2>
          </RevealSection>

          <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
            {faqs.map((f, i) => (
              <RevealSection key={f.q} delay={i * 0.08} className="py-6">
                <h3 className="text-[17px] font-semibold text-zinc-950 dark:text-white">
                  {f.q}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {f.a}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="relative overflow-hidden bg-[#173049] py-24 lg:py-32">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#F0714E]/25 blur-[110px]" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-[#5FAFA0]/20 blur-[110px]" />
        <RevealSection className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Your next role won&apos;t find itself.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Create a free account and get moving in minutes.
          </p>
          <div className="mt-9">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-[#F0714E] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-black/20 transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
            >
              Get Started for Free
            </Link>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
