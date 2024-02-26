import { Link } from "react-router-dom"

//Customization
import { Globe } from "lucide-react"
import { Button } from "./ui/button"
import CustomDropdownMenu from "./custom-components/CustomDropdownMenu"
import { useEffect, useState } from "react"
import UserDropDown from "./custom-components/UserDropDown"



const Navbar = () => {

    const [active, setactive] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setactive(true) : setactive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)
        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: 'test',
        isSeller: true
    }

    return (
        <div className={`flex flex-col items-center transition ease-in-out delay-10 duration-500 sticky top-0 ${active ? 'text-black bg-white' : 'text-white bg-[#0c4329]'}`}>
            <div className="w-[1400px] flex justify-between pt-5 pb-5 items-center">
                <div className="mr-auto">
                    {/* <Link to="/"> */}
                    <span className="font-bold text-3xl">fiverr</span>
                    {/* </Link> */}
                    <span className="text-[#1dbf73] font-bold text-2xl">.</span>
                </div>
                <div className="flex gap-6 items-center font-semibold text-lg">
                    <div>
                        <CustomDropdownMenu
                            triggerText="Explore"
                            items={[
                                { title: 'Discover', subtitle: 'Inspiring Projects Made on Fiverr' },
                                { title: 'Community', subtitle: 'Connect With Fiverr\'s Team And Community' },
                                { title: 'Guides', subtitle: 'In-depth guides covering business topics' },
                                { title: 'Podcast', subtitle: 'Inside tips from business minds' },
                                { title: 'Learn', subtitle: 'Professional online courses, led by experts' },
                                { title: 'Blog', subtitle: 'News, information and community stories' },
                            ]}
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <Globe size={20} className="pt-[1px]" />
                        English
                    </div>
                    {!currentUser.isSeller && <>
                        <span>Become a Seller</span>
                    </>
                    }
                    {currentUser ? (
                        <UserDropDown
                            triggerText="Profile"
                            items={[
                                { label: 'Profile' },
                                { label: 'Billing' },
                                { label: 'Team' },
                                { label: 'Subscription' },
                            ]}
                        />
                    ) :
                        (
                            <>
                                <Button variant="outline" size={'sm'} className="hover:bg-green-600 hover:text-white font-bold rounded-xl">Join</Button>
                                <span>Sign in</span>
                            </>
                        )
                    }
                </div>
            </div>
            {active &&
                <>

                    <div className="w-[1400px] flex justify-between font-light">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>}
        </div>

    )
}

export default Navbar