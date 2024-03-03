import { Heart, } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import GigsCardDetails from "./GigsCardDetails"


const Gigscard = () => {

    const details = {
        "name": 'John doe',
        "ratingType": 'Top rated',
        "description": 'I will create 2d animated explainer video or sale video',
        "rating": 4.9,
        "servedCustomers": "10k",
        "price": "$50"
    }

    return (
        <div className="relative flex flex-col space-y-3 ">
            <div className=" ">
                <Heart className="absolute top-6 right-4 cursor-pointer text-black opacity-30" fill="#ffe0b3" strokeWidth={3} />
                <Heart className="absolute top-6 right-4 cursor-pointer text-white" fill="#ffe0b3" strokeWidth={2} />
            </div>
            <div className="rounded-[10px] shadow-sm">
                <Carousel className=" max-w-[220px] group relative">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="">
                                <div className="w-[220px] ">
                                    <img src="./public/img/man.png" className="rounded-[10px] w-[220px] h-[140px] bg-red-500 " alt="photo" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 hidden group-hover:flex transition-all ease-in-out duration-1000" />
                    <CarouselNext className="absolute right-2 hidden group-hover:flex" />
                </Carousel>

            </div>
            <GigsCardDetails details={details} />
        </div>
    )
}

export default Gigscard