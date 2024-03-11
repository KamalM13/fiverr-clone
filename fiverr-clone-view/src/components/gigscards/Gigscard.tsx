import { Heart } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import GigsCardDetails from "./GigsCardDetails"
import { GigCardProps } from "../../types/gig.ts"

const Gigscard = ({ gig }: GigCardProps) => {


    return (
        <div className="relative flex flex-col justify-center space-y-3 max-w-[220px] ">
            <div className="w-[220px] rounded-[10px] shadow-sm">
                <Carousel className="  group relative">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="">
                                <div className="w-[220px] cursor-pointer"
                                onClick={() => window.location.href = `/gig/${gig._id}`}
                                >
                                    {<img
                                        src={gig.imgs[index]}
                                        alt={gig.shortTitle}
                                        className="w-[220px] h-[150px] object-cover rounded-t-[10px]"
                                    />
                                    }
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 hidden group-hover:flex transition-all ease-in-out duration-1000" />
                    <CarouselNext className="absolute right-2 hidden group-hover:flex" />
                </Carousel>

            </div>
            <div>
                <Heart className="absolute top-2 right-2 cursor-pointer text-white" strokeWidth={2} />
                <Heart className="absolute top-2 right-2 cursor-pointer text-white opacity-35" fill="" strokeWidth={2} />
            </div>
            <GigsCardDetails gig={gig} />
        </div>
    )
}

export default Gigscard