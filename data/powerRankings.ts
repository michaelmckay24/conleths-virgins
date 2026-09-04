export type PowerRankings = {
    week: number
    teamId: number
    rank: number
    previousRank: number | null  // null for week 1, since there's no "previous"
}

export const powerRankings: PowerRankings[] = [
    { week: 1, teamId: 1, rank: 1, previousRank: null },
    { week: 1, teamId: 3, rank: 2, previousRank: null },
    { week: 1, teamId: 2, rank: 3, previousRank: null },
    { week: 1, teamId: 5, rank: 4, previousRank: null },
    { week: 1, teamId: 4, rank: 5, previousRank: null },
    { week: 1, teamId: 6, rank: 6, previousRank: null },
    { week: 1, teamId: 7, rank: 7, previousRank: null },
    { week: 1, teamId: 8, rank: 8, previousRank: null }
]