import newRequest from "@/utils/newRequest"
import { useEffect, useState } from "react"

export function useIsSeller() {
    const [isSeller, setIsSeller] = useState<boolean>(false)
    useEffect(() => {
        const isSeller = async () => {
            await newRequest.get(`/users/isSeller`).then((res) => {
                setIsSeller(res.data)
            })
        }
        isSeller()
    }, [])
    return isSeller

}