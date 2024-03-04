import GigsSingleIcon from "./GigsSingleIcon"


const GigsIconDropdown = () => {
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


  return (
    <div className="flex items-center text-main2 gap-x-6">

      <GigsSingleIcon notifications={notifications1} gigsIconType={notifications1.gigsIconType} />
      <GigsSingleIcon notifications={notifications} gigsIconType={notifications.gigsIconType} />
      
    </div>
  )
}

export default GigsIconDropdown