import React from 'react'
import Carousel from './Carousel'

const CustomBlock = () => {
    return (
        <div className='flex flex-col gap-5 px-5 xl:px-28 mb-10'>
            <div className='uppercase text-center'>
                <span>CUSTOM BLOCK</span>
            </div>
            <div className='text-xs text-center'>
                <span>Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudino.</span>
            </div>
            <Carousel />
        </div>
    )
}

export default CustomBlock