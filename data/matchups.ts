export type Matchup = {
    week: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
}

export const matchups: Matchup[] = [
    { week: 1, homeTeamId: 1, awayTeamId: 3, homeScore: 0, awayScore: 0 },
    { week: 1, homeTeamId: 4, awayTeamId: 7, homeScore: 0, awayScore: 0 },
    { week: 1, homeTeamId: 5, awayTeamId: 8, homeScore: 0, awayScore: 0 },
    { week: 1, homeTeamId: 3, awayTeamId: 6, homeScore: 0, awayScore: 0 },
]