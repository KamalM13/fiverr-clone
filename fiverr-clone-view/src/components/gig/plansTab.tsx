import { Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Plan {
    name: string;
    shortDesc: string;
    price: number;
}

interface Props {
    data: {
        plans: Plan[];
        shortTitle: string;
        price: number;
        delivery: number;
    };
}

const Planstab = ({ data }: Props) => {
    const [activeTab, setActiveTab] = useState(0);
    const {id} = useParams()
    const navigate = useNavigate()

    return (
        <div className="float-right sticky border-[1px] pb-3 w-[350px]">
            <div className="bg-[#fafafa] w-[350px] text-md font-bold flex justify-center items-center">
                {data.plans.map((plan: Plan, i: number) => (
                    <div
                        key={i}
                        className={`w-[120px] border-[1px] p-3 flex justify-center cursor-pointer ${activeTab === i ? 'bg-white text-black' : 'text-main2'}`}
                        onClick={() => {
                            setActiveTab(i)
                        }}
                    >
                        {plan.name}
                    </div>
                ))}
            </div>
            <div className="flex flex-col p-3 gap-y-5">
                <div className="flex justify-between font-bold">
                    <div>{data.shortTitle}</div>
                    <div className="font-semibold">${data.plans[activeTab].price}</div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p className="text-[#62646a] max-w-[240px] py-1">{data.plans[activeTab].shortDesc}</p>
                    <div className="flex items-center gap-x-2">
                        <Clock size={16} />
                        <p className="text-sm font-bold">
                            {data.delivery} days delivery
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-black rounded-[5px] py-1 w-[300px] text-white"
                        onClick={() => {
                            navigate(`/gig/${id}/order/${activeTab as number}`)
                        }}
                    >Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Planstab;
