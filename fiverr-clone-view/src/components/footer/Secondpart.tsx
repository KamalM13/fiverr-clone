import { Accessibility, Copyright, DollarSign, Globe } from "lucide-react"
import Logo from "../navbar/Logo"

const Secondpart = () => {

    const logos = ['facebook','instagram','linkedin','pinterest','twitter','pinterest']

    return (
        <div className="flex flex-row justify-center md:justify-between items-center p-3 py-6">
            <div className="flex items-center gap-x-10">
                <Logo />
                <div className="flex items-center py-3 pt-5">
                    <Copyright className="text-gray-300" />
                    <div className="text-sm text-gray-300 font-semibold pl-1 ">
                        Fiverr International Ltd. 2024
                    </div>
                </div>
            </div>
            <div className="hidden md:flex gap-x-10 items-center px-3">
                {logos.map((logo, index) => (
                    <img key={index} src={"./public/img/"+logo+".png"}></img>
                ))}
                <div className="flex gap-x-2">
                    <Globe className="text-[#74767e]" />
                    <span className="text-[#74767e] font-bold"> English </span>
                </div>
                <div className="flex gap-x-2">
                    <DollarSign className="text-[#74767e]" />
                    <span className="text-[#74767e] font-bold"> USD </span>
                </div>
                <div>
                    <Accessibility className="text-[#74767e]"/>
                </div>
            </div>
        </div>
    )
}

export default Secondpart