import { useLocation } from "react-router-dom"

//Customization
import { Bell, Heart, Mail, Menu, Search, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import Logo from "./Logo"
import RegularMenu from "./Regular-menu"
import MobileMenu from "./Mobile-menu"
import Extranavbar from "./Extra-navbar"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"




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

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
            else {
                setMenuOpen(true);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <>
            <div className={`z-20 flex flex-col items-center transition ease-in-out 
        delay-10 duration-500 sticky top-0
        ${active || pathname !== '/' ? 'text-black bg-white' : 'text-white bg-[#013914]'}`}>
                <div className="w-full max-w-[1400px] px-4 md:px-7 flex justify-between pt-5 pb-5 items-center">
                    <Logo />
                    {/* Mobile Menu Trigger */}
                    <Menu className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    {/* Regular Menu  */}
                    {pathname === '/gigs' ? (
                        <div className="hidden md:flex items-center gap-x-7">
                            <div className="flex items-center">
                                <input className="border-[1px] border-r-0 rounded-l-[5px] w-screen max-w-[550px] p-2"
                                    placeholder="What service are you looking for today?" />
                                <div className="bg-black p-2 border-[1px] border-black rounded-r-[5px]">
                                    <Search className="text-white" />
                                </div>
                            </div>
                            <div className="font-semibold">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="text-md">Fiverr Pro</NavigationMenuTrigger>
                                            <NavigationMenuContent className="bg-white w-screen">
                                                <div className="w-screen max-w-[360px] flex flex-col p-4 space-y-3">
                                                    <div className="flex gap-x-5 items-center border-[1px] rounded-[5px] p-3">
                                                        <div className="p-3">
                                                            <Search />
                                                        </div>

                                                        <div className="flex flex-col gap-y-1">
                                                            <span className="text-sm text-main">I'm Looking to Hire</span>
                                                            <span className="text-xs text-main2">I'd like to work with Pro freelancers and agencies while using free business tools</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-x-5 items-center border-[1px] rounded-[5px] p-3">
                                                        <div className="p-3">
                                                            <Search />
                                                        </div>

                                                        <div className="flex flex-col gap-y-1">
                                                            <span className="text-sm text-main">I'm Looking to Hire</span>
                                                            <span className="text-xs text-main2">I'd like to work with Pro freelancers and agencies while using free business tools</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>

                            </div>
                            <div className="flex items-center text-main2 gap-x-6">
                                <Bell size={20} />
                                <Mail size={20} />
                                <Heart size={20} />
                            </div>
                            <div className="text-main2 font-semibold">
                                Orders
                            </div>
                            <User className="text-main2" size={20} />
                        </div>
                    ) : (
                        <div className="flex gap-6 items-center font-semibold text-lg">
                            <RegularMenu
                                currentUser={currentUser}
                            />
                        </div>
                    )}

                </div>

                <div className="md:hidden" ref={menuRef}>
                    <MobileMenu
                        menuOpen={menuOpen} />
                </div>

                {(active || pathname) !== "/" && <Extranavbar />}

            </div>
            <hr className="border-1" />
            {menuOpen && <div className="md:hidden fixed top-0 left-0 w-screen h-screen
             bg-black opacity-50 z-10">
            </div>}

        </>
    )
}

export default Navbar