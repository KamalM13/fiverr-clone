import { Gig } from "@/types/gig"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { Gift } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const ConfirmOrderPage = () => {
    
    const navigate = useNavigate()
    const { id, planNumber, choosenBilling } = useParams()
    console.log(choosenBilling)

    const { data } = useQuery<Gig>({
        queryKey: ['gig', id],
        queryFn: async () =>
            await newRequest.get(`/gigs/single/${id}`).then((res) => { return res.data }),
    })

    const [username, setUsername] = useState<string>("")

    const userRequest = async () => {
        const username = await newRequest.get(`/users/`).then((res) => res.data)
        setUsername(username)
    }
    useEffect(() => {
        userRequest()
    })

    return (
        <div className="flex flex-col items-center gap-y-3 p-3">
            <h1 className=" text-[30px]">
                Order Confirmed
            </h1>

            <div className="pb-8">
                <Gift
                    color="green"
                    size="40px"
                />
            </div>
            <div className="text-[#404145] w-[600px]">
                Hey <span className="text-green-600">{username},</span> <br />
                <div className=" px-3"> Thank you for ordering this gig, your order has been confirmed. 
                    You can check your order in the orders page.
                    You can also contact the seller for more information.
                </div>
            </div>
            <div className="bg-green-800 text-white p-8 grid grid-cols-[auto,1fr,auto] gap-x-3 items-center w-[600px]">
                <img src={`http://localhost:3000/${data?.imgs[0]}`} className="w-[140px] h-[120px]" />
                <div className="flex flex-col">
                    <span className="max-w-[300px]">Name: {data && data.title}</span>
                    <span>Qty: 1</span>
                </div>
                <div className="text-right">
                    <span>Price: ${data && data.plans[Number(planNumber)].price}</span>
                </div>
            </div>
            <button className="bg-green-600 text-white p-1 px-2 rounded-[4px]"
                onClick={() => { 
                    navigate(`/orders`)
                } }
            >
                Go to Orders
            </button>
        </div>
    )
}

export default ConfirmOrderPage