import Image from "next/image";
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
              <th className="px-4 py-3 text-right font-semibold">Playoff %</th>
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
                  <div className="flex items-center gap-3">
                    <Image
                      src={team.icon}
                      alt={`${team.teamName} logo`}
                      width={44}
                      height={44}
                      className="size-11 rounded-md border border-border bg-surface-raised object-cover"
                    />
                    {team.teamName}
                  </div>
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
                <td className="px-4 py-3 text-right font-mono text-muted">
                  {team.playoffOdds}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
