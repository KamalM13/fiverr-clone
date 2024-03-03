import { Circle, Heart, Star } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Gigscard = () => {

    // const items = [
    //     {
    //         "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png",
    //         "name": "AI Artists"
    //     },
    //     {
    //         "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png",
    //         "name": "Logo Design"
    //     },
    //     {
    //         "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png",
    //         "name": "Wordpress"
    //     },
    //     {
    //         "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png",
    //         "name": "Voice Over"
    //     },
    //     {
    //         "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png",
    //         "name": "Animated Explainer"
    //     },
    //     {
    //         "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png",
    //         "name": "Social Media"
    //     }
    // ]

    return (
        <div className="relative flex flex-col space-y-3 ">
            <div className=" ">
                <Heart className="absolute top-6 right-4 cursor-pointer text-black opacity-30" fill="#ffe0b3" strokeWidth={3} />
                <Heart className="absolute top-6 right-4 cursor-pointer text-white" fill="#ffe0b3" strokeWidth={2} />
            </div>
            <div className="rounded-[10px] border-[1px] shadow-sm">
                <Carousel className=" max-w-[220px]">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="">
                                <div className="p-1 w-[220px]">
                                    <img src="./public/img/man.png" className="w-[220px] h-[140px] bg-red-500 " alt="photo" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
            <div className="flex justify-between items-center font-bold text-sm">
                <div className="flex items-center gap-x-1 font-bold">
                    <Circle size={18} fill="" />
                    <span>John Doe</span>
                </div>
                <div className="bg-[#ffe0b3] text-[#804317]  px-3 rounded-[5px]">
                    Top Rated
                </div>
            </div>
            <div className="max-w-[220px] text-wrap text-main">
                I will create 2d animated explainer video or sale video
            </div>
            <div className="flex items-center gap-x-1">
                <Star size={18} fill="" />
                <div className="rating">
                    4.9
                </div>
                <div className="text-sm text-[#74767e]">
                    (10k+)
                </div>
            </div>
            <div className="font-bold">
                From $50
            </div>
        </div>
    )
}

export default Gigscard