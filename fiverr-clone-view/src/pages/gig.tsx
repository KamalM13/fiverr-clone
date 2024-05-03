import AddComments from "@/components/gig/addComments"
import Comments from "@/components/gig/comments"
import GigCarousel from "@/components/gig/gigCarousel"
import Planstab from "@/components/gig/plansTab"
import UserRating from "@/components/gig/userRating"
import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Gig = () => {
    const { id } = useParams()
    // Gig request
    const { data, refetch } = useQuery({
        queryKey: ['gig', id],
        queryFn: async () =>
            await newRequest.get(`/gigs/single/${id}`).then((res) => { return res.data }),
    })

    const [userId, setuserId] = useState<string>("");
    const [commentedBefore, setCommentedBefore] = useState<boolean>()
    const userRequest = async () => {
        const userId = await newRequest.get(`/users/userId`).then((res) => res.data)
        setuserId(userId)
    }
    useEffect(() => {
        userRequest()
    })

    useEffect(() => {
        checkIfCommentedBefore()
    }, [data])

    const checkIfCommentedBefore = () => {
        if (data) {
            const comments = data.comments
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].userId === userId) {
                    setCommentedBefore(true)
                    return
                }
            }
        }
        setCommentedBefore(false)
    }


    return (
        <>
            {data && (
                <div className="grid grid-cols-[700px_minmax(400px,_1fr)_100px] p-6 lg:p-16 pt-10">
                    <div className="flex flex-col gap-y-6 ">
                        <div className="font-bold text-3xl text-[#404145] ">
                            {data.title}
                        </div>
                        <div className="text-[#404145]">
                            <UserRating userId={data.userId} />
                        </div>
                        <div className="">
                            <GigCarousel imgs={data.imgs} />
                        </div>
                        <div className="about">
                            <span className="font-bold text-xl text-[#404145]">
                                About this Gig
                            </span>
                            <p className="text-[#404145]">
                                {data.about}
                            </p>
                        </div>

                        <div className="User Comments">
                            <Comments
                                data={data.comments}
                                refetch={refetch}
                            />
                        </div>
                        {data.userId !== userId && !commentedBefore &&
                            <AddComments
                                refetch={refetch}
                                id={id}
                            />
                        }
                    </div>
                    <div className="">
                        <Planstab
                            data={{ plans: data.plans, shortTitle: data.shortTitle, price: data.price, delivery: data.delivery }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Gig