import { Link } from "react-router-dom"

//Customization
import { ChevronDown, Globe } from "lucide-react"
import { Button } from "./ui/button"
import CustomDropdownMenu from "./custom-components/CustomDropdownmenu"




const Navbar = () => {
    return (
        <div className="flex justify-center bg-[#0c4329] text-white">
            <div className="w-[1400px] flex justify-between pt-5 pb-5 items-center">
                <div className="mr-auto">
                    {/* <Link to="/"> */}
                    <span className="font-bold text-4xl">fiverr</span>
                    {/* </Link> */}
                    <span className="text-[#1dbf73] font-bold text-2xl">.</span>
                </div>
                <div className="flex gap-6 items-center font-semibold text-xl">
                    <CustomDropdownMenu
                        triggerText="Fiverr Pro"
                        items={[
                            { title: 'Discover', subtitle: 'Inspiring Projects Made on Fiverr' },
                            { title: 'Community', subtitle: 'Connect With Fiverr\'s Team And Community' },
                            { title: 'Guides', subtitle: 'In-depth guides covering business topics' },
                            { title: 'Podcast', subtitle: 'Inside tips from business minds' },
                            { title: 'Learn', subtitle: 'Professional online courses, led by experts' },
                            { title: 'Blog', subtitle: 'News, information and community stories' },
                        ]}
                    />

                    <div className="flex items-center">
                        Explore
                        <ChevronDown size={30} className="pt-1" />
                    </div>
                    <div className="flex items-center gap-1">
                        <Globe size={20} className="pt-[1px]" />
                        English
                    </div>
                    <span>Become a Seller</span>
                    <span>Sign in</span>
                    <Button variant="outline" className="hover:bg-green-600 hover:text-white font-bold text-xl">Join</Button>
                </div>
            </div>
        </div>

    )
}

export default Navbar