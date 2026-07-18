"use client";

import { useState } from "react";

const categories = [
  "Leave Feedback",
  "General Support",
  "Account Deletion",
  "Privacy Inquiry",
];

export default function SupportForm() {
  const [active, setActive] = useState(categories[0]);

  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Full Name <span className="text-[#F0714E]">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter your first name"
          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#F0714E] focus:bg-white focus:ring-2 focus:ring-[#F0714E]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email Address <span className="text-[#F0714E]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email address"
          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#F0714E] focus:bg-white focus:ring-2 focus:ring-[#F0714E]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="description" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Description <span className="text-[#F0714E]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Describe your feedback or suggestions in detail"
          className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#F0714E] focus:bg-white focus:ring-2 focus:ring-[#F0714E]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
        />
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Feedback category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              active === c
                ? "bg-[#F0714E] text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-[#F0714E] py-3.5 text-[15px] font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
      >
        Submit Request
      </button>

      <p className="text-center text-[13px] text-zinc-400">
        Our support team is available Monday through Friday, 9am to 5pm BST.
      </p>
    </form>
  );
}
