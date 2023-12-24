"use client"

import { Eye, Star } from '@/assets/svg';
import { IMAGES } from '@/constants/images';
import InfiniteCarousel from 'react-leaf-carousel';
import { FavoriteBtn } from './FavoriteBtn';
import Image from 'next/image';

export const ProductCarousel = ({ list, brands, collections }: { list: Watch[], brands: Brand[], collections: Collection[] }) => {

    return (<InfiniteCarousel
        lazyLoad
        swipe={true}
        breakpoints={[
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 16000,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
        ]}
        scrollOnDevice={true}
    >
        {list.map((watch, i) =>
            <div key={i} className=' p-3 flex flex-col place-items-center '>
                <div className="group cursor-pointer mb-3 relative">
                    <div className='flex absolute p-2 z-10 inset-0 flex-col justify-between'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-3'>
                                <span className='hidden group-hover:block'><FavoriteBtn /></span>
                                <span className='hidden group-hover:block'><Eye /></span>
                            </div>
                            <div className='flex flex-col place-items-end'>
                                {watch.isNew && <span className='text-xs px-2 py-1 mb-1 text-white bg-blue-800'>New</span>}
                                {watch.onSale && <span className='text-xs px-2 py-1 mb-1 text-white bg-red-800'>Sale</span>}
                                {watch.onlineOnly && <span className='text-xs px-2 py-1 mb-1 text-white bg-gray-900'>Online Only</span>}
                                {!watch.inStock && <span className='text-xs px-2 py-1 mb-1 text-white bg-gray-400'>Sold Out</span>}
                            </div>
                        </div>
                        <div className=' opacity-0  group-hover:opacity-100 transition ease-in-out delay-200 w-full  mt-4 cursor-pointer px-5 pt-3 pb-[10px] uppercase  text-white text-center bg-black'>{watch.inStock ? 'add to cart' : 'unavailable'}</div>
                    </div>
                    <Image alt='image' width={710} height={910} loading='lazy' className='z-0 w-full object-cover' src={IMAGES.watches[watch.img]}></Image>
                    <Image alt='image' width={710} height={910} loading='lazy' className='absolute inset-0 group-hover:opacity-100 transition ease-in-out delay-200 z-0 opacity-0 w-full object-cover' src={IMAGES.watches[Math.floor(Math.random() * IMAGES.watches.length)]}></Image>
                </div>
                <a>
                    <span className='text-xs leading-6 cursor-pointer '>{brands.find(b => b.id === watch.brandId)?.name || ""}</span>
                </a>
                <a className='text-center mb-1'><span className='font-medium text-sm leading-6 hover:underline '>{watch.name}</span></a>
                <span className='flex mb-2'>{Array(5).fill('').map((_, i) => <Star width={17} height={17} color={i < watch.stars ? '#e66b00' : '#e3e3e3'} key={i} />)}</span>
                <span className='mb-4'>
                    <span className='text-xs text-gray-400 mr-1 line-through'>{watch.oldPrice ? `$${watch.oldPrice}` : ""}</span>
                    <span className='text-xs text-gray-400 mr-1'> from </span>
                    <span className={`${watch.oldPrice ? "text-red-500" : ""}`}>{`$${watch.price}`}</span>
                </span>
            </div>)}
    </InfiniteCarousel>)
}