import BillingInformation from "@/components/order/billingInformation"
import ChooseBillingInformation from "@/components/order/chooseBillingInformation"
import ChoosenGig from "@/components/order/choosenGig"
import { useState } from "react"

const ConfirmOrder = () => {
    const [choosenBilling, setChoosenBilling] = useState<number>(0);

    const handleUseThis = (index:number) => {
        setChoosenBilling(index);
    };
    return (
        <div className="relative">
            <div className="p-10" title="billing information">
                <BillingInformation />
            </div>
            <div className="px-10">
                <ChooseBillingInformation
                    setChoosenBilling={handleUseThis}
                />
            </div>
            <div className="absolute top-10 right-20 xl:right-40 border-[1px]" title="The choosen Gig">
                <ChoosenGig
                    choosenBilling={choosenBilling}
                />
            </div>
        </div>
    )
}

export default ConfirmOrder