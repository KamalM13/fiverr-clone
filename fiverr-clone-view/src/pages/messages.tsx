
import { useUserid } from "@/hooks/useUserid"
import Chat from "@/types/chat"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TimeAgo from 'react-timeago'

const Messages = () => {

    const { data } = useQuery<Chat[]>({
        queryKey: ['chats'],
        queryFn: async () => {
            const response = await newRequest.get(`/chat`);
            return response.data;
        },
    });

    const userId = useUserid()
    console.log(userId)
    const [usernames, setUsernames] = useState<string[]>([]);

    useEffect(() => {
        const getUsername = async () => {
            try {
                data?.forEach(async (chat) => {
                    const res = await newRequest.get(`/users/${chat.sellerId === userId ? chat.buyerId : chat.sellerId}`);
                    setUsernames(prevUsernames => [...prevUsernames, res.data]);
                });
            } catch (error) {
                console.error('Failed to fetch username', error);
            }
        };

        if (!usernames.length) {
            getUsername();
        }
    })

    const navigate = useNavigate()


    return (
        <div className="flex justify-center p-10">
            {data?.length !== 0 ? (
                <table className="w-[900px] xl:w">
                    <thead>
                        <tr>
                            <th className="p-5">From</th>
                            <th>Message</th>
                            <th>Time</th>
                            <th>Mark Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((chat, idx) => {
                            return (
                                <tr key={idx} className="bg-green-100">
                                    <td className="p-5">
                                        <div className="flex justify-center">
                                            {usernames[idx]}
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex justify-center cursor-pointer"
                                        onClick={() => navigate(`/messages/${chat.id}`)}
                                        >
                                            {chat.lastMessage ? chat.lastMessage : "No messages"}
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex justify-center">
                                            <TimeAgo date={chat.updatedAt} />
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex justify-center">
                                            <button className="bg-green-500 text-white p-2 rounded-md">Mark Read</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <div className="p-10 text-xl text-green-500 font-bold">No messages found</div>
            )}

        </div>
    )
}

export default Messages