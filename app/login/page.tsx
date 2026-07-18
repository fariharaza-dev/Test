import Link from "next/link";
import type { Metadata } from "next";
import { GoogleIcon, AppleIcon } from "@/components/SocialButton";

export const metadata: Metadata = {
  title: "discareer - Smart Career Guidance",
  description:
    "Take control of your career journey with AI-powered guidance and personalised recommendations",
};

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100dvh-72px)] items-center justify-center bg-gradient-to-b from-[#FFF6F1] to-white px-4 py-16 dark:from-zinc-900 dark:to-zinc-950">
      <div className="w-full max-w-md rounded-3xl border border-black/5 bg-white p-8 shadow-xl shadow-black/5 sm:p-10 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Welcome back
        </h2>
        <p className="mt-1.5 text-[15px] text-zinc-500 dark:text-zinc-400">
          Sign in to your account
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

          <button
            type="submit"
            className="w-full rounded-xl bg-[#F0714E] py-3.5 text-[15px] font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
          >
            Continue with Email
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
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[#F0714E]">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}
