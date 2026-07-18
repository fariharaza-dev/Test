function isHeading(line: string) {
  return (
    line.length < 60 &&
    !/[.,;:]$/.test(line) &&
    !line.startsWith("-") &&
    line !== line.toUpperCase()
  );
}

export default function LegalPage({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  const lastUpdated = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <section className="bg-white py-16 lg:py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-zinc-400">
          {lastUpdated}
        </p>

        <div className="mt-10 space-y-5">
          {rest.map((line, i) =>
            isHeading(line) ? (
              <h2
                key={i}
                className="pt-4 text-lg font-semibold text-zinc-950 first:pt-0 dark:text-white"
              >
                {line}
              </h2>
            ) : (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {line}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
