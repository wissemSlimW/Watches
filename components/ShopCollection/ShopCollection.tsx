import { prisma } from "@/config/db"
import { CollectionCarousel } from "./CollectionCarousel"

const ShopCollection = async () => {
    const collections = await prisma.collections.findMany()
    const watches = await prisma.watches.findMany()
    const _collections = collections.map(c => ({ ...c, count: watches.filter(w => w.collectionId === c.id).length }))
    return (
        <div className="lg:flex px-5 xl:px-28 pt-10 mb-15 ">
            <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col">
                <h3 className="uppercase text-2xl font-medium mb-3 text-center lg:text-start"><span>SHOP THE COLLECTIONS</span></h3>
                <p className="text-xs text-silver leading-6 mb-3 text-center lg:text-start">Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin delos felis. Pellentesque diam dolor an elementum et lobortis at mollis ut risus. Curabitur semper sagittis mi condimentum...</p>
                <span className="mx-auto lg:mx-0 underline uppercase font-medium "><a >DISCOVER</a></span>
            </div>
            <div className="w-full lg:w-2/3 xl:w3/4">
                <CollectionCarousel list={_collections} />
            </div>
        </div>)
}
export default ShopCollection