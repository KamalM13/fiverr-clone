import { Globe } from "lucide-react";
import CustomDropdownMenu from "../custom-components/CustomDropdownMenu";
import { Link, useLocation } from "react-router-dom";
import UserDropDown from "../custom-components/UserDropDown";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import newRequest from "@/utils/newRequest";




const RegularMenu = () => {

    const [username, setUsername] = useState(null);
    useEffect(() => {
        const getUsername = async () => {
            try {
                const res = await newRequest.get('/users');
                setUsername(res.data);
            } catch (error) {
                setUsername(null);
                console.log(username)
            }
        };

        if (!username) {
            getUsername();
        }
    }, [username]);

    const { pathname } = useLocation()
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
            {username && <>
                <Link to='/login'>Become a Seller</Link>
            </>
            }
            {(pathname !== '/login') && (!username) ? (
                <>
                    <Button variant="outline" size={'sm'} className="hover:bg-green-600 hover:text-white font-bold rounded-xl">Join</Button>
                    <Link to='/login'>Sign in</Link>
                </>
            ) : username ? (
                <UserDropDown
                    triggerText="Profile"
                    items={[
                        {
                            label: 'Profile',
                            linkTo: `/profile/${username}`
                        },
                        {
                            label: 'Gigs',
                            linkTo: `/gigs`
                        },
                        {
                            label: 'Messages',
                            linkTo: `/messages`
                        },
                        {
                            label: 'Orders',
                            linkTo: `/orders`
                        },
                        {
                            label: 'My Gigs',
                            linkTo: `/userGigs`
                        },
                        {
                            label: 'Logout',
                            linkTo: `/logout`
                        }
                    ]}
                />
                ) : (
                   <div></div>     
            )}
        </div>
    );
};

export default RegularMenu;
