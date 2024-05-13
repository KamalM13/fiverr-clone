import { useUserid } from "@/hooks/useUserid"
import newRequest from "@/utils/newRequest"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"

interface Message {
    chatId: string,
    userId: string,
    message: string,
    createdAt: string,
}

const Message = () => {
    const { id } = useParams()

    const userId = useUserid()

    const queryClient = useQueryClient()

    const { data } = useQuery<Message[]>({
        queryKey: ['conversation'],
        queryFn: async () =>
            await newRequest.get(`/chat/message/${id}`).then((res) => {
                return res.data
            }).catch((err) => {
                console.log(err)
            }),
    })

    const mutation = useMutation({
        mutationFn: (conversation: Message) => {
            return newRequest.post(`/chat/message/${id}`, conversation)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['conversation'] })
        }
    })


    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const message = input
        console.log(message)
        mutation.mutate({
            userId: userId ? userId : '',
            chatId: id ? id : '',
            message: message,
            createdAt: new Date().toISOString()
        })
        setInput('')
    }

    return (
        <div className="flex justify-center ">
            <div className="lg:w-[900px] xl:w-[1200px] flex flex-col">
                <span className="font-semibold text-xl text-green-500 p-3">
                    Messages
                </span>
                <div className="flex flex-col justify-end p-10 gap-5 h-[500px] overflow-y-scroll border-[2px]">
                    {data && data.map((message: Message, index) => {
                        return (
                            <div className={`flex gap-5 max-w-[600px] text-lg ${userId === message.userId && 'flex-row-reverse self-end'}`} key={index}>
                                <div className={`flex flex-col ${userId === message.userId ? 'bg-blue-700' : 'bg-gray-400'} text-white p-3 rounded-s-xl rounded-b-xl`}>
                                    <span>{message.message}</span>
                                    <span className="text-sm">{new Date(message.createdAt).toLocaleTimeString()}</span>
                                </div>
                            </div>
                        )
                    })}
                    <form onSubmit={(e) => { handleSubmit(e) }} className="flex justify-center">
                        <input type="text"
                            className="border-[2px] border-green-500 p-3 w-[800px] !outline-none "
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type={"submit"} className="bg-green-500 px-3 text-white">
                            Send
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Message