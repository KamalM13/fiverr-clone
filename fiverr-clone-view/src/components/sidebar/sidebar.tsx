import { LayoutDashboard, Menu, User, Pizza, Navigation, ArrowLeftCircle } from 'lucide-react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            name: "Dashboard",
            component: LayoutDashboard,
        },
        {
            name: "Users",
            component: User,
        },
        {
            name: "Gigs",
            component: Pizza,
        }
    ]

    return (
        <>
            {/* <div className='flex'>
                <div className={`${isOpen ? "w-72" : "w-16"} duration-300 h-screen relative bg-[#848484] p-4`}>
                    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-xl flex items-center'>
                        <Navigation />
                    </div>
                    <ul>
                        {links.map((link, index) => {
                            const ComponentName = link.component;
                            return (
                                <li key={index} className='cursor-pointer flex items-center gap-2'>
                                    <ComponentName key={index} className={`${index == 0 ? "mt-6" : "mt-3"}`} />
                                    <span className={`${!isOpen && "hidden"} origin-left duration-300`}>{link.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div > */}
            <div className="flex">
                <div
                    className={` ${isOpen ? "w-72" : "w-20 "} bg-[#848484] h-screen p-5  pt-8 relative duration-300`}
                >
                    <ArrowLeftCircle
                        className={`absolute cursor-pointer -right-3 top-9 w-7 ${!isOpen && "rotate-180"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <Navigation
                            className={`cursor-pointer  `}
                        />
                        <h1
                            className={`text-white origin-left font-medium text-xl duration-200 ${!isOpen && "scale-0"
                                }`}
                        >
                            Designer
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {links.map((link, index) => {
                            const ComponentName = link.component;
                            return (
                                <li
                                    key={index}
                                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>

                                    <ComponentName />
                                    <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                        {link.name}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar