import Image from "next/image";
import type { Matchup } from "@/data/matchups";
import { getTeamById } from "@/data/teams";

export function MatchupScoreRow({ matchup }: { matchup: Matchup }) {
  const home = getTeamById(matchup.homeTeamId);
  const away = getTeamById(matchup.awayTeamId);

  return (
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
        <span className="text-foreground">{matchup.homeScore.toFixed(2)}</span>
        <span className="text-xs font-normal text-muted">–</span>
        <span className="text-foreground">{matchup.awayScore.toFixed(2)}</span>
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
  );
}
