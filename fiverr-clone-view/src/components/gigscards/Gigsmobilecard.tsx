import { Circle, Star } from "lucide-react"

const GigsMobileCard = () => {
    return (
        <>
            <div className="flex flex-col p-3">
                <div className="flex justify-between items-center">
                    <img src="./public/img/man.png" className="w-[140px] h-[100px] bg-red-600 rounded" alt="" />
                    <div className="p-3 flex flex-col gap-y-6">
                        <span>Illustrate Anything you want </span>
                        <div className="flex items-center gap-x-2">
                            <Star size={20} fill="" /> <span className="font-bold">4.6</span>
                        </div>
                    </div>
                </div>
                <div className="py-3 flex justify-between">
                    <div className="flex items-center gap-x-2 text-xs font-bold">
                        <Circle />
                        <div>
                            John Doe <br />
                            <span className="text-yellow-400 font-normal ">Top Seller  </span>
                        </div>
                    </div>
                    <div className="flex items-end text-sm gap-x-1">
                        <span className="text-[10px] text-gray-500"> STARTING AT </span>
                        <span className="text-xl "> $80 </span>
                    </div>
                </div>
                <hr />
            </div>
            


        </>
    )
}

export default GigsMobileCard