import { Link, useLocation } from "react-router-dom"

//Customization
import { Menu } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import Logo from "./navbar/Logo"
import RegularMenu from "./navbar/Regular-menu"
import MobileMenu from "./navbar/Mobile-menu"



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
    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
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
        ${active || pathname !== '/' ? 'text-black bg-white' : 'text-white bg-[#0c4329]'}`}>
                <div className="w-full max-w-[1400px] px-4 md:px-7 flex justify-between pt-5 pb-5 items-center">
                    <Logo />
                    <Menu className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <div className="flex gap-6 items-center font-semibold text-lg">
                        <RegularMenu
                            currentUser={currentUser}
                        />
                    </div>
                </div>

                <div className="w-full" ref={menuRef}>
                </div>
                <div className="md:hidden">
                    <MobileMenu currentUser={currentUser}
                        menuOpen={menuOpen} />
                </div>

                {active || pathname !== "/" &&
                    <>
                        <hr className="w-full border-1 text-gray-500 " />
                        <div className="w-full max-w-[1400px] px-4 md:px-7 flex justify-between font-light p-2 ">
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
                        <hr className="w-full border-1 text-gray-500 " />
                    </>}
            </div>
            ${menuOpen && <div className="md:hidden fixed top-0 left-0 w-screen h-screen
             bg-black opacity-50 z-10">
            </div>}

        </>
    )
}

export default Navbar