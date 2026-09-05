export const teams = [
    { id: 1, owner: "Michael", teamName: "He Needs the Axe", icon: "/team-icons/michael.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 53 },
    { id: 2, owner: "Simon", teamName: "Cheeky Sneaks", icon: "/team-icons/simon.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 56 },
    { id: 3, owner: "Cam", teamName: "420 Kushblazers", icon: "/team-icons/cam.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 50 },
    { id: 4, owner: "Noah", teamName: "The Slammers", icon: "/team-icons/noah.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 51 },
    { id: 5, owner: "Pogie", teamName: "Pogo's Lads", icon: "/team-icons/pogie.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 47 },
    { id: 6, owner: "Dan", teamName: "7hrs of Redzone Football", icon: "/team-icons/dan.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 47 },
    { id: 7, owner: "Kev", teamName: "Hot Night Slugz", icon: "/team-icons/kev.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 44 },
    { id: 8, owner: "Stu", teamName: "Fitzmagic", icon: "/team-icons/stu.png", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, playoffOdds: 52 }
]

export function getTeamById(id: number) {
    const team = teams.find(t => t.id === id)
    if (!team) throw new Error(`No team with id ${id}`)
    return team
}

