'use client'
import { Add } from '@/assets/svg'
import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import React, { useState } from 'react'

export const ImagesBlock = () => {
    const [count, setCount] = useState(4)
    return (
        <div className='flex flex-col' >
            <div className='flex  flex-wrap' >
                {Array(count).fill('').map((_, i) => <div className='group relative p-2 w-1/2 md:w-1/3 xl:w-1/4' key={i}>
                    <span className='absolute z-10 bg-white opacity-10 ease-in inset-y-0 left-0 group-hover:w-full w-0 transition-all duration-300 '></span>
                    <Image width={640} height={640} alt={`instagram-${i}`} src={IMAGES.instagram[i]} />
                </div>)}
            </div>
            <div className=' mt-5 flex justify-center'>
                <span ><Add onClick={() => setCount(prev => prev < 16 ? prev + 4 : prev)} /></span>
            </div>
        </div>

    )
}
