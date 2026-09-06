export type Matchup = {
    week: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
    completed: boolean
    recapFile?: string
}

export const matchups: Matchup[] = [
    { week: 1, homeTeamId: 1, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false, recapFile: "week1/matchup1.txt" },
    { week: 1, homeTeamId: 4, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week1/matchup2.txt" },
    { week: 1, homeTeamId: 5, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false, recapFile: "week1/matchup3.txt" },
    { week: 1, homeTeamId: 2, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week1/matchup4.txt" },

    { week: 2, homeTeamId: 3, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false, recapFile: "week2/matchup1.txt" },
    { week: 2, homeTeamId: 7, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false, recapFile: "week2/matchup2.txt" },
    { week: 2, homeTeamId: 4, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false, recapFile: "week2/matchup3.txt" },
    { week: 2, homeTeamId: 8, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week2/matchup4.txt" },

    { week: 3, homeTeamId: 2, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false, recapFile: "week3/matchup1.txt" },
    { week: 3, homeTeamId: 6, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false, recapFile: "week3/matchup2.txt" },
    { week: 3, homeTeamId: 8, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week3/matchup3.txt" },
    { week: 3, homeTeamId: 1, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false, recapFile: "week3/matchup4.txt" },

    { week: 4, homeTeamId: 2, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false, recapFile: "week4/matchup1.txt" },
    { week: 4, homeTeamId: 5, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week4/matchup2.txt" },
    { week: 4, homeTeamId: 4, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false, recapFile: "week4/matchup3.txt" },
    { week: 4, homeTeamId: 3, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week4/matchup4.txt" },

    { week: 5, homeTeamId: 8, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false, recapFile: "week5/matchup1.txt" },
    { week: 5, homeTeamId: 1, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week5/matchup2.txt" },
    { week: 5, homeTeamId: 7, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false, recapFile: "week5/matchup3.txt" },
    { week: 5, homeTeamId: 3, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false, recapFile: "week5/matchup4.txt" },

    { week: 6, homeTeamId: 6, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week6/matchup1.txt" },
    { week: 6, homeTeamId: 2, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false, recapFile: "week6/matchup2.txt" },
    { week: 6, homeTeamId: 8, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false, recapFile: "week6/matchup3.txt" },
    { week: 6, homeTeamId: 5, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false, recapFile: "week6/matchup4.txt" },

    { week: 7, homeTeamId: 1, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week7/matchup1.txt" },
    { week: 7, homeTeamId: 3, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false, recapFile: "week7/matchup2.txt" },
    { week: 7, homeTeamId: 4, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week7/matchup3.txt" },
    { week: 7, homeTeamId: 5, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false, recapFile: "week7/matchup4.txt" },

    { week: 8, homeTeamId: 1, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false, recapFile: "week8/matchup1.txt" },
    { week: 8, homeTeamId: 4, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week8/matchup2.txt" },
    { week: 8, homeTeamId: 5, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false, recapFile: "week8/matchup3.txt" },
    { week: 8, homeTeamId: 2, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week8/matchup4.txt" },

    { week: 9, homeTeamId: 3, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false, recapFile: "week9/matchup1.txt" },
    { week: 9, homeTeamId: 7, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false, recapFile: "week9/matchup2.txt" },
    { week: 9, homeTeamId: 4, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false, recapFile: "week9/matchup3.txt" },
    { week: 9, homeTeamId: 8, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week9/matchup4.txt" },

    { week: 10, homeTeamId: 2, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false, recapFile: "week10/matchup1.txt" },
    { week: 10, homeTeamId: 6, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false, recapFile: "week10/matchup2.txt" },
    { week: 10, homeTeamId: 8, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week10/matchup3.txt" },
    { week: 10, homeTeamId: 1, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false, recapFile: "week10/matchup4.txt" },

    { week: 11, homeTeamId: 2, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false, recapFile: "week11/matchup1.txt" },
    { week: 11, homeTeamId: 5, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week11/matchup2.txt" },
    { week: 11, homeTeamId: 4, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false, recapFile: "week11/matchup3.txt" },
    { week: 11, homeTeamId: 3, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week11/matchup4.txt" },

    { week: 12, homeTeamId: 8, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false, recapFile: "week12/matchup1.txt" },
    { week: 12, homeTeamId: 1, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week12/matchup2.txt" },
    { week: 12, homeTeamId: 7, awayTeamId: 5, homeScore: 0, awayScore: 0, completed: false, recapFile: "week12/matchup3.txt" },
    { week: 12, homeTeamId: 3, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false, recapFile: "week12/matchup4.txt" },

    { week: 13, homeTeamId: 6, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week13/matchup1.txt" },
    { week: 13, homeTeamId: 2, awayTeamId: 3, homeScore: 0, awayScore: 0, completed: false, recapFile: "week13/matchup2.txt" },
    { week: 13, homeTeamId: 8, awayTeamId: 1, homeScore: 0, awayScore: 0, completed: false, recapFile: "week13/matchup3.txt" },
    { week: 13, homeTeamId: 5, awayTeamId: 4, homeScore: 0, awayScore: 0, completed: false, recapFile: "week13/matchup4.txt" },

    { week: 14, homeTeamId: 1, awayTeamId: 7, homeScore: 0, awayScore: 0, completed: false, recapFile: "week14/matchup1.txt" },
    { week: 14, homeTeamId: 3, awayTeamId: 8, homeScore: 0, awayScore: 0, completed: false, recapFile: "week14/matchup2.txt" },
    { week: 14, homeTeamId: 4, awayTeamId: 6, homeScore: 0, awayScore: 0, completed: false, recapFile: "week14/matchup3.txt" },
    { week: 14, homeTeamId: 5, awayTeamId: 2, homeScore: 0, awayScore: 0, completed: false, recapFile: "week14/matchup4.txt" },
]