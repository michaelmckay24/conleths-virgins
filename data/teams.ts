export const teams = [
    { id: 1, owner: "Michael", teamName: "He Needs the Axe", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 2, owner: "Simon", teamName: "Cheeky Sneaks", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 3, owner: "Cam", teamName: "420 Kushblazers", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 4, owner: "Noah", teamName: "The Slammers", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 5, owner: "Pogie", teamName: "Pogo's Lads", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 6, owner: "Dan", teamName: "7hrs of Redzone Football", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 7, owner: "Kev", teamName: "Hot Night Slugz", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
    { id: 8, owner: "Stu", teamName: "Fitzmagic", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 }
]

export function getTeamById(id: number) {
    const team = teams.find(t => t.id === id)
    if (!team) throw new Error(`No team with id ${id}`)
    return team
}

