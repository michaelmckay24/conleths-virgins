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
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-raised text-xs tracking-wider text-muted uppercase">
              <th className="px-3 py-3 font-semibold whitespace-nowrap sm:px-4">Rank</th>
              <th className="px-3 py-3 font-semibold whitespace-nowrap sm:px-4">Team</th>
              <th className="px-3 py-3 font-semibold whitespace-nowrap sm:px-4">Owner</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">W-L</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">PF</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">PA</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">
                Playoff %
              </th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.id}
                className="border-b border-border last:border-0"
              >
                <td className="px-3 py-3 font-mono text-accent sm:px-4">
                  {index + 1}
                </td>
                <td className="px-3 py-3 font-medium text-foreground sm:px-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={team.icon}
                      alt={`${team.teamName} logo`}
                      width={44}
                      height={44}
                      className="size-9 shrink-0 rounded-md border border-border bg-surface-raised object-cover sm:size-11"
                    />
                    <span className="whitespace-nowrap">{team.teamName}</span>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-muted sm:px-4">
                  {team.owner}
                </td>
                <td className="px-3 py-3 text-right font-mono whitespace-nowrap sm:px-4">
                  {team.wins}-{team.losses}
                </td>
                <td className="px-3 py-3 text-right font-mono whitespace-nowrap text-muted sm:px-4">
                  {team.pointsFor.toFixed(1)}
                </td>
                <td className="px-3 py-3 text-right font-mono whitespace-nowrap text-muted sm:px-4">
                  {team.pointsAgainst.toFixed(1)}
                </td>
                <td className="px-3 py-3 text-right font-mono whitespace-nowrap text-muted sm:px-4">
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
