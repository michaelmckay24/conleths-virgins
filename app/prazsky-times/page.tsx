import Image from "next/image";
import { articles } from "@/data/articles";

function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function PrazskyTimesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        The Prazsky Times
      </h1>
      <div className="flex flex-col gap-6">
        {sortedArticles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden rounded-lg border border-border bg-surface"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h2 className="text-lg font-semibold text-foreground">
                  {article.title}
                </h2>
                <time
                  dateTime={article.publishedAt}
                  className="shrink-0 font-mono text-xs tracking-wide text-muted uppercase"
                >
                  {formatDate(article.publishedAt)}
                </time>
              </div>
              <div className="flex flex-col gap-3">
                {article.body.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-sm text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
