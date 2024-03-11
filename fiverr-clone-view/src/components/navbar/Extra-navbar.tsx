import { Link} from "react-router-dom"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"




const Extranavbar = () => {


    const objects = ["Graphics & Design", "Video & Animation", "Writing & Translation", "AI Services", "Digital Marketing",
        "Music & Audio", "Programming & Tech", "Business", "Lifestyle"]
    
    const categories = ["Design", "Video", "Writing", "AI", "Marketing", "Music", "Programming", "Business", "Lifestyle"]

    return (
        <>
            <hr className="hidden md:inline w-full border-1 " />
            <div className="hidden md:flex w-full px-4 md:px-7 justify-between text-gray-500 pt-2">
                {objects.map((object, idx) => (
                    <HoverCard>
                        <HoverCardTrigger className="cursor-pointer hover:border-b-4 border-green-500 pb-2 hover:pb-1">{object}</HoverCardTrigger>
                        <HoverCardContent >
                            <div className="">
                                <div className="bg-white w-screen grid grid-cols-4 justify-between items-center gap-x-10 p-3">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <>
                                            <div className="flex flex-col gap-y-2 p-2 text-lg" key={index}>
                                                <p className="font-bold">Logo & Brand Identity</p>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Link to={'/gigs?category='+categories[idx]} key={index} className="hover:text-gray-400"> Logo Design</Link>
                                                ))}
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <div className="bg-white w-screen grid grid-cols-4 justify-between items-center gap-x-10 p-3">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <>
                                            <div className="flex flex-col gap-y-2 p-2 text-lg" key={index}>
                                                <p className="font-bold">Logo & Brand Identity</p>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Link to={'/gigs?category='+categories[idx]} key={index} className="hover:text-gray-400"> Logo Design</Link>
                                                ))}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
            <hr className="hidden md:inline w-full border-1 " />
        </>
    )
}

export default Extranavbar