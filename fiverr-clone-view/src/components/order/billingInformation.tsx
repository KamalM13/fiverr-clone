import { useEffect, useState } from "react"
import BillingInformationDialog from "./billingInformationDialog"
import newRequest from "@/utils/newRequest"



const BillingInformation = () => {

    const [username, setUsername] = useState<String>("")

    useEffect(() => {
        const getUsername = async () => {
            const username = await newRequest.get(`/users/`).then((res) => res.data)
            setUsername(username)
        }
        getUsername()
    }, [])

    return (
        <div className="w-[600px] border-[1px] relative">
            <div className="">
                <div className="bg-[#fafafa] rounded-[3px] p-3 font-bold">Billing Information</div>
                <p className="p-4">
                    Your invoice will be issued according to the <br></br> details listed here.
                </p>
                <p className="p-4 font-bold">
                    {username}
                </p>
            </div>
            <div className="p-4 absolute top-10 right-0">
                <BillingInformationDialog />
            </div>
        </div>

    )
}

export default BillingInformation