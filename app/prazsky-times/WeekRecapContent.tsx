import fs from "node:fs";
import path from "node:path";
import { matchups } from "@/data/matchups";
import { MatchupScoreRow } from "@/app/_components/MatchupScoreRow";

const RECAPS_DIR = path.join(process.cwd(), "content", "recaps");

function readRecapParagraphs(recapFile: string | undefined): string[] | null {
  if (!recapFile) return null;

  try {
    const contents = fs.readFileSync(path.join(RECAPS_DIR, recapFile), "utf-8");
    const trimmed = contents.trim();
    return trimmed ? trimmed.split("\n\n") : null;
  } catch {
    return null;
  }
}

export function WeekRecapContent({ week }: { week: number }) {
  const weekMatchups = matchups.filter((m) => m.week === week);

  return (
    <div className="flex flex-col gap-6">
      {weekMatchups.map((matchup, index) => {
        const paragraphs = readRecapParagraphs(matchup.recapFile);

        return (
          <div key={index} className="flex flex-col gap-3">
            <div className="rounded-lg border border-border bg-surface p-4">
              <MatchupScoreRow matchup={matchup} />
            </div>
            <div className="flex flex-col gap-3">
              {paragraphs ? (
                paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="whitespace-pre-line text-sm text-muted"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-sm text-muted">Recap coming soon</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
