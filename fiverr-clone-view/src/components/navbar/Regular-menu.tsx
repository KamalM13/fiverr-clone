import { Globe } from "lucide-react";
import CustomDropdownMenu from "../custom-components/CustomDropdownMenu";
import { Link } from "react-router-dom";
import UserDropDown from "../custom-components/UserDropDown";
import { Button } from "../ui/button";


interface RegularMenuProps {
    currentUser: any; // Update with currentUser type
}

const RegularMenu: React.FC<RegularMenuProps> = ({ currentUser }) => {
    return (
        <div className="hidden md:flex gap-6 items-center font-semibold text-lg">
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
            {currentUser.username ==='test' ? (
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
    );
};

export default RegularMenu;
