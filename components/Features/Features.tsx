import { prisma } from '@/config/db'
import { Filter } from './Filter'

const Features = async () => {
    const collections = await prisma.collections.findMany({})
    const brands = await prisma.brands.findMany()
    const watches = await prisma.watches.findMany({orderBy:{name:'asc'}})
    return (
        <div className='px-5 xl:px-28 flex flex-col'>
            <Filter {...{ brands, collections, list: watches }} />
        </div>
    )
}

export default Features