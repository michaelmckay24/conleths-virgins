"use client";

import Image from "next/image";
import { useState } from "react";
import { powerRankings, getPreviousRank } from "@/data/powerRankings";
import { getTeamById } from "@/data/teams";
import { currentWeek } from "@/data/config";

function MovementIndicator({
  rank,
  previousRank,
}: {
  rank: number;
  previousRank: number | null;
}) {
  if (previousRank === null) {
    return (
      <span className="shrink-0 font-mono text-xs font-semibold text-accent">NEW</span>
    );
  }
  if (rank < previousRank) {
    return (
      <span className="shrink-0 font-mono text-xs font-semibold text-win">
        ↑ {previousRank - rank}
      </span>
    );
  }
  if (rank > previousRank) {
    return (
      <span className="shrink-0 font-mono text-xs font-semibold text-loss">
        ↓ {rank - previousRank}
      </span>
    );
  }
  return <span className="shrink-0 font-mono text-xs text-muted">—</span>;
}

function weekLabel(week: number) {
  return week === 0 ? "Pre Season" : `Week ${week}`;
}

function WeekSelector({
  week,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
}: {
  week: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mb-6 flex items-center justify-center gap-4 sm:gap-6">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous week"
        className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-lg leading-none text-foreground transition-colors hover:enabled:bg-surface-raised disabled:cursor-not-allowed disabled:opacity-30"
      >
        ‹
      </button>
      <span className="w-28 text-center font-mono text-sm font-semibold tracking-widest text-accent uppercase">
        {weekLabel(week)}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next week"
        className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-lg leading-none text-foreground transition-colors hover:enabled:bg-surface-raised disabled:cursor-not-allowed disabled:opacity-30"
      >
        ›
      </button>
    </div>
  );
}

export default function PowerRankingsPage() {
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  const ranked = powerRankings
    .filter((r) => r.week === selectedWeek)
    .sort((a, b) => a.rank - b.rank);
  const hasNextWeek = powerRankings.some((r) => r.week === selectedWeek + 1);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        Power Rankings
      </h1>
      <WeekSelector
        week={selectedWeek}
        canGoPrev={selectedWeek > 0}
        canGoNext={hasNextWeek}
        onPrev={() => setSelectedWeek((week) => week - 1)}
        onNext={() => setSelectedWeek((week) => week + 1)}
      />
      <div className="flex flex-col gap-2">
        {ranked.length > 0 ? (
          ranked.map((entry) => {
            const team = getTeamById(entry.teamId);
            return (
              <div
                key={entry.teamId}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-3 sm:gap-4 sm:px-4"
              >
                <span className="w-5 shrink-0 font-mono text-lg font-bold text-accent sm:w-6">
                  {entry.rank}
                </span>
                <Image
                  src={team.icon}
                  alt={`${team.teamName} logo`}
                  width={44}
                  height={44}
                  className="size-9 shrink-0 rounded-md border border-border bg-surface-raised object-cover sm:size-11"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-foreground">
                    {team.teamName}
                  </p>
                  <p className="text-xs text-muted">{team.owner}</p>
                </div>
                <MovementIndicator
                  rank={entry.rank}
                  previousRank={getPreviousRank(selectedWeek, entry.teamId)}
                />
              </div>
            );
          })
        ) : (
          <p className="text-center text-sm text-muted">
            No power rankings available for this week.
          </p>
        )}
      </div>
    </div>
  );
}