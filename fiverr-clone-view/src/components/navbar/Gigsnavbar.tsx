
import { Search } from "lucide-react"
import Gigsnavbartextdropdown from "./Gigsnavbartextdropdown"

const Gigsnavbar = () => {
    return (
        <>
            <div className="flex items-center">
                <input className="border-[1px] border-r-0 rounded-l-[5px] w-screen max-w-[550px] p-2"
                    placeholder="What service are you looking for today?" />
                <div className="bg-black p-2 border-[1px] border-black rounded-r-[5px]">
                    <Search className="text-white" />
                </div>
            </div>
            <Gigsnavbartextdropdown />
        </>
    )
}

export default Gigsnavbar