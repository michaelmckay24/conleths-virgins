import Image from "next/image";
import { teams } from "@/data/teams";
import { getTeamRecord, type TeamRecord } from "@/data/matchups";

function computeRecords(): Record<number, TeamRecord> {
  const records: Record<number, TeamRecord> = {};
  for (const team of teams) {
    records[team.id] = getTeamRecord(team.id);
  }
  return records;
}

export default function StandingsPage() {
  const records = computeRecords();
  const standings = [...teams].sort(
    (a, b) =>
      records[b.id].wins - records[a.id].wins ||
      records[a.id].losses - records[b.id].losses ||
      records[b.id].pointsFor - records[a.id].pointsFor
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
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">W-L</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">PF</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">PA</th>
              <th className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">
                Playoff %
              </th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => {
              const record = records[team.id];
              return (
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
                  <td className="px-3 py-3 text-right font-mono whitespace-nowrap sm:px-4">
                    {record.wins}-{record.losses}
                  </td>
                  <td className="px-3 py-3 text-right font-mono whitespace-nowrap text-muted sm:px-4">
                    {record.pointsFor.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right font-mono whitespace-nowrap text-muted sm:px-4">
                    {record.pointsAgainst.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right font-mono whitespace-nowrap text-muted sm:px-4">
                    {team.playoffOdds}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
