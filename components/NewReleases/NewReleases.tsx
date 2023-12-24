import { prisma } from "@/config/db"
import { Filter } from "./Filter"

const NewReleases = async () => {
    const collections = await prisma.collections.findMany({})
    const brands = await prisma.brands.findMany()
    const watches = await prisma.watches.findMany()
    return (
        <div className='px-5 xl:px-28 flex flex-col'>
            <div className="mb-3 mt-4 text-center"><h3 className="uppercase text-2xl"><span>NEW RELEASES</span></h3></div>
            <Filter  {...{ brands, collections, list: watches }} />
            
        </div>
    )
}
export default NewReleases