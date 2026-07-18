import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  Stack,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import RevealSection from "@/components/RevealSection";
import FeatureShowcase from "@/components/FeatureShowcase";

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-[#FFF1EA] to-white dark:from-zinc-900 dark:to-zinc-950" />
        <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#F0714E]/20 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-8 text-center sm:px-6 lg:pt-28 lg:px-8">
          <RevealSection>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white">
              Explore careers. Discover your strengths. Connect with purpose.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              Discareer helps you explore career options, understand your
              potential, and receive AI-powered guidance to thrive in
              today&apos;s evolving job market.
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
              <Image
                src="https://picsum.photos/seed/discareer-hero-workspace/1600/800"
                alt="A professional planning their career journey"
                fill
                priority
                className="object-cover"
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

      {/* Feature showcase */}
      <section id="capabilities" className="bg-white py-20 lg:py-28 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              Your career command center
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to move forward, in one connected place.
            </p>
          </RevealSection>

          <div className="mt-14">
            <FeatureShowcase />
          </div>
        </div>
      </section>

      {/* Is this you */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              Is this you?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
              Discareer was built for the defining moments of your
              professional life.
            </p>
          </RevealSection>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {situations.map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealSection key={s.title} delay={i * 0.08} className="flex flex-col items-center">
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
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* The missing link */}
      <section className="bg-white py-20 lg:py-28 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <RevealSection className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F0714E]">
              The missing link
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
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
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] shadow-xl shadow-black/5">
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

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#173049] py-24 lg:py-32">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#F0714E]/25 blur-[110px]" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-[#5FAFA0]/20 blur-[110px]" />
        <RevealSection className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to take control?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Sign up now and start making confident career decisions.
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
