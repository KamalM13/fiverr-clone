import Featured from "@/components/Featured"
import { HeroCarousel } from "@/components/Hero-carousel"
import HeroMarketing from "@/components/Hero-marketing"
import Trustedby from "@/components/Trustedby"



export const Home = () => {
  return (
    <div>
      <Featured />
      <Trustedby />
      <div className="text-3xl py-3 pt-5 flex justify-center text-[#404145] font-bold ">
        Popular Services
      </div>
      <HeroCarousel />
      <HeroMarketing />
    </div>
  )
}
