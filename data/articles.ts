export type Article = {
    id: number
    title: string
    image: string
    bodyFile: string
    publishedAt: string
}

export const articles: Article[] = [
    {
        id: 1,
        title: "Draft Day",
        image: "/article-images/draft.jpeg",
        bodyFile: "draftDay.txt",
        publishedAt: "2026-09-04",
    },
    {
        id: 2,
        title: "A Day in the Life of Huel Thanos",
        image: "/article-images/margot.jpg",
        bodyFile: "lifeOfHT.txt",
        publishedAt: "2026-09-05",
    },
    // {
    //     id: 3,
    //     title: "Week 1 Preview",
    //     image: "/article-images/week1preview.jpeg",
    //     bodyFile: "week1preview.txt",
    //     publishedAt: "2026-09-07",
    // },
]