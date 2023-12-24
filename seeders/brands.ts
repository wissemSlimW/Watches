import { prisma } from "@/config/db"


export const brandsSeed = async () => {
    console.log('check brands')
    const names = ["ANNA", "DONATELLO", "SODLING", "MODERN", "AMUSEMENT", "PAUL SMITH", "MANGO", "COCO LEE", "CHANEL"]
    const brands = await prisma.brands.findMany()
    if (!brands.length) {
        console.log('started seeding brands')
        await prisma.brands.createMany({ data: names.map(n => ({ name: n })) })
        console.log('finished seeding brands')
    }

}