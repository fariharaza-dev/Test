"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Compass,
  PiggyBank,
  NotePencil,
  Brain,
  type Icon,
} from "@phosphor-icons/react";

type Tab = {
  key: string;
  title: string;
  body: string;
  icon: Icon;
  accent: string;
  panelBg: string;
  tags: string[];
};

const tabs: Tab[] = [
  {
    key: "clarity",
    title: "Career clarity & fit",
    body: "Understand which roles suit your skills and interests, so you apply with confidence.",
    icon: Compass,
    accent: "#F0714E",
    panelBg: "from-[#FFE4D6] to-[#FFF6F1]",
    tags: ["Product Design", "UX Research", "Program Management"],
  },
  {
    key: "salary",
    title: "Salary calculator",
    body: "Know what to expect and negotiate from a position of knowledge, not guesswork.",
    icon: PiggyBank,
    accent: "#5FAFA0",
    panelBg: "from-[#DFF3EF] to-[#F1FBF9]",
    tags: ["Product Manager, London", "£55k to £72k range"],
  },
  {
    key: "tracking",
    title: "Application tracking",
    body: "Keep every application organised in one place, so nothing slips through the cracks.",
    icon: NotePencil,
    accent: "#173049",
    panelBg: "from-[#DCE6F0] to-[#F2F6FA]",
    tags: ["Applied", "Interviewing", "Offer"],
  },
  {
    key: "memory",
    title: "Contextual memory",
    body: "Remember exactly what you told each employer, so you walk into interviews prepared.",
    icon: Brain,
    accent: "#9B6FDA",
    panelBg: "from-[#EBE1FA] to-[#F7F3FD]",
    tags: ["Salary expectations shared", "Availability discussed"],
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = tabs[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="flex flex-col gap-2 lg:col-span-5">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = i === active;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(i)}
              className={`flex items-start gap-4 rounded-2xl p-5 text-left transition-colors ${
                isActive
                  ? "bg-white shadow-lg shadow-black/[0.06] dark:bg-zinc-800"
                  : "hover:bg-black/[0.03] dark:hover:bg-white/5"
              }`}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors"
                style={{
                  backgroundColor: isActive ? tab.accent : "rgba(0,0,0,0.05)",
                  color: isActive ? "white" : undefined,
                }}
              >
                <Icon size={22} weight="bold" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-zinc-950 dark:text-white">
                  {tab.title}
                </h3>
                {isActive && (
                  <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {tab.body}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative lg:col-span-7">
        <div
          className={`relative aspect-[16/11] w-full overflow-hidden rounded-[28px] bg-gradient-to-br shadow-2xl shadow-black/10 ${current.panelBg}`}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: current.accent }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? {} : { opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10"
            >
              <div
                className="flex h-24 w-24 items-center justify-center rounded-3xl shadow-lg"
                style={{ backgroundColor: current.accent }}
              >
                <current.icon size={42} weight="bold" className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900">{current.title}</h4>
              <div className="flex max-w-sm flex-wrap items-center justify-center gap-2.5">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
