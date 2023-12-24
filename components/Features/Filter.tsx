'use client'
import React, { useState } from 'react'
import { ProductCarousel } from '../ProductCarousel/ProductCarousel'

export const Filter = ({ list, brands, collections }: { list: Watch[], brands: Brand[], collections: Collection[] }) => {
    const [filter, setFilter] = useState<1 | 2 | 3>(1)
    return (
        <>
            <div className='text-center text-2xl my-4 leading-8 font-medium'>
                <span className='uppercase'>
                    <span onClick={() => setFilter(1)} className={`px-2 ${filter === 1 ? 'underline' : ''}`}>EDITOR'S PICK</span> / &nbsp;
                    <span onClick={() => setFilter(2)} className={`px-2 ${filter === 2 ? 'underline' : ''}`}>FEATURED</span> / &nbsp;
                    <span onClick={() => setFilter(3)} className={`px-2 ${filter === 3 ? 'underline' : ''}`}>BEST SELLERS</span>
                </span>
            </div>
            <ProductCarousel {...{ brands, collections, list }} />
        </>
    )

}
