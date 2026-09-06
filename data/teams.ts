export type Team = {
    id: number
    owner: string
    coachName: string
    teamName: string
    icon: string
    playoffOdds: number
}

export const teams: Team[] = [
    { id: 1, owner: "Michael", coachName: "HC McKay", teamName: "He Needs the Axe", icon: "/team-icons/michael.png", playoffOdds: 53 },
    { id: 2, owner: "Simon", coachName: "HC Ghose", teamName: "Cheeky Sneaks", icon: "/team-icons/simon.png", playoffOdds: 56 },
    { id: 3, owner: "Cam", coachName: "HC Ross", teamName: "The Kushblazers", icon: "/team-icons/cam.png", playoffOdds: 50 },
    { id: 4, owner: "Noah", coachName: "HC Brabazon", teamName: "The Slammers", icon: "/team-icons/noah.png", playoffOdds: 51 },
    { id: 5, owner: "Pogie", coachName: "HC Pogie", teamName: "Pogo's Lads", icon: "/team-icons/pogie.png", playoffOdds: 47 },
    { id: 6, owner: "Dan", coachName: "HC Kenny", teamName: "7hrs of Redzone", icon: "/team-icons/dan.png", playoffOdds: 47 },
    { id: 7, owner: "Kev", coachName: "HC Dolan", teamName: "Hot Night Slugz", icon: "/team-icons/kev.png", playoffOdds: 44 },
    { id: 8, owner: "Stu", coachName: "HC Fitzpatrick", teamName: "Fitzmagic", icon: "/team-icons/stu.png", playoffOdds: 52 }
]

export function getTeamById(id: number): Team {
    const team = teams.find(t => t.id === id)
    if (!team) throw new Error(`No team with id ${id}`)
    return team
}
