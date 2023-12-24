'use client'
import { useState } from "react"
import { ProductCarousel } from "../ProductCarousel/ProductCarousel"

export const Filter = ({ list, brands, collections }: { list: Watch[], brands: Brand[], collections: Collection[] }) => {
    const [filter, setFilter] = useState("Mens")
    const types = ['Mens', 'Womens', 'Luxury Watches', 'Jewelry', 'Accessories', 'Special Offers']
    return (
        <div className="flex flex-col gap-5">
            <div className=' flex justify-center gap-3'>
                {types.map((type, i) => <span onClick={() => { setFilter(type) }} key={i} className={`py-2 px-4 rounded-3xl border-solid cursor-pointer ${type === filter ? 'border-1' : ''} border-gray-800 `}>{type}</span>)}
            </div>
            <ProductCarousel {...{ brands, collections, list }} />

        </div>
    )
}
