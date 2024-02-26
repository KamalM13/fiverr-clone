import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
    title: string;
    subtitle: string;
}

const DropdownItem: React.FC<DropdownProps> = ({ title, subtitle }) => {
    return (
        <div>
            <p className="text-2xl text-gray-700 font-semibold">{title}</p>
            <p className="text-xl text-gray-500">{subtitle}</p>
        </div>
    );
};

interface CustomDropdownMenuProps {
    items: DropdownProps[];
    triggerText: string;
}

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({ items, triggerText }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{triggerText}</DropdownMenuTrigger>
            <DropdownMenuTrigger>
                <ChevronDown size={30} className="pt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white flex-col p-6 space-y-3">
                {items.map((item, index) => (
                    <DropdownItem key={index} title={item.title} subtitle={item.subtitle} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CustomDropdownMenu;