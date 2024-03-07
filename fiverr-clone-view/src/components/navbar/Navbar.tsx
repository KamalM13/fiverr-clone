import { useLocation } from "react-router-dom"

//Customization
import { Menu, User } from "lucide-react"
import { useEffect, useRef, useState, } from "react"
import { useCookies } from "react-cookie"

import Logo from "./Logo"
import RegularMenu from "./Regular-menu"
import MobileMenu from "./Mobile-menu"
import Extranavbar from "./Extra-navbar"
import Gigsnavbar from "./Gigsnavbar"
import GigsIconDropdown from "./GigsIconDropdown"


const Navbar = () => {

    const [active, setactive] = useState(false)
    const [cookies, removeCookie] = useCookies(["access_token"]);
    const username = localStorage.getItem("username");

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
        username: 'hi',
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
                            <Gigsnavbar />
                            <GigsIconDropdown />
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

                {(active || pathname) !== "/" && pathname !== '/login' && <Extranavbar />}

            </div>
            <hr className="border-1" />
            {menuOpen && <div className="md:hidden fixed top-0 left-0 w-screen h-screen
             bg-black opacity-50 z-10">
            </div>}

        </>
    )
}

export default Navbar