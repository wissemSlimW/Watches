import { LINKS } from "@/constants/constants"
import { IMAGES } from "@/constants/images"
import Image from "next/image"

const CopyrightsFooter = () => {
    return (
        <div className="md:flex justify-between md:flex-row px-5 xl:px-28 py-5 border-t-[1px] border-solid border-silver">
            <div className="">
                <span>
                    <p className="text-xs leading-7 text-silver">
                        © 2019 LUXWatches Demo. All rights reserved. Powered by Shopify.
                        <br />
                        <a
                            href={LINKS.shopifyTemplates}
                        >Shopify Themes</a> by <a
                            href={LINKS.halothemes}
                        >HaloThemes.com</a>
                    </p>
                </span>
            </div>
            <ul className=" flex flex-wrap   mt-5">
                {IMAGES.cards.map((card, key) => <li key={key} className=" mb-3 mr-3">
                    <Image alt='' width={38} height={24} src={card}></Image>
                </li>)}
            </ul>
        </div>
    )
}

export default CopyrightsFooter