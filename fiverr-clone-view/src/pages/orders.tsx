import Order from "@/types/order"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { Mail, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"




const Orders = () => {

    const { data, refetch } = useQuery<Order[]>({
        queryKey: ['orders'],
        queryFn: async () =>
            await newRequest.get(`/orders`).then((res) => {
                return res.data
            }),
    })
    const navigate = useNavigate()
    const handleDelete = async (id: string) => {
        await newRequest.delete(`/orders/${id}`).then(() => {
            refetch()
            toast.success("Order Cancelled")
        })
    }
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
                        <th>Cancel</th>
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
                                            onClick={() => {
                                                navigate('/messages')
                                             }}
                                        />
                                    </div>
                                </td>
                                <td className="p-5">
                                    <div className="flex justify-center">
                                        <TrashIcon
                                            color="red"
                                            size="19px"
                                            className="cursor-pointer"
                                            onClick={() => {
                                                handleDelete(order._id)
                                            }}
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