import React from 'react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

interface DropdownItem {
    label: string;
    onClick?: () => void;
}

interface UserDropDownProps {
    triggerText: string;
    items: DropdownItem[];
}

const UserDropDown: React.FC<UserDropDownProps> = ({ triggerText, items }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{triggerText}</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white flex-col p-3 space-y-1">
                {items.map((item, index) => (
                    <DropdownMenuItem key={index} onClick={item.onClick} className="text-lg text-gray-700 hover:text-green-500">{item.label}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropDown;
