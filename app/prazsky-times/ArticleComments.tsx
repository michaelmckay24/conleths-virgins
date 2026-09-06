"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Comment = {
  id: string;
  created_at: string;
  article_id: number;
  name: string;
  message: string;
};

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const diffSeconds = Math.round((Date.now() - date.getTime()) / 1000);

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

  for (const [unit, secondsInUnit] of units) {
    if (diffSeconds >= secondsInUnit) {
      return rtf.format(-Math.floor(diffSeconds / secondsInUnit), unit);
    }
  }
  return rtf.format(-diffSeconds, "second");
}

export function ArticleComments({ articleId }: { articleId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  async function fetchComments() {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("article_id", articleId)
      .order("created_at", { ascending: true });

    if (error) {
      setError(error.message);
    } else {
      setComments(data ?? []);
    }
    setLoading(false);
  }

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("article_id", articleId)
        .order("created_at", { ascending: true });

      if (cancelled) return;
      if (error) {
        setError(error.message);
      } else {
        setComments(data ?? []);
      }
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [articleId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    setSubmitting(true);
    setError(null);
    const { error } = await supabase
      .from("comments")
      .insert({ article_id: articleId, name: trimmedName, message: trimmedMessage });

    if (error) {
      setError(error.message);
    } else {
      setName("");
      setMessage("");
      setIsFormOpen(false);
      await fetchComments();
    }
    setSubmitting(false);
  }

  function handleCancel() {
    setName("");
    setMessage("");
    setIsFormOpen(false);
  }

  return (
    <div className="mt-4 border-t border-border pt-4">
      <h3 className="mb-3 text-xs font-semibold tracking-widest text-muted uppercase">
        Comments
      </h3>
      {loading && <p className="text-xs text-muted">Loading comments…</p>}
      {error && <p className="text-xs text-loss">{error}</p>}
      {!loading && !error && comments.length === 0 && (
        <p className="text-xs text-muted">No comments yet.</p>
      )}
      {!loading && comments.length > 0 && (
        <ul className="flex flex-col gap-3">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="rounded-md bg-surface-raised px-3 py-2"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-foreground">
                  {comment.name}
                </span>
                <span className="shrink-0 text-xs text-muted">
                  {formatRelativeTime(comment.created_at)}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{comment.message}</p>
            </li>
          ))}
        </ul>
      )}
      {isFormOpen ? (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Comment"
            rows={2}
            className="resize-none rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || !name.trim() || !message.trim()}
              className="rounded-md bg-accent px-3 py-1 text-sm font-semibold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting ? "Posting…" : "Post"}
            </button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="mt-4 rounded-md border border-border px-3 py-1 text-sm font-semibold text-foreground transition-colors hover:bg-surface-raised"
        >
          Comment
        </button>
      )}
    </div>
  );
}
