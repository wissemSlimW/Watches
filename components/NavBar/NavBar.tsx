import { Cart, Person, Search } from '@/assets/svg'
import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

export const NavBar = () => {
    const links = ['NEW RELEASES', 'MENS', 'WOMENS ', 'JEWELRY', 'ACCESSORIES', 'BLOG ', 'DEMO ', 'BUY THEME']
    return (
        <div className='h-[70px] bg-white px-5 xl:px-28 flex '>
            <div className='flex py-6 cursor-pointer'><Image alt='logo' width={160} height={25} src={IMAGES.logo} /></div>
            <div className='flex-1 flex justify-center gap-8 py-6 text-xs font-medium'>{links.map((link, i) => <span className='px-5 hover:underline cursor-pointer' key={i}>{link}</span>)}</div>
            <div className='flex py-5 text-xs gap-5'>
                <span className='font-medium text-xs flex place-items-center gap-4 cursor-pointer'>ACCOUNT <Person /></span>
                <span className='font-medium text-xs flex place-items-center gap-4 cursor-pointer'>CART <Cart /></span>
                <span className='border-dotted border-l-1 border-black pl-8 flex place-items-center cursor-pointer'> <Search /></span>
            </div>

        </div>
    )
}
