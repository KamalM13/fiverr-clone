import newRequest from "@/utils/newRequest";
import { CircleUser, Star, } from "lucide-react";
import { useEffect, useState } from "react";


interface userRatingProps {
    userId: string;
}

const UserRating = ({ userId }: userRatingProps) => {
    const [imageUrl, setimageUrl] = useState('')
    const [username, setuserName] = useState('')
    const imgRequest = async () => {
        const imgUrl = await newRequest.get(`/users/${userId}/image`).then((res) => res.data)
        if (imgUrl != "Undefined") {
            setimageUrl(imgUrl)
        } else {
            setimageUrl('')
        }
    }
    const userNameRequst = async () => {
        const userName = await newRequest.get(`/users/${userId}`).then((res) => res.data)
        setuserName(userName)
     }

    useEffect(() => {
        imgRequest()
        userNameRequst()
    })

    return (
        <div className="flex gap-y-3 ">
            <div className="flex gap-x-3 items-center">
                <div className="name">
                    {imageUrl ? <img src={imageUrl} alt="user" /> : <CircleUser size={42} />}
                </div>
                <div className="flex flex-col gap-y-1 text-lg">
                    <div className="flex items-center gap-x-3 font-bold ">
                        {username}
                        <span>
                            |
                        </span>
                        <div className="text-sm bg-[#ffe0b3] px-2 rounded-[5px]">
                            Top Rated
                        </div>
                    </div>
                    <div className="flex bold items-center gap-x-1">
                        <Star size={15} fill="true" />
                        <div>4.5 <span className="underline">(10)</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRating