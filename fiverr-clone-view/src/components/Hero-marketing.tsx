import { CheckCircle } from "lucide-react"

const HeroMarketing = () => {
    return (
        <div className=" md:flex md:flex-row flex-col p-3 justify-center items-center gap-x-10 py-10 mt-10 bg-[#f1fdf7]">
            <div className="flex flex-col items-center md:items-start ">
                <div className="font-bold text-3xl py-10">
                    The best part? <br /> Everything.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Stick to your budget </span> <br />
                </div>
                <div>
                    Find the right service for every price point. <br /> No hourly rates, just project-based pricing.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Stick to your budget </span> <br />
                </div>
                <div>
                    Find the right service for every price point. <br /> No hourly rates, just project-based pricing.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Stick to your budget </span> <br />
                </div>
                <div>
                    Find the right service for every price point. <br /> No hourly rates, just project-based pricing.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Stick to your budget </span> <br />
                </div>
                <div>
                    Find the right service for every price point. <br /> No hourly rates, just project-based pricing.
                </div>
            </div>
            <div className=" object-contain py-10">
                <img alt="Video teaser image" src="./public/img/1275115.jpg" className="w-[640px] h-[430px]" ></img></div>

        </div>
    )
}

export default HeroMarketing