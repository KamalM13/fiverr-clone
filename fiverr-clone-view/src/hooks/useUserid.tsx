import newRequest from "@/utils/newRequest";
import { useEffect, useState } from "react"

export function useUserid(){
    const [userId, setUserId] = useState<string>()
    useEffect(() => {
        const getUserId = async () => {
            try {
                const res = await newRequest.get('/users/userId');
                setUserId(res.data);
            } catch (error) {
                console.error('Failed to fetch username', error);
            }
        };
        getUserId()
    })
  return userId
}
