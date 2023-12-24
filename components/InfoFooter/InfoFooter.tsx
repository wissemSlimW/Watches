import { LINKS } from "@/constants/constants"
import { IMAGES } from "@/constants/images"
import Image from "next/image"
import { links } from "./constants"
import { EmailInput } from "./EmailInput"

const InfoFooter = () => {


    return (
        <div className="pt-14 pb-6">
            <div className="px-5 xl:px-28">
                <div className="grid lg:flex">
                    <div className=" lg:flex-1 col-span-12 md:col-span-6  text-xs px-4">
                        <h3 className="mb-5">
                            <a href={LINKS.logo}><Image alt='' height={25} width={160} src={IMAGES.logo}></Image></a>
                        </h3>
                        <div>
                            <p className="leading-6 font-normal text-silver">
                                <span>685 Market Street, San Francisco,
                                    <br />
                                    CA 94105, United States</span>
                            </p>
                            <p className="leading-6 font-normal text-silver"><span>+0123 456 7890</span></p>
                            <p className="leading-6 font-normal text-silver"><span>email@domain.com</span></p>
                            <p className="leading-6 font-normal text-silver"><span>M-T 8:30-2:00 pm</span></p>
                            <p className="leading-6 font-normal text-silver"><span>F-S 9:00-1:00 pm GMT+7</span></p>
                        </div>
                    </div>
                    <div className=" lg:flex-2 col-span-12 md:col-span-6  grid grid-cols-3 px-4  ">
                        {links.map((block, key) => <div key={key} className="mb-10">
                            <h3 className="text-sm font-medium mt-3 mb-4">{block.header}</h3>
                            <ul>
                                {block.paths.map((path, key) => <li key={key} className="leading-6 text-xs text-silver">
                                    <a className='hover:underline' href={path.link}>{path.name}</a>
                                </li>)}
                            </ul>
                        </div>)}
                    </div>
                    <div className=" lg:flex-1 col-span-12  px-4">
                        <h3 className="text-sm font-medium mt-3 mb-4">SIGN UP FOR NEWSLETTER</h3>
                        <div className="mb-8">
                            <span className='leading-7 text-xs '>
                                Receive our latest updates about our products and promotions.
                            </span>
                        </div>
                        <EmailInput />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoFooter