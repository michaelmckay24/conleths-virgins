"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export type PressConferenceType = "pre" | "post";

type PressConferenceEntry = {
  id: string;
  created_at: string;
  week: number;
  team_id: number;
  type: PressConferenceType;
  content: string;
};

function StatusDot({ hasEntry }: { hasEntry: boolean | null }) {
  return (
    <span
      aria-hidden="true"
      className={`size-2 shrink-0 rounded-full ${
        hasEntry === null
          ? "bg-muted"
          : hasEntry
            ? "bg-accent"
            : "bg-loss"
      }`}
    />
  );
}

export function PressConferenceDropdown({
  week,
  teamId,
  type,
  coachName,
  locked = false,
}: {
  week: number;
  teamId: number;
  type: PressConferenceType;
  coachName: string;
  locked?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [entry, setEntry] = useState<PressConferenceEntry | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const label =
    type === "pre" ? "Pre Match Press Conference" : "Post Match Press Conference";

  useEffect(() => {
    let cancelled = false;

    async function fetchEntry() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("press_conferences")
        .select("*")
        .eq("week", week)
        .eq("team_id", teamId)
        .eq("type", type)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (cancelled) return;
      if (error) {
        setError(error.message);
      } else {
        setEntry(data ?? null);
      }
      setLoading(false);
    }

    fetchEntry();
    return () => {
      cancelled = true;
    };
  }, [week, teamId, type]);

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  function handleStartEdit() {
    setMessage(entry?.content ?? "");
    setIsEditing(true);
  }

  async function handlePost(e: FormEvent) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setSubmitting(true);
    setError(null);
    const { data, error } = await supabase
      .from("press_conferences")
      .insert({ week, team_id: teamId, type, content: trimmed })
      .select()
      .maybeSingle();

    if (error) {
      setError(error.message);
    } else if (data) {
      setEntry(data);
      setMessage("");
    } else {
      setError("Something went wrong posting that statement. Please try again.");
    }
    setSubmitting(false);
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed || !entry) return;

    setSubmitting(true);
    setError(null);
    const { data, error } = await supabase
      .from("press_conferences")
      .update({ content: trimmed })
      .eq("id", entry.id)
      .select()
      .maybeSingle();

    if (error) {
      setError(error.message);
    } else if (data) {
      setEntry(data);
      setIsEditing(false);
    } else {
      setError("Could not save — that entry may have changed. Refresh and try again.");
    }
    setSubmitting(false);
  }

  const showForm = !loading && !error && (entry === null || isEditing);

  return (
    <div className="rounded-md border border-border bg-surface">
      <button
        type="button"
        onClick={handleToggle}
        disabled={locked}
        aria-expanded={isOpen}
        aria-disabled={locked}
        className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span>
          {label} <span className="text-muted">— {coachName}</span>
        </span>
        <span className="flex items-center gap-2">
          <StatusDot hasEntry={loading ? null : Boolean(entry)} />
          {!locked && (
            <span
              className={`text-xs text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          )}
        </span>
      </button>
      {!locked && isOpen && (
        <div className="border-t border-border px-3 py-3">
          {loading && <p className="text-xs text-muted">Loading…</p>}
          {error && <p className="text-xs text-loss">{error}</p>}
          {!loading && !error && entry && !isEditing && (
            <div className="flex flex-col gap-2">
              <p className="rounded-md bg-surface-raised px-3 py-2 text-sm text-foreground">
                {entry.content}
              </p>
              <button
                type="button"
                onClick={handleStartEdit}
                className="self-end rounded-md border border-border px-3 py-1 text-sm font-semibold text-foreground transition-colors hover:bg-surface-raised"
              >
                Edit
              </button>
            </div>
          )}
          {showForm && (
            <form
              onSubmit={isEditing ? handleSave : handlePost}
              className="flex flex-col gap-2"
            >
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Say something…"
                rows={2}
                className="resize-none rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={submitting || !message.trim()}
                className="self-end rounded-md bg-accent px-3 py-1 text-sm font-semibold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isEditing
                  ? submitting
                    ? "Saving…"
                    : "Save"
                  : submitting
                    ? "Posting…"
                    : "Post"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
