"use client"

import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import InfiniteCarousel from 'react-leaf-carousel';

export const CollectionCarousel = ({ list }: { list: (Collection & { count: number })[] }) => {

    return (<InfiniteCarousel
        lazyLoad
        swipe={true}
        breakpoints={[
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ]}
        dots={true}

        scrollOnDevice={true}
    >
        {list.map((l, i) =>
            <div key={i} className='group p-3 flex flex-col place-items-center '>
                <div className="group-hover:before:flex before:hidden before:z-30 before:absolute before:opacity-40 before:bg-white before:inset-0 relative cursor-pointer">
                    <Image width={710} height={910} loading='lazy' alt='collection image' className=' w-full object-cover' src={IMAGES.collections[l.img]}></Image>
                </div>
                <h3 className='mt-6 mb-2 group-hover:underline cursor-pointer '>
                    <a className='font-medium text-xl'>
                        <span>{l.name}</span>
                    </a>
                </h3>
                <span className='text-xs leading-6 cursor-default'>{`${l.count} product${l.count > 1 ? "s" : ""}`}</span>
                <div className='group-hover:bg-black group-hover:text-white mt-4 cursor-pointer w-32 px-5 pt-3 pb-[10px]  text-black border-solid border-2 border-black bg-white'>Shop Now</div>
            </div>)}
    </InfiniteCarousel>)
}