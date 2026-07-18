import type { Metadata } from "next";
import SupportForm from "@/components/SupportForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "discareer - Smart Career Guidance",
  description:
    "Take control of your career journey with AI-powered guidance and personalised recommendations",
};

export default function SupportPage() {
  return (
    <section className="bg-gradient-to-b from-[#FFF6F1] to-white py-16 lg:py-24 dark:from-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Customer Support
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
          Need help with something? We are here for you. Fill out the form
          below and our team will get back to you as soon as possible.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white p-8 text-left shadow-xl shadow-black/5 sm:p-10 dark:border-white/10 dark:bg-zinc-900">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
            Share Feedback
          </h2>
          <p className="mt-1.5 text-[15px] text-zinc-500 dark:text-zinc-400">
            We would love to hear your thoughts on how we can improve
            Discareer. Let us know what you like or what we can do better.
          </p>
          <div className="mt-7">
            <SupportForm />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
