import { Circle, Star } from "lucide-react"

type Details = {
    name: string;
    ratingType: 'Top rated' | 'Pro' | 'Verified' | string; 
    description: string;
    rating: number; 
    servedCustomers: string; 
    price: string;
};


interface GigsCardDetailsProps {
    details: Details;
}

const GigsCardDetails = ({ details }: GigsCardDetailsProps) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center font-bold text-xs">
                <div className="flex items-center gap-x-1 font-bold">
                    <Circle size={18} fill="" />
                    <span>{details.name}</span>
                </div>
                <div className="bg-[#ffe0b3] text-[#804317]  px-3 rounded-[5px]">
                    {details.ratingType}
                </div>
            </div>
            <div className="max-w-[220px] max-h-[100px] line-clamp-2  text-main text-sm">
                {details.description}
            </div>
            <div className="flex items-center gap-x-1 font-bold text-sm">
                <Star size={14} fill="" />
                <div className="rating">
                    {details.rating}
                </div>
                <div className=" text-[#74767e]">
                    ({details.servedCustomers})
                </div>
            </div>
            <div className="font-bold">
                From {details.price}
            </div>
        </div>
    )
}

export default GigsCardDetails