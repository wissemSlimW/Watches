import NewReleases from '@/components/NewReleases/NewReleases'
import ShopCollection from '@/components/ShopCollection/ShopCollection'
import CopyrightsFooter from '../components/CopyrightsFooter/CopyrightsFooter'
import Header from '../components/Header/Header'
import InfoFooter from '../components/InfoFooter/InfoFooter'
import { CarouselTransition } from '../components/MainCarousel/MainCarousel'
import InstagramSection from '@/components/InstagramSection/InstagramSection'
import Features from '@/components/Features/Features'
import Shipping from '@/components/Shipping/Shipping'
import CustomBlock from '@/components/CustomBlock/CustomBlock'
import { NavBar } from '@/components/NavBar/NavBar'

const Home = async () => {

  return (
    <main className=" h-screen  max-h-screen overflow-hidden  bg-white ">
      <div className='h-full overflow-auto'>
        <div className=' w-full'>
          <Header />
        </div>
        <header className='sticky top-0 z-50'>
          <NavBar />
        </header>
        <CarouselTransition />
        <ShopCollection />
        <NewReleases />
        <Features />
        <CustomBlock />
        <InstagramSection />
        <Shipping />
        <footer className='w-full'>
          <InfoFooter />
          <CopyrightsFooter />
        </footer>
      </div>

    </main >
  )
}
export default Home