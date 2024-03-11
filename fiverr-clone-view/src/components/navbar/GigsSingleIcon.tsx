import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { MessageCount } from "@/lib/messagesNumber";
import { Bell, BellOff, Circle, Mail } from "lucide-react"

interface MessageObject {
    [userId: string]: string[];
}

interface Notifications {
    messages: MessageObject;
}

interface GigsSingleIconProps {
    notifications: Notifications;
    gigsIconType: GigsIconType; // Add GigsIconType to the props interface
}

interface GigsIconType {
    type?: string;
}
const GigsSingleIcon = ({ notifications, gigsIconType }: GigsSingleIconProps) => {

    const messagesCount: number = MessageCount(notifications)
    return (
        <div>
            <HoverCard>
                <HoverCardTrigger className="cursor-pointer">
                    {gigsIconType.type === 'message' ? (
                        <Mail size={20} />
                    ) : (<Bell size={20} />)}
                </HoverCardTrigger>
                <HoverCardContent className="bg-white w-screen max-w-[400px]">
                    <div className="flex flex-col">
                        <div className="flex justify-start h-10 items-center text-black gap-x-1">
                            <div className="pl-3 pt-1">
                                {gigsIconType.type === 'message' ? (<Mail size={16} />) : (<Bell size={16} />)}
                            </div>
                            <div className="flex items-baseline gap-x-1 ">
                                <span className="text-sm font-semibold">
                                    {gigsIconType.type === 'message' ? 'Messages' : 'Notifications'}
                                </span>
                                <span className="text-xs text-main2 font-semibold">
                                    ({messagesCount})
                                </span>
                            </div>
                        </div>
                        <hr className="border-[1px]" />
                        {messagesCount > 0 ? (
                            <div className="h-screen max-h-[400px] overflow-y-scroll flex flex-col">
                                {Object.entries(notifications.messages).map(([userId, messages], index) => (
                                    <div key={index}>
                                        <div className="flex justify-start items-center gap-x-2 py-3">
                                            <div className="pl-3">
                                                <Circle size={30} fill="" />
                                            </div>
                                            <div className="overflow-clip items-center justify-start">
                                                <div className="text-sm font-bold">{userId}</div>
                                                {/* Show only the last message */}
                                                <div className="text-xs truncate text-ellipsis">{messages[messages.length - 1]}</div>
                                            </div>
                                        </div>
                                        <hr className="border-[1px]" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="h-screen max-h-[400px] overflow-scroll flex flex-col gap-y-1 justify-center items-center">
                                <div className="bg-[#f2f2f2] p-3 rounded-full">
                                    <BellOff className="" strokeWidth={1} />
                                </div>
                                <div className="">No Notifications</div>
                                <div className="text-xs max-w-[200px] text-center">
                                    Browse our amazing catalog of Gigs or offer your talent on Fiverr.
                                </div>
                            </div>
                        )}


                    </div>
                </HoverCardContent>
            </HoverCard>

        </div >
    )
}

export default GigsSingleIcon