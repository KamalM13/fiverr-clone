import ProfilePage from "@/components/profile/ProfilePage"
import newRequest from "@/utils/newRequest";
import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface ProfileData {
    username: string;
    email: string;
    name: string;
    image: string;
    country: string;
    isSeller: boolean;
}

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const { data, refetch } = useQuery<ProfileData>({
        queryKey: ['gigs'],
        queryFn: async () =>
            await newRequest.get(`/users/userInfo`).then((res) => {
                return res.data
            }),
    })


    return (
        <div>
            

            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold p-4">Profile</h1>
                {data?.image === " " ? <img src={data?.image}></img> : <Avatar/>}
                <button
                    onClick={handleEditToggle}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
            </div>
            <ProfilePage
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                profileData={data ? data : { email: '', name: '', image: '', username: '', country: '', isSeller: false }}
                refetch={refetch}
            />
        </div>
    )
}

export default Profile