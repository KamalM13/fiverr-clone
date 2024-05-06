import newRequest from "@/utils/newRequest";
import { useEffect, useState } from "react"

interface BillingInfo {
  fullName: string;
  companyName: string;
  stateRegion: string;
  address: string;
  city: string;
  postalCode: string;
  error: string | null;
  gigId: string;
}
interface BillingInfoProps {
  setChoosenBilling: (value: number) => void
  
}

const ChooseBillingInformation = ({ setChoosenBilling,}: BillingInfoProps) => {

  const [billingInfo, setBillingInfo] = useState<BillingInfo[]>()

  useEffect(() => {
    const getBillingInfo = async () => {
      const billingInfo = await newRequest.get('/users/billingInformation').then((res) => res.data)
      setBillingInfo(billingInfo)
    }
    getBillingInfo()
  }, [])


  const [selectedBillingIndex, setSelectedBillingIndex] = useState<Number>();

  const handleUseThis = (index: number) => {
    setSelectedBillingIndex(index);
  };

  useEffect(() => {

  })


  return (
    <div className="w-[600px] border-[1px] relative">
      <div className="">
        <div className="bg-[#fafafa] rounded-[3px] p-3 font-bold">Choose Your Billing Information</div>
        <div className="p-4 space-y-5">
          <span className="text-[#404145]">You can use your credit card or PayPal account to pay for this order.</span>
          <div className="grid grid-cols-2">
            {billingInfo?.map((info, index) => (
              <div
                className={`flex flex-col items-start p-2 border-[1px] w-[250px] ${selectedBillingIndex === index ? 'bg-gray-100' : ''
                  }`}
                key={index}
              >
                <span>Full Name: {info.fullName}</span>
                <span>Company: {info.companyName}</span>
                <span>State: {info.stateRegion}</span>
                <span>Address: {info.address}</span>
                <span>City: {info.city}</span>
                <span>Postal Code: {info.postalCode}</span>
                <button
                  className="bg-[#f0f0f0] p-2 rounded-[3px]"
                  onClick={() => {
                    handleUseThis(index); 
                    setChoosenBilling(index)
                  }}
                >
                  Use This
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseBillingInformation