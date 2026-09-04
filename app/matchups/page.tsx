import { matchups, type Matchup } from "@/data/matchups";
import { getTeamById } from "@/data/teams";

function MatchupCard({ matchup }: { matchup: Matchup }) {
  const home = getTeamById(matchup.homeTeamId);
  const away = getTeamById(matchup.awayTeamId);

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div>
          <p className="font-medium text-foreground">{home.teamName}</p>
          <p className="text-xs text-muted">{home.owner}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-2xl font-bold">
          <span className="text-foreground">{matchup.homeScore.toFixed(1)}</span>
          <span className="text-xs font-normal text-muted">–</span>
          <span className="text-foreground">{matchup.awayScore.toFixed(1)}</span>
        </div>
        <div className="text-right">
          <p className="font-medium text-foreground">{away.teamName}</p>
          <p className="text-xs text-muted">{away.owner}</p>
        </div>
      </div>
    </div>
  );
}

export default function MatchupsPage() {
  const weeks = Array.from(new Set(matchups.map((m) => m.week))).sort(
    (a, b) => a - b
  );
  const showWeekHeadings = weeks.length > 1;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        Matchups
      </h1>
      <div className="flex flex-col gap-8">
        {weeks.map((week) => {
          const weekMatchups = matchups.filter((m) => m.week === week);
          return (
            <section key={week}>
              {showWeekHeadings && (
                <h2 className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
                  Week {week}
                </h2>
              )}
              <div className="flex flex-col gap-3">
                {weekMatchups.map((matchup, index) => (
                  <MatchupCard key={index} matchup={matchup} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
