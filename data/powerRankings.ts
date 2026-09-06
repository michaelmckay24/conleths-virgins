export type PowerRankings = {
    week: number
    teamId: number
    rank: number
}

export const powerRankings: PowerRankings[] = [
    { week: 0, teamId: 1, rank: 1 }, // michael
    { week: 0, teamId: 3, rank: 2 }, // cam
    { week: 0, teamId: 2, rank: 3 }, // simon
    { week: 0, teamId: 5, rank: 4 }, // pogie
    { week: 0, teamId: 4, rank: 5 }, // noah
    { week: 0, teamId: 6, rank: 6 }, // dan
    { week: 0, teamId: 7, rank: 7 }, // kev
    { week: 0, teamId: 8, rank: 8 }, // stu

    { week: 1, teamId: 3, rank: 1 }, // cam
    { week: 1, teamId: 1, rank: 2 }, // michael
    { week: 1, teamId: 2, rank: 3 }, // simon
    { week: 1, teamId: 4, rank: 4 }, // noah
    { week: 1, teamId: 5, rank: 5 }, // pogie
    { week: 1, teamId: 8, rank: 6 }, // stu
    { week: 1, teamId: 6, rank: 7 }, // dan
    { week: 1, teamId: 7, rank: 8 }, // kev
]

export function getPreviousRank(week: number, teamId: number): number | null {
    const prev = powerRankings.find(r => r.week === week - 1 && r.teamId === teamId)
    return prev ? prev.rank : null
}
