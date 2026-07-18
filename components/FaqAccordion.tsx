"use client";

import { useState } from "react";
import { CaretRight } from "@phosphor-icons/react";

const faqs = [
  {
    q: "How do I delete my account?",
    a: "Go to Settings > Account and select \"Delete Account.\" You'll be asked to confirm before the deletion is processed.",
  },
  {
    q: "How long does it take to process my request?",
    a: "Most requests are handled within 2 business days. Account deletion and data requests can take up to 30 days as required by law.",
  },
  {
    q: "What happens to my data when I delete my account?",
    a: "Your personal data is permanently removed from our active systems in line with our Privacy Policy, aside from records we're legally required to retain.",
  },
  {
    q: "Can I download my data before deleting my account?",
    a: "Yes. Contact support before deleting your account and we'll provide an export of your data.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {faqs.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">
              {item.q}
            </span>
            <CaretRight
              size={16}
              weight="bold"
              className={`shrink-0 text-zinc-400 transition-transform ${
                open === i ? "rotate-90" : ""
              }`}
            />
          </button>
          {open === i && (
            <p className="pb-5 text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
