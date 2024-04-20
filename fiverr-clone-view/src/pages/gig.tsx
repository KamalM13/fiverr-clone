import UserRating from "@/components/userRating/userRating"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { Clock } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"




const Gig = () => {
    const { id } = useParams()


    // Gig request
    const { isPending, error, data } = useQuery({
        queryKey: ['gig', id],
        queryFn: async () =>
            await newRequest.get(`/gigs/single/${id}`).then((res) => {return res.data}),
    })
    


    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            {data && (
                <div className="flex justify-center gap-x-3 p-3 pt-10 ">
                    <div className="max-w-[800px] flex flex-col gap-y-4 ">
                        <div className="font-bold text-3xl text-[#404145] ">
                            {data.title}
                        </div>
                        <div className="text-[#404145]">
                            <UserRating userId={data.userId} />
                        </div>
                        <div className="carousel">

                        </div>
                        <div className="about">

                        </div>
                        <div className="aboutSeller">

                        </div>
                    </div>
                    <div className="sticky border-[1px] pb-3">
                        <div className="bg-[#fafafa] w-[350px] text-md font-bold flex justify-center items-center border-r-[1px]">
                            {data.plans.map((plan:any, i:any) => (
                                <div
                                    key={i}
                                    className={`w-[120px] border-[1px] p-3 flex justify-center cursor-pointer ${activeTab === i ? 'bg-white text-black' : 'text-main2 '}`}
                                    onClick={() => setActiveTab(i)}
                                >
                                    {plan.name}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col p-3 gap-y-5">
                            <div className="flex justify-between font-bold">
                                <div>{data.shortTitle}</div>
                                <div className="font-semibold">${data.price}</div>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="text-[#62646a] max-w-[240px]">{data.plans[activeTab].shortDesc}</p>
                                <div className="flex items-center gap-x-2">
                                    <Clock size={16} />
                                    <p className="text-sm font-bold">
                                        {data.delivery} days delivery
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-black rounded-[5px] py-1 w-[300px] text-white">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Gig