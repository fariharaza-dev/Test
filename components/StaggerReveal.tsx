"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function StaggerReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".stagger-item", wrap.current!);
      gsap.fromTo(
        items,
        { opacity: 0, y: 28, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={wrap} className={className}>
      {children}
    </div>
  );
}
