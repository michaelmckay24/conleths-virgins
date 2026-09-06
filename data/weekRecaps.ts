export type WeekRecap = {
    id: number
    title: string
    image: string
    week: number
    publishedAt: string
    published: boolean
}

export const weekRecaps: WeekRecap[] = [
    { id: 1, title: "Week 1 Recap", image: "/article-images/week1.webp", week: 1, publishedAt: "2026-09-6", published: true },
    { id: 2, title: "Week 2 Recap", image: "/article-images/week2.jpeg", week: 2, publishedAt: "2026-09-16", published: false },
]