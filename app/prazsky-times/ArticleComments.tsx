"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Comment = {
  id: string;
  created_at: string;
  article_id: number;
  name: string;
  message: string;
  parent_comment_id: string | null;
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

function CommentForm({
  onSubmit,
  onCancel,
  submitting,
  className = "mt-4 flex flex-col gap-2",
}: {
  onSubmit: (name: string, message: string) => void;
  onCancel: () => void;
  submitting: boolean;
  className?: string;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;
    onSubmit(trimmedName, trimmedMessage);
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
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
          onClick={onCancel}
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
  );
}

function CommentCard({
  comment,
  onReply,
}: {
  comment: Comment;
  onReply?: () => void;
}) {
  return (
    <div className="rounded-md bg-surface-raised px-3 py-2">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-foreground">
          {comment.name}
        </span>
        <span className="shrink-0 text-xs text-muted">
          {formatRelativeTime(comment.created_at)}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted">{comment.message}</p>
      {onReply && (
        <button
          type="button"
          onClick={onReply}
          className="mt-2 text-xs font-semibold text-muted transition-colors hover:text-foreground"
        >
          Reply
        </button>
      )}
    </div>
  );
}

export function ArticleComments({ articleId }: { articleId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

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

  async function postComment(
    name: string,
    message: string,
    parentCommentId: string | null
  ) {
    setSubmitting(true);
    setError(null);
    const { error } = await supabase.from("comments").insert({
      article_id: articleId,
      name,
      message,
      parent_comment_id: parentCommentId,
    });

    if (error) {
      setError(error.message);
    } else {
      setIsFormOpen(false);
      setReplyingTo(null);
      await fetchComments();
    }
    setSubmitting(false);
  }

  // Comments arrive oldest-first; keep that order for both the top-level list
  // and each parent's replies. Only one level of nesting is supported, so a
  // reply's own parent_comment_id is always a top-level comment.
  const topLevelComments = comments.filter((c) => c.parent_comment_id == null);
  const repliesByParent = new Map<string, Comment[]>();
  for (const comment of comments) {
    if (comment.parent_comment_id != null) {
      const existing = repliesByParent.get(comment.parent_comment_id) ?? [];
      existing.push(comment);
      repliesByParent.set(comment.parent_comment_id, existing);
    }
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
      {!loading && topLevelComments.length > 0 && (
        <ul className="flex flex-col gap-3">
          {topLevelComments.map((comment) => {
            const replies = repliesByParent.get(comment.id) ?? [];
            const isReplying = replyingTo === comment.id;

            return (
              <li key={comment.id} className="flex flex-col gap-2">
                <CommentCard
                  comment={comment}
                  onReply={() =>
                    setReplyingTo(isReplying ? null : comment.id)
                  }
                />

                {(replies.length > 0 || isReplying) && (
                  <div className="ml-4 flex flex-col gap-2 border-l border-border pl-3">
                    {replies.map((reply) => (
                      <CommentCard key={reply.id} comment={reply} />
                    ))}
                    {isReplying && (
                      <CommentForm
                        className="flex flex-col gap-2"
                        submitting={submitting}
                        onCancel={() => setReplyingTo(null)}
                        onSubmit={(name, message) =>
                          postComment(name, message, comment.id)
                        }
                      />
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {isFormOpen ? (
        <CommentForm
          submitting={submitting}
          onCancel={() => setIsFormOpen(false)}
          onSubmit={(name, message) => postComment(name, message, null)}
        />
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
