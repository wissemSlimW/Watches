"use client"
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';

function Carousel() {
    const list: { text: string, title: string, img: string }[] = [
        { img: IMAGES.customBlock[0], text: 'Nam tempus turpis at metus de deumantos', title: 'Metropolis' },
        { img: IMAGES.customBlock[1], text: 'Nam tempus turpis at metus de deumantos', title: 'Milancelos' },
        { img: IMAGES.customBlock[2], text: 'Nam tempus turpis at metus de deumantos', title: 'Cosmopolis' },
        { img: IMAGES.customBlock[0], text: 'Nam tempus turpis at metus de deumantos', title: 'Metropolis' },
    ]
    return (
        <InfiniteCarousel
            lazyLoad
            dots
            breakpoints={[
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 13500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },

            ]}
            slidesSpacing={20}
            arrows={false}
        >
            {list.map((item, i) => <div key={i} className=' group relative mb-10'>
                <div className='absolute z-10 inset-0 px-5 py-10 flex flex-col justify-end gap-3 '>
                    <span className='group-hover:underline text-3xl font-medium text-white'>{item.title}</span>
                    <span className='text-sm font-normal text-white'>{item.text}</span>
                </div>
                <Image alt={`customBlock-${i}`} width={570} height={370} src={item.img} />
            </div>)}
        </InfiniteCarousel>
    )
}

export default Carousel