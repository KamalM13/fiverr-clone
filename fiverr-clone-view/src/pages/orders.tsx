import { useIsSeller } from "@/hooks/useIsSeller"
import Order from "@/types/order"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { Check, Mail, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"




const Orders = () => {
    
    const isSeller = useIsSeller()

    const { data, refetch } = useQuery<Order[]>({
        queryKey: ['orders'],
        queryFn: async () =>
            await newRequest.get(`/orders`).then((res) => {
                console.log(res.data)
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

    const handleComplete = async (id: string) => { 
        await newRequest.put(`/orders/${id}`, {
            isCompleted: true
        }).then(() => {
            refetch()
            toast.success("Order Completed")
        })
    }

    const handleChatCreation = async (index: number) => {
        try {
            newRequest.post(`/chat`, {
                id: data ? data[index].buyerId + data[index].sellerId : "",
                buyerId: data ? data[index].buyerId : "",
                sellerId: data ? data[index].sellerId : "",
            }).then(() => { })
        } catch (error) {
            console.error('Failed to create chat', error);
        }
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
                        {isSeller && <th>Complete</th>}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((order, index) => {
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
                                                handleChatCreation(index)
                                                setTimeout(() => {
                                                    navigate('/messages')
                                                },3000)
                                                
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
                                <td className="p-5">
                                    <div className="flex justify-center">
                                        <Check
                                            color="green"
                                            size="19px"
                                            className="cursor-pointer"
                                            onClick={() => {
                                                handleComplete(order._id)
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