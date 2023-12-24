'use client'
import { IMAGES } from "@/constants/images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import { ArrowCircleRight, ArrowCircleLeft } from "@/assets/svg";
import { ReactNode } from "react";
import './style.css'
import Image from "next/image";
const positions = {
    center: 'top-[40%] left=[calc(50%-212.5px))]',
    left: 'top-[40%] left-[20%]'
}
export const CarouselTransition = () => {
    const data: { title: string, position: 'center' | 'left', text: string, component: ReactNode, image: string }[] = [
        {
            image: IMAGES.mainSlide[0],
            position: "left",
            text: "Quisquemos sodales suscipit tortor ditaemcos milancelos condimentum de cosmo lacus meleifend blanditos.",
            title: "Cosmopolis",
            component: <div className="cursor-pointer text-white border-solid border-2 border-black bg-black md:bg-transparent md:border-white w-72 py-2 uppercase hover:bg-black hover:border-black">
                Shop This Collection
            </div>
        },
        {
            image: IMAGES.mainSlide[1],
            position: "left",
            text: "Quisquemos sodales suscipit tortor ditaemcos milancelos condimentum de cosmo lacus meleifend blanditos.",
            title: "Milancelos",
            component: <div className="cursor-pointer  text-white border-solid border-2 border-black bg-black md:bg-transparent md:border-white w-72 py-2 uppercase hover:bg-black hover:border-black">
                Shop This Collection
            </div>
        },
        {
            image: IMAGES.mainSlide[2],
            position: "left",
            text: "",
            title: "Special Offers",
            component: <></>
        },
    ]

    return (
        <Carousel className={'fixSelected fixDots'}
            renderArrowNext={(onClick: () => void, hasNext: boolean, label: string) =>
                hasNext && <span onClick={onClick} title={label} className="hidden md:flex right-8  place-content-center place-items-center rounded-full border-solid border-2 !absolute z-10 border-[#a9a7a9] w-20 h-20 cursor-pointer top-[calc(50%-40px)]">
                    <ArrowCircleRight />
                </span >
            }
            renderArrowPrev={(onClick: () => void, hasprev: boolean, label: string) =>
                hasprev && <span onClick={onClick} title={label} className="hidden md:flex left-8  place-content-center place-items-center rounded-full border-solid border-2 !absolute z-10 border-[#a9a7a9] w-20 h-20 cursor-pointer top-[calc(50%-40px)]">
                    <ArrowCircleLeft />
                </span>
            }
            interval={5000}
            showIndicators
            showStatus={false}
            infiniteLoop
            swipeable={false} animationHandler='fade'
            showThumbs={false}
        >
            {
                data.map((item, key) => <div key={key} className="relative">
                    <Image
                    width={1890} height={770}
                        src={item.image}
                        alt={`image ${key}`}
                        className=" h-full w-full object-cover"
                    />
                    <div className="md:hidden absolute z-10 inset-x-0 top-1/4 flex  place-content-center">
                        <h2 className="text-white text-4xl mb-4 ">
                            <span>{item.title}</span>
                        </h2>
                    </div>
                    <div className={`flex md:absolute z-10 flex-col place-items-center ${positions[item.position]} pb-13  md:pb-0`}>
                        <h2 className="hidden md:flex md:text-white text-4xl mb-4 ">
                            <span>{item.title}</span>
                        </h2>
                        <p >
                            <span className="md:text-white max-w-[425px] text-sm flex leading-7 mb-7">{item.text}</span>
                        </p>
                        <div >
                            {item.component}
                        </div>
                    </div>
                </div>)
            }
        </Carousel >
    );
}