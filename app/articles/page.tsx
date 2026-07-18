import Image from "next/image";
import type { Metadata } from "next";
import { Clock, BookmarkSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Articles | Career Guidance App",
};

const articles = [
  {
    title: "From Chaos to Clarity: How Daily Notes Help You Stay Focused",
    excerpt:
      "By now, you might already know about the problem of 2 Worlds and dealing with tons of digital content. You might...",
    readTime: "3 mins",
    image: "https://picsum.photos/seed/discareer-article-notes/800/500",
  },
];

export default function ArticlesPage() {
  return (
    <section className="bg-gradient-to-b from-[#FFF6F1] to-white py-16 lg:py-24 dark:from-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Career Insights
        </h1>
        <p className="mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          Discover the latest trends, advice, and strategies to help you
          navigate your professional journey.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="relative aspect-[8/5] w-full overflow-hidden">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  aria-label="Save article"
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 backdrop-blur-sm"
                >
                  <BookmarkSimple size={16} weight="bold" />
                </button>
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold leading-snug text-zinc-950 dark:text-white">
                  {a.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                  <Clock size={14} />
                  {a.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav
          aria-label="Article pagination"
          className="mt-12 flex items-center justify-center"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-sm font-medium text-white dark:bg-white dark:text-zinc-950">
            1
          </span>
        </nav>
      </div>
    </section>
  );
}
