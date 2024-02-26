import { Link, useLocation } from "react-router-dom"

//Customization
import { Globe } from "lucide-react"
import { Button } from "./ui/button"
import CustomDropdownMenu from "./custom-components/CustomDropdownMenu"
import { useEffect, useState } from "react"
import UserDropDown from "./custom-components/UserDropDown"



const Navbar = () => {

    const [active, setactive] = useState(false)

    const { pathname } = useLocation()

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
        isSeller: false
    }

    return (
        <div className={`flex flex-col items-center transition ease-in-out delay-10 duration-500 sticky top-0 ${active || pathname !== '/' ? 'text-black bg-white' : 'text-white bg-[#0c4329]'}`}>
            <div className="w-[1400px] flex justify-between pt-5 pb-5 items-center">
                <div className="mr-auto">
                    <Link to="/">
                        <span className="font-bold text-3xl">fiverr</span>
                    </Link>
                    <Link to='/' className="text-[#1dbf73] font-bold text-2xl">.</Link>
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
                        <Link to='/'>Become a Seller</Link>
                    </>
                    }
                    {currentUser ? (
                        <UserDropDown
                            triggerText="Profile"
                            items={[
                                {
                                    label: 'Profile',
                                    linkTo: `/profile/${currentUser.id}`
                                },
                                {
                                    label: 'Gigs',
                                    linkTo: `/gigs`
                                },
                                {
                                    label: 'Team',
                                    linkTo: `/team`
                                },
                                {
                                    label: 'Subscription',
                                    linkTo: `/subscription`
                                },
                            ]}
                        />
                    ) : (
                        <>
                            <Button variant="outline" size={'sm'} className="hover:bg-green-600 hover:text-white font-bold rounded-xl">Join</Button>
                            <Link to='/'>Sign in</Link>
                        </>
                    )}
                </div>
            </div>
            {active || pathname !== '/' &&
                <>
                    <hr className="w-full border-1 " />
                    <div className="w-[1400px] flex justify-between font-light">
                        <Link to="/">
                            Graphics & Design
                        </Link>
                        <Link to="/">
                            Video & Animation
                        </Link>
                        <Link to="/">
                            Writing & Translation
                        </Link>
                        <Link to="/">
                            AI Services
                        </Link>
                        <Link to="/">
                            Digital Marketing
                        </Link>
                        <Link to="/">
                            Music & Audio
                        </Link>
                        <Link to="/">
                            Programming & Tech
                        </Link>
                        <Link to="/">
                            Business
                        </Link>
                        <Link to="/">
                            Lifestyle
                        </Link>
                    </div>
                </>}
        </div>

    )
}

export default Navbar