export type Article = {
    id: number
    title: string
    image: string
    body: string
    publishedAt: string
}

export const articles: Article[] = [
    {
        id: 1,
        title: "Draft Day",
        image: "/article-images/draft.jpeg",
        body: "On Sunday the 30th of August, the coaches around the league schemed and stressed as they selected the players who would represent their franchise for the upcoming 2026 Conleths Virgins season.\n" +
            "\n" +
            "As always, finding a draft time that worked for everyone was a challenge. One manager was five hours behind the rest of the league in the land of the free. Another was multitasking dinner and drinks prep near The Emirates. Two were fighting through airport queues praying for flight delays, and three sat upstairs in The 51, hoping to take some inspiration from the Bruno Fernandes masterclass playing on the TV. And one manager drafted from wherever Stu was.\n" +
            "\n" +
            "Challenges aside, everyone was present from round 1 to round 16, and the teams around the league are set for kickoff next week!",
        publishedAt: "2026-09-05",
    },
    {
        id: 2,
        title: "A Day in the Life of Huel Thanos",
        image: "/article-images/margot.jpg",
        body: "When Huel is not grinding in the media room, he’s at home with his wife Margot Robbie and their kids.\n" +
            "\n" +
            "The average day for Huel starts by getting the kids ready for school - his eldest Bruno F is attending Harvard at 6 years old. After parenting duties are done he heads straight to the gym. Huel boasts an impressive 250kg incline bench press on the smith machine and he often neglects calves.\n" +
            "\n" +
            "Once the pump is achieved, the working day begins. He spends most of his time writing articles and meeting up with players and coaches around the league. \n" +
            "\n" +
            "He often spends his free time volunteering at animal shelters and recently picked up a medal of honour from Leo Cullen after saving a bus filled with the entire Leinster rugby team from falling into the Dodder.\n" +
            "\n" +
            "There are talks around of a three part movie franchise of his life coming out soon. Stay tuned.",
        publishedAt: "2026-09-06",
    },
]