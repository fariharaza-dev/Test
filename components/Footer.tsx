import Link from "next/link";
import Image from "next/image";

const socials = [
  { name: "Instagram", slug: "instagram", href: "https://instagram.com" },
  { name: "TikTok", slug: "tiktok", href: "https://tiktok.com" },
  { name: "X", slug: "x", href: "https://x.com" },
  { name: "LinkedIn", slug: "linkedin", href: "https://linkedin.com" },
];

const legalLinks = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of use", href: "/terms" },
  { text: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform hover:-translate-y-0.5"
              >
                {s.slug === "linkedin" ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                  </svg>
                ) : (
                  <Image
                    src={`https://cdn.simpleicons.org/${s.slug}/ffffff`}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4"
                    unoptimized
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-sm text-zinc-500 sm:flex-row sm:gap-6">
            <span>© 2026 All rights reserved.</span>
            <div className="flex items-center gap-6">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-zinc-900">
                  {l.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
