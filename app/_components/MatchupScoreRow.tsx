import Image from "next/image";
import type { Matchup } from "@/data/matchups";
import { getTeamById } from "@/data/teams";

export function MatchupScoreRow({ matchup }: { matchup: Matchup }) {
  const home = getTeamById(matchup.homeTeamId);
  const away = getTeamById(matchup.awayTeamId);

  return (
    <div className="grid grid-cols-2 items-center gap-x-2 gap-y-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
      <div className="order-1 flex min-w-0 items-center gap-1.5 sm:order-none sm:gap-3">
        <Image
          src={home.icon}
          alt={`${home.teamName} logo`}
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-md border border-border bg-surface-raised object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-base font-medium text-foreground">
            {home.teamName}
          </p>
          <p className="truncate text-xs text-muted">{home.owner}</p>
        </div>
      </div>
      <div className="order-3 col-span-2 flex items-center justify-center gap-2 font-mono text-xl font-bold sm:order-none sm:col-span-1 sm:text-2xl">
        <span className="text-foreground">{matchup.homeScore.toFixed(2)}</span>
        <span className="text-xs font-normal text-muted">–</span>
        <span className="text-foreground">{matchup.awayScore.toFixed(2)}</span>
      </div>
      <div className="order-2 flex min-w-0 items-center justify-end gap-1.5 sm:order-none sm:gap-3">
        <div className="min-w-0 text-right">
          <p className="truncate text-base font-medium text-foreground">
            {away.teamName}
          </p>
          <p className="truncate text-xs text-muted">{away.owner}</p>
        </div>
        <Image
          src={away.icon}
          alt={`${away.teamName} logo`}
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-md border border-border bg-surface-raised object-cover"
        />
      </div>
    </div>
  );
}
