import { Bell, Plus, User } from "lucide-react"
import UserDropDown from "../custom-components/UserDropDown"
import { useEffect, useState } from "react";
import newRequest from "@/utils/newRequest";
import { useNavigate } from "react-router-dom";


const GigsIconDropdown = () => {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const getUsername = async () => {
      try {
        const res = await newRequest.get('/users');
        setUsername(res.data);
      } catch (error) {
        console.error('Failed to fetch username', error);
      }
    };

    if (!username) {
      getUsername();
    }
  }, [username]);

  const [seller, setSeller] = useState(null)

  useEffect(() => {
    const getSeller = async () => {
      try {
        const res = await newRequest.get('/users/isSeller');
        setSeller(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Failed to fetch seller', error);
      }
    };

    if (!seller) {
      getSeller();
    }
  })



  const navigate = useNavigate()

  return (
    <div className="flex items-center text-main2 gap-x-6">
      <Bell size={18}
        className="cursor-pointer"
        onClick={() => {
          navigate('/messages')
        }}
      />
      <div className="text-main2 font-semibold cursor-pointer"
        onClick={() => {
          navigate('/orders')
        }}
      >
        Orders
      </div>
      {seller && <div className="flex items-center justify-center text-white font-semibold cursor-pointer bg-green-400 pr-2 pl-1"
        onClick={() => { 
          navigate('/gig/create')
        }}
      >
        <Plus size={22} className="" />
        Create
      </div>}


      <UserDropDown
        triggerText={<User size={20} />}
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
    </div>
  )
}

export default GigsIconDropdown