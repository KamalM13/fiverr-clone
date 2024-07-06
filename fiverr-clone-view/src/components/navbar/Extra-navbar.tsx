import { Link } from "react-router-dom"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import data from '@/utils/categories.json'



interface CategoriesType {
    [category: string]: {
        [subCategory: string]: string[];
    };
}

const Extranavbar = () => {

    const categories: CategoriesType = data;
    return (
        <>
            <hr className="hidden md:inline w-full border-1 " />
            <div className="hidden md:flex w-full px-4 md:px-7 justify-between text-gray-500 pt-2">
                {Object.keys(categories).map((mainCategory) => (
                    <HoverCard key={mainCategory}>
                        <HoverCardTrigger className="cursor-pointer font-semibold text-sm hover:border-b-4 border-green-500 pb-2 hover:pb-1">{mainCategory}</HoverCardTrigger>
                        <HoverCardContent className="overflow-y-scroll h-[500px]">
                            <div className="h-[100px] " key={mainCategory}>
                                <div className="bg-white w-screen h-100 flex flex-wrap basis-1 p-3 items-between gap-x-3">
                                    {Object.keys(categories[mainCategory]).map((subCategory, index) => (
                                        <div key={index} className="flex flex-col gap-y-2 p-2 text-lg w-[220px] h-min ">
                                            <p className="font-bold">{subCategory}</p>
                                            {categories[mainCategory][subCategory].map((service, idx) => (
                                                <Link to={'/gigs?category=' + categories[idx]} key={idx} className="hover:text-gray-400">{service}</Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
            <hr className="hidden md:inline w-full border-1"/>
        </>
    )
}

export default Extranavbar