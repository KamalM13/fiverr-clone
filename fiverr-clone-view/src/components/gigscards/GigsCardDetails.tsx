import { Circle, Star } from "lucide-react"

interface GigCardProps {
    gig: Gig
}

import { Gig } from "../../types/gig.ts"

const GigsCardDetails = ({ gig }: GigCardProps) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center font-bold text-xs">
                <div className="flex items-center gap-x-1 font-bold">
                    <Circle size={18} fill="" />
                    <span>{gig.shortTitle}</span>
                </div>
                <div className="bg-[#ffe0b3] text-[#804317]  px-3 rounded-[5px]">
                    {gig.category}
                </div>
            </div>
            <div className="max-w-[220px] max-h-[100px] line-clamp-2  text-main text-sm">
                {gig.about}
            </div>
            <div className="flex items-center gap-x-1 font-bold text-sm">
                <Star size={14} fill="" />
                <div className="rating">
                    {gig.ratingNumber && gig.ratingNumber.toFixed(1)}
                </div>
                <div className=" text-[#74767e]">
                    ({gig.sales})
                </div>
            </div>
            <div className="font-bold">
                From ${gig.plans[0].price}
            </div>
        </div>
    )
}

export default GigsCardDetails