import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
    title: string;
    subtitle: string;
}

const DropdownItem: React.FC<DropdownProps> = ({ title, subtitle }) => {
    return (
        <div className='cursor-pointer'>
            <p className="text-xl text-gray-700 font-semibold">{title}</p>
            <p className="text-lg text-gray-500">{subtitle}</p>
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
            <DropdownMenuTrigger>
                <div className='flex gap-1'>
                    {triggerText}
                    <ChevronDown size={30} className="pt-1 pb-1 pr-3" />
                </div>
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