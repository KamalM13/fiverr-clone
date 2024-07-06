
import CustomCarousel from "@/components/heropage/CustomCarousel"
import Featured from "@/components/heropage/Featured"

import HeroMarketing from "@/components/heropage/Hero-marketing"
import Trustedby from "@/components/heropage/Trustedby"



export const Home = () => {
  return (
    <div>
      <Featured />
      <Trustedby />
      <div className="text-3xl py-3 pt-5 flex justify-center text-[#404145] font-bold ">
        Popular Services
      </div>
      <CustomCarousel />
      <HeroMarketing />
    </div>
  )
}
