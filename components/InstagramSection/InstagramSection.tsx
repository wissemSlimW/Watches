import { ImagesBlock } from './ImagesBlock'

const InstagramSection = () => {
    return (
        <div className='px-5 xl:px-28 flex flex-col gap-3 border-1 border-solid border-gray-400 py-10'>
            <h3 className='text-center text-2xl uppercase font-medium'><span>#LUXW ON INSTAGRAM</span></h3>
            <div className='text-center text-sm font-normal'><span>Pellentesque diam dolor an melementum et lobortis at mollis de comopolitanos</span></div>
            <ImagesBlock />
        </div>
    )
}

export default InstagramSection