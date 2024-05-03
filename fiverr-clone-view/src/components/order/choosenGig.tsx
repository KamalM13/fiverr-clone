import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { Check } from "lucide-react"
import { Gig } from "@/types/gig"

import { useParams } from "react-router-dom"
import { Button } from "@mui/material"

const ChoosenGig = () => {

    const { id, planNumber } = useParams()
    console.log(planNumber)

    const { data } = useQuery({
        queryKey: ['gig', id],
        queryFn: async () =>
            await newRequest.get(`/gigs/single/${id}`).then((res) => { return res.data as Gig }),
    })

    return (
        <div>
            {data && (
                <div className="w-[350px] bg-[#fafafa] space-y-6 p-3">
                    <div className="flex items-center gap-x-3 p-1 ">
                        <img src={data.imgs[0]} alt="" className="w-24 h-24 " />
                        <span className="text-sm font-bold text-[#62646a] max-w-[200px]">{data.title}</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#62646a] ">
                        <span>
                            {data.shortTitle}
                        </span>
                        <span>
                            ${data.plans[Number(planNumber)]?.price}
                        </span>
                    </div>
                    <div>
                        {data.features.map((feature: any, index: number) => (
                            <div key={index} className="flex gap-x-2 items-center font-bold text-[#696b70]">
                                <Check />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-black text-white rounded-[5px] py-1 w-[300px]">
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChoosenGig