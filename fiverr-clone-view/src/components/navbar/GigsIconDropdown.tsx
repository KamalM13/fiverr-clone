import { User } from "lucide-react"
import GigsSingleIcon from "./GigsSingleIcon"
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

  const notifications = {
    "messages": {
      "user1_id": ["Hello", "Hi there!"],
      "user2_id": ["Hey"],
      "user3_id": ["How are you?"],
      "user4_id": ["Good morning", "Good evening"],
      "user5_id": ["What's up?", "How's it going?"],
      "user6_id": ["Nice to meet you"],
      "user7_id": ["Greetings"]
    },
    "gigsIconType": {
      "type": 'message'
    }
  }
  const notifications1 = {
    "messages": {
      "user1_id": ["Hello", "Hi there!"],
      "user2_id": ["Hey"],
      "user3_id": ["How are you?"],
      "user4_id": ["Good morning", "Good evening"],
      "user5_id": ["What's up?", "How's it going?"],
      "user6_id": ["Nice to meet you"],
      "user7_id": ["Greetings"]
    },
    "gigsIconType": {
      "type": 'bell'
    }
  }


  const navigate = useNavigate()

  return (
    <div className="flex items-center text-main2 gap-x-6">

      <GigsSingleIcon notifications={notifications1} gigsIconType={notifications1.gigsIconType} />
      <GigsSingleIcon notifications={notifications} gigsIconType={notifications.gigsIconType} />
      <div className="text-main2 font-semibold cursor-pointer"
        onClick={() => {
          navigate('/orders')
        }}
      >
        Orders
      </div>
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
            label: 'Team',
            linkTo: `/team`
          },
          {
            label: 'Subscription',
            linkTo: `/subscription`
          },
        ]}
      />
    </div>
  )
}

export default GigsIconDropdown