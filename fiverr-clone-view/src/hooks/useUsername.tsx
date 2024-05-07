import newRequest from "@/utils/newRequest"
import { useEffect, useState } from "react"

const useUsername = (userId:string) => {
    const [username, setUsername] = useState<string>('')
    useEffect(() => { 
        const getUsername = async () => {
            try {
                const res = await newRequest.get(`/users/${userId}`)
                setUsername(res.data)
            } catch (error) {
                console.error('Failed to fetch username', error)
            }
        }
        if (!username) {
            getUsername()
        }
    })
    return username as string
}

export default useUsername