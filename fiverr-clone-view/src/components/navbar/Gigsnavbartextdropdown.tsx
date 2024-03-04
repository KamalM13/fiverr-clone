import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Search } from "lucide-react"

const Gigsnavbartextdropdown = () => {
    return (
        <div><div className="font-semibold">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-md">Fiverr Pro</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white w-screen">
                            <div className="w-screen max-w-[360px] flex flex-col p-4 space-y-3">
                                <div className="flex gap-x-5 items-center border-[1px] rounded-[5px] p-3">
                                    <div className="p-3">
                                        <Search />
                                    </div>

                                    <div className="flex flex-col gap-y-1">
                                        <span className="text-sm text-main">I'm Looking to Hire</span>
                                        <span className="text-xs text-main2">I'd like to work with Pro freelancers and agencies while using free business tools</span>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 items-center border-[1px] rounded-[5px] p-3">
                                    <div className="p-3">
                                        <Search />
                                    </div>

                                    <div className="flex flex-col gap-y-1">
                                        <span className="text-sm text-main">I'm Looking to Hire</span>
                                        <span className="text-xs text-main2">I'd like to work with Pro freelancers and agencies while using free business tools</span>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div></div>
    )
}

export default Gigsnavbartextdropdown