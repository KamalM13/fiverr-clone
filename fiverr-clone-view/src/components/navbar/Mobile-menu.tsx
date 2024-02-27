import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"




interface MobileMenuProps {
    currentUser: any;
    menuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentUser, menuOpen }) => {
    return (
        <div className={`h-full w-[50%] bg-white top-0 right-0 fixed 
            pt-6 pr-6 pl-6  text-md text-gray-700 shadow-xl ease-in-out duration-300
            ${menuOpen ? "translate-x-0 " : "translate-x-full"}`}>
            <div className='py-4'>
                <Button size={'lg'} className="hover:bg-gray-500 font-bold text-lg rounded bg-black text-white">Join Fiverr</Button>
            </div>
            <div className="w-full">
                <Link to="signin" className="block hover:bg-[#f5f5f5] py-3 pl-1 rounded">
                    Sign in
                </Link>
            </div>
            <Accordion type="single" collapsible >
                <AccordionItem value="item-1">
                    <AccordionTrigger className='hover:bg-[#f5f5f5] py-3 pl-1 rounded' >
                        Explore
                    </AccordionTrigger>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Discover
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Guides
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Learn
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Logo Maker
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Community
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Podcast
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Blog
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Fiverr Workspace
                        </AccordionContent>
                    </Link>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible >
                <AccordionItem value="item-1">
                    <AccordionTrigger className='hover:bg-[#f5f5f5] py-3 pl-1 rounded' >
                        Browse Categories
                    </AccordionTrigger>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Graphics & Design
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Video & Animation
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Writing & Translation
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            AI Services
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Digital Marketing
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Music & Audio
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Programming & Tech
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Business
                        </AccordionContent>
                    </Link>
                    <Link to="/">
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            Lifestyle
                        </AccordionContent>
                    </Link>
                </AccordionItem>
            </Accordion>
            <div className='pt-7 py-2 font-bold '>
                General
            </div>

            <div className="w-full">
                <Link to="/" className="block hover:bg-[#f5f5f5] py-3 pl-1 rounded">
                    Home
                </Link>
            </div>

        </div>

    );
};

export default MobileMenu;
