import Link from "next/link";
import type { Metadata } from "next";
import { GoogleIcon, AppleIcon } from "@/components/SocialButton";

export const metadata: Metadata = {
  title: "discareer - Smart Career Guidance",
  description:
    "Take control of your career journey with AI-powered guidance and personalised recommendations",
};

export default function RegisterPage() {
  return (
    <section className="flex min-h-[calc(100dvh-72px)] items-center justify-center bg-gradient-to-b from-[#FFF6F1] to-white px-4 py-16 dark:from-zinc-900 dark:to-zinc-950">
      <div className="w-full max-w-md rounded-3xl border border-black/5 bg-white p-8 shadow-xl shadow-black/5 sm:p-10 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Create account
        </h2>
        <p className="mt-1.5 text-[15px] text-zinc-500 dark:text-zinc-400">
          Start your career journey with Discareer
        </p>

        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#F0714E] focus:bg-white focus:ring-2 focus:ring-[#F0714E]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className="sr-only">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Provide your first name"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-[13.5px] text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#F0714E] focus:bg-white focus:ring-2 focus:ring-[#F0714E]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className="sr-only">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Provide your last name"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-[13.5px] text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#F0714E] focus:bg-white focus:ring-2 focus:ring-[#F0714E]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>
          </div>

          <label
            htmlFor="checkbox:terms:input"
            className="flex items-start gap-2.5 pt-1 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            <input
              id="checkbox:terms:input"
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 text-[#F0714E] focus:ring-[#F0714E]/30 dark:border-zinc-600"
            />
            I agree to the{" "}
            <Link href="/terms" className="font-medium text-zinc-700 underline dark:text-zinc-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-zinc-700 underline dark:text-zinc-300"
            >
              Privacy Policy
            </Link>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#F0714E] py-3.5 text-[15px] font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
          >
            Create Account
          </button>

          <div className="flex items-center gap-3 py-1 text-xs text-zinc-400">
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
            or
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-zinc-200 py-3.5 text-[15px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-zinc-200 py-3.5 text-[15px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <AppleIcon />
            Sign in with Apple
          </button>
        </form>

        <p className="mt-7 text-center text-[15px] text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#F0714E]">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
