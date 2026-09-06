import Image from "next/image";
import { articles } from "@/data/articles";
import { weekRecaps } from "@/data/weekRecaps";
import { ArticleComments } from "./ArticleComments";
import { WeekRecapContent } from "./WeekRecapContent";

function parseDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(dateString: string) {
  return parseDate(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

type FeedItem =
  | {
      kind: "article";
      id: number;
      title: string;
      image: string;
      publishedAt: string;
      body: string;
    }
  | {
      kind: "weekRecap";
      id: number;
      title: string;
      image: string;
      publishedAt: string;
      week: number;
    };

export default function PrazskyTimesPage() {
  const feedItems: FeedItem[] = [
    ...articles.map((article) => ({ kind: "article" as const, ...article })),
    ...weekRecaps
      .filter((recap) => recap.published)
      .map((recap) => ({ kind: "weekRecap" as const, ...recap })),
  ].sort(
    (a, b) => parseDate(b.publishedAt).getTime() - parseDate(a.publishedAt).getTime()
  );

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        The Prazsky Times
      </h1>
      <div className="flex flex-col gap-6">
        {feedItems.map((item) => (
          <article
            key={`${item.kind}-${item.id}`}
            className="overflow-hidden rounded-lg border border-border bg-surface"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h2 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h2>
                <time
                  dateTime={item.publishedAt}
                  className="shrink-0 font-mono text-xs tracking-wide text-muted uppercase"
                >
                  {formatDate(item.publishedAt)}
                </time>
              </div>
              {item.kind === "article" ? (
                <div className="flex flex-col gap-3">
                  {item.body.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line text-sm text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <WeekRecapContent week={item.week} />
              )}
              <ArticleComments
                // Week recaps and articles share one `comments` table keyed only
                // by article_id, and both id sequences start at 1 — negate week
                // recap ids so they can't collide with a real article's id.
                articleId={item.kind === "article" ? item.id : -item.id}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
