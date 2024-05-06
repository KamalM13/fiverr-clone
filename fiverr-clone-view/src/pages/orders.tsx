import Order from "@/types/order"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"




const Orders = () => {

    const { data } = useQuery<Order[]>({
        queryKey: ['orders'],
        queryFn: async () =>
            await newRequest.get(`/orders`).then((res) => {
                return res.data
            }),
    })
    console.log(data)
    const navigate = useNavigate()
    return (
        <div className="flex justify-center p-10">
            {data?.length !== 0 ? (<table className="w-[900px] xl:w">
                <thead>
                    <tr >
                        <th className="p-5">Image</th>
                        <th>Title</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((order) => {
                        return (
                            <tr key={order.gigId} className="bg-green-100">
                                <td className="p-5">
                                    <div className="flex justify-center">
                                        <img src={order.img} className="w-[60px] h-[60px]" />
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex justify-center">
                                        {order.title}
                                    </div>
                                </td>
                                <td className="p-5">
                                    <div className="flex justify-center">
                                        1
                                    </div>
                                </td>
                                <td className="p-5">
                                    <div className="flex justify-center">
                                        ${order.price}
                                    </div>
                                </td>
                                <td className="p-5">
                                    <div className="flex justify-center">
                                        <Mail
                                            color="blue"
                                            size="20px"
                                            className="cursor-pointer"
                                        />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>) :
                (
                    <div className="flex flex-col gap-y-3">
                        No Orders Found 
                        <button className="bg-green-500 text-white px-"
                            onClick={() => {
                            navigate("/gigs")
                        }}
                        >
                            Order Now !
                        </button>
                    </div>
                )}
        </div>

    )
}

export default Orders