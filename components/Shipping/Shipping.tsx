'use client'
import { Certificate, Plane, Refresh, Shield } from '@/assets/svg';
import { ReactElement } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

const Shipping = () => {
    const list: { text: string, icon: ReactElement }[] = [
        { text: 'Free Shipping Worldwide', icon: <Plane /> },
        { text: 'Free In-store Returns', icon: <Refresh /> },
        { text: 'Genuine Product Guarantee', icon: <Certificate /> },
        { text: 'Secure Shopping Guarantee', icon: <Shield /> }
    ]
    return (
        <InfiniteCarousel
            lazyLoad
            swipe
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
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 16000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },

            ]}
            slidesSpacing={0}
            arrows={false}
        >
            {list.map((item, i) => <div key={i} className='bg-black border-x-[0.5px] border-solid border-white text-white font-medium flex py-5  '>
                <span className='mx-auto flex gap-6'>
                    {item.icon}
                    <span>{item.text}</span>
                </span>
            </div>)}
        </InfiniteCarousel>
    )
}

export default Shipping