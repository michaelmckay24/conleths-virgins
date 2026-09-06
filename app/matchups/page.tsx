"use client";

import Image from "next/image";
import { useState } from "react";
import { matchups, type Matchup } from "@/data/matchups";
import { getTeamById } from "@/data/teams";
import { currentWeek } from "@/data/config";
import { PressConferenceDropdown } from "./PressConferenceDropdown";

function MatchupCard({ matchup }: { matchup: Matchup }) {
  const home = getTeamById(matchup.homeTeamId);
  const away = getTeamById(matchup.awayTeamId);

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="flex items-center gap-3">
          <Image
            src={home.icon}
            alt={`${home.teamName} logo`}
            width={44}
            height={44}
            className="size-9 shrink-0 rounded-md border border-border bg-surface-raised object-cover sm:size-11"
          />
          <div>
            <p className="text-sm font-medium text-foreground sm:text-base">
              {home.teamName}
            </p>
            <p className="text-xs text-muted">{home.owner}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 font-mono text-xl font-bold sm:text-2xl">
          <span className="text-foreground">{matchup.homeScore.toFixed(1)}</span>
          <span className="text-xs font-normal text-muted">–</span>
          <span className="text-foreground">{matchup.awayScore.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-start gap-3 sm:justify-end">
          <Image
            src={away.icon}
            alt={`${away.teamName} logo`}
            width={44}
            height={44}
            className="order-1 size-9 shrink-0 rounded-md border border-border bg-surface-raised object-cover sm:order-2 sm:size-11"
          />
          <div className="order-2 text-left sm:order-1 sm:text-right">
            <p className="text-sm font-medium text-foreground sm:text-base">
              {away.teamName}
            </p>
            <p className="text-xs text-muted">{away.owner}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <PressConferenceDropdown
            week={matchup.week}
            teamId={home.id}
            type="pre"
            coachName={home.coachName}
          />
          <PressConferenceDropdown
            week={matchup.week}
            teamId={home.id}
            type="post"
            coachName={home.coachName}
            locked={!matchup.completed}
          />
        </div>
        <div className="flex flex-col gap-2">
          <PressConferenceDropdown
            week={matchup.week}
            teamId={away.id}
            type="pre"
            coachName={away.coachName}
          />
          <PressConferenceDropdown
            week={matchup.week}
            teamId={away.id}
            type="post"
            coachName={away.coachName}
            locked={!matchup.completed}
          />
        </div>
      </div>
    </div>
  );
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
        Week {week}
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

export default function MatchupsPage() {
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  const weekMatchups = matchups.filter((m) => m.week === selectedWeek);
  const hasNextWeek = matchups.some((m) => m.week === selectedWeek + 1);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        Matchups
      </h1>
      <WeekSelector
        week={selectedWeek}
        canGoPrev={selectedWeek > 1}
        canGoNext={hasNextWeek}
        onPrev={() => setSelectedWeek((week) => week - 1)}
        onNext={() => setSelectedWeek((week) => week + 1)}
      />
      <div className="flex flex-col gap-3">
        {weekMatchups.length > 0 ? (
          weekMatchups.map((matchup, index) => (
            <MatchupCard key={index} matchup={matchup} />
          ))
        ) : (
          <p className="text-center text-sm text-muted">
            No matchups scheduled for this week.
          </p>
        )}
      </div>
    </div>
  );
}
