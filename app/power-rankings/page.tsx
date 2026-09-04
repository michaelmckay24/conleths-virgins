import { powerRankings } from "@/data/powerRankings";
import { getTeamById } from "@/data/teams";

function MovementIndicator({
  rank,
  previousRank,
}: {
  rank: number;
  previousRank: number | null;
}) {
  if (previousRank === null) {
    return (
      <span className="font-mono text-xs font-semibold text-accent">NEW</span>
    );
  }
  if (rank < previousRank) {
    return (
      <span className="font-mono text-xs font-semibold text-win">
        ↑ {previousRank - rank}
      </span>
    );
  }
  if (rank > previousRank) {
    return (
      <span className="font-mono text-xs font-semibold text-loss">
        ↓ {rank - previousRank}
      </span>
    );
  }
  return <span className="font-mono text-xs text-muted">—</span>;
}

export default function PowerRankingsPage() {
  const latestWeek = Math.max(...powerRankings.map((r) => r.week));
  const ranked = powerRankings
    .filter((r) => r.week === latestWeek)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold tracking-tight text-foreground">
        Power Rankings
      </h1>
      <p className="mb-6 text-xs font-semibold tracking-widest text-muted uppercase">
        Week {latestWeek}
      </p>
      <div className="flex flex-col gap-2">
        {ranked.map((entry) => {
          const team = getTeamById(entry.teamId);
          return (
            <div
              key={entry.teamId}
              className="flex items-center gap-4 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <span className="w-6 font-mono text-lg font-bold text-accent">
                {entry.rank}
              </span>
              <div className="flex-1">
                <p className="font-medium text-foreground">{team.teamName}</p>
                <p className="text-xs text-muted">{team.owner}</p>
              </div>
              <MovementIndicator
                rank={entry.rank}
                previousRank={entry.previousRank}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
