import { ArrowRight, HelpCircle } from "lucide-react"

const Gigspormotion = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:w-[1200px] gap-x-10 md:px-10 justify-center items-center gap-y-5 pr-6">
            <div className="flex md:w-full max-w-[600px] items-center gap-x-9 justify-center md:justify-between border-[1px] rounded-[10px] shadow-sm p-3 py-5 ">
                <div className="flex items-center gap-x-4">
                    <HelpCircle size={46} />
                    <div className="flex flex-col">
                        <div className="text-sm font-bold">
                            Tailor Fiverr for your needs
                        </div>
                        <div className="text-xs font-normal">
                            Tell us about your business.
                        </div>
                    </div>
                </div>
                <ArrowRight size={20} />
            </div>
            <div className="flex md:w-full max-w-[600px] items-center gap-x-9 justify-center md:justify-between border-[1px] rounded-[10px] shadow-sm p-3 py-5 ">
                <div className="flex items-center gap-x-4">
                    <HelpCircle size={46} />
                    <div className="flex flex-col">
                        <div className="text-sm font-bold">
                            Tailor Fiverr for your needs
                        </div>
                        <div className="text-xs font-normal">
                            Tell us about your business.
                        </div>
                    </div>
                </div>
                <ArrowRight size={20} />
            </div>
        </div>
    )
}

export default Gigspormotion