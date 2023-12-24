import { prisma } from "@/config/db"


export const collectionsSeed = async () => {
    console.log('check collections')
    const names = ["Milancelos", "Blazero", "Cosmopolis", "Scarvero", "Luxury Watches"]
    const collections = await prisma.collections.findMany()
    if (!collections.length) {
        console.log('started seeding collections')
        await prisma.collections.createMany({ data: names.map((n, i) => ({ name: n, img: i })) })
        console.log('finished seeding collections')
    }
}