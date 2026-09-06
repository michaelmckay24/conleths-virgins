export type Matchup = {
    week: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
    completed: boolean
}

export const matchups: Matchup[] = [
    { week: 1, homeTeamId: 1, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false },
    { week: 1, homeTeamId: 4, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 1, homeTeamId: 5, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false },
    { week: 1, homeTeamId: 2, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },

    { week: 2, homeTeamId: 3, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false },
    { week: 2, homeTeamId: 7, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false },
    { week: 2, homeTeamId: 4, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false },
    { week: 2, homeTeamId: 8, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },

    { week: 3, homeTeamId: 2, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false },
    { week: 3, homeTeamId: 6, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false },
    { week: 3, homeTeamId: 8, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 3, homeTeamId: 1, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false },

    { week: 4, homeTeamId: 2, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false },
    { week: 4, homeTeamId: 5, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },
    { week: 4, homeTeamId: 4, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false },
    { week: 4, homeTeamId: 3, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },

    { week: 5, homeTeamId: 8, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false },
    { week: 5, homeTeamId: 1, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },
    { week: 5, homeTeamId: 7, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false },
    { week: 5, homeTeamId: 3, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false },

    { week: 6, homeTeamId: 6, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 6, homeTeamId: 2, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false },
    { week: 6, homeTeamId: 8, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false },
    { week: 6, homeTeamId: 5, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false },

    { week: 7, homeTeamId: 1, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 7, homeTeamId: 3, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false },
    { week: 7, homeTeamId: 4, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },
    { week: 7, homeTeamId: 5, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false },

    { week: 8, homeTeamId: 1, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false },
    { week: 8, homeTeamId: 4, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 8, homeTeamId: 5, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false },
    { week: 8, homeTeamId: 2, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },

    { week: 9, homeTeamId: 3, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false },
    { week: 9, homeTeamId: 7, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false },
    { week: 9, homeTeamId: 4, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false },
    { week: 9, homeTeamId: 8, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },

    { week: 10, homeTeamId: 2, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false },
    { week: 10, homeTeamId: 6, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false },
    { week: 10, homeTeamId: 8, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 10, homeTeamId: 1, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false },

    { week: 11, homeTeamId: 2, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false },
    { week: 11, homeTeamId: 5, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },
    { week: 11, homeTeamId: 4, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false },
    { week: 11, homeTeamId: 3, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },

    { week: 12, homeTeamId: 8, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false },
    { week: 12, homeTeamId: 1, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },
    { week: 12, homeTeamId: 7, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false },
    { week: 12, homeTeamId: 3, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false },

    { week: 13, homeTeamId: 6, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 13, homeTeamId: 2, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false },
    { week: 13, homeTeamId: 8, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false },
    { week: 13, homeTeamId: 5, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false },

    { week: 14, homeTeamId: 1, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false },
    { week: 14, homeTeamId: 3, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false },
    { week: 14, homeTeamId: 4, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false },
    { week: 14, homeTeamId: 5, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false },
]