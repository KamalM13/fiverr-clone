import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import CustomAccordion from '../custom-components/CustomAccordion';





interface MobileMenuProps {
    
    menuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({  menuOpen }) => {

    const items = ["Graphics And Design","Guides","Learn","Logo Maker","Community","Podcast","Blog","Fiverr Workspace"]
    return (
        <div className={`h-full overflow-scroll w-[75%] bg-white top-0 right-0 fixed 
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
            <CustomAccordion
                titles={items}
                title='Browse Categories'
            />
            <CustomAccordion
            titles={items}
            title='Explore'
            />
            
            <div className='pt-7 py-2 font-bold '>
                General
            </div>

            <div className="w-full">
                <Link to="/" className="block hover:bg-[#f5f5f5] py-3 pl-1 rounded">
                    Home
                </Link>
                <Link to="/gigs" className="block hover:bg-[#f5f5f5] py-3 pl-1 rounded">
                    Gigs
                </Link>
            </div>

        </div>

    );
};

export default MobileMenu;
