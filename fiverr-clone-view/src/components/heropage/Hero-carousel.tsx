import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import { Card } from "../ui/card"



export function HeroCarousel() {

    const items = [
        {
            "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png",
            "name": "AI Artists"
        },
        {
            "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png",
            "name": "Logo Design"
        },
        {
            "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png",
            "name": "Wordpress"
        },
        {
            "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png",
            "name": "Voice Over"
        },
        {
            "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png",
            "name": "Animated Explainer"
        },
        {
            "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png",
            "name": "Social Media"
        }
    ]


    return (
        <div className="flex  justify-center pt-7">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="max-w-3xl"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 sm:basis-[80%]">
                            <div className="p-1 relative">
                                <Card>
                                    <Link to="/">
                                        <div className="absolute top-0 left-0 p-3 ml-3 text-3xl text-white font-semibold">
                                            {items[index].name}
                                        </div>

                                        <img src={items[index].link} alt="" className="w-full h-full object-cover" />
                                    </Link>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
