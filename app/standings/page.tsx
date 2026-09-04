import { teams } from "@/data/teams";

export default function StandingsPage() {
  const standings = [...teams].sort(
    (a, b) => b.wins - a.wins || b.pointsFor - a.pointsFor
  );

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        Standings
      </h1>
      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-raised text-xs tracking-wider text-muted uppercase">
              <th className="px-4 py-3 font-semibold">Rank</th>
              <th className="px-4 py-3 font-semibold">Team</th>
              <th className="px-4 py-3 font-semibold">Owner</th>
              <th className="px-4 py-3 text-right font-semibold">W-L</th>
              <th className="px-4 py-3 text-right font-semibold">PF</th>
              <th className="px-4 py-3 text-right font-semibold">PA</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.id}
                className="border-b border-border last:border-0"
              >
                <td className="px-4 py-3 font-mono text-accent">
                  {index + 1}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">
                  {team.teamName}
                </td>
                <td className="px-4 py-3 text-muted">{team.owner}</td>
                <td className="px-4 py-3 text-right font-mono">
                  {team.wins}-{team.losses}
                </td>
                <td className="px-4 py-3 text-right font-mono text-muted">
                  {team.pointsFor.toFixed(1)}
                </td>
                <td className="px-4 py-3 text-right font-mono text-muted">
                  {team.pointsAgainst.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
