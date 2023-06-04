import React, { useState } from 'react';

interface DropdownAvatarProps {
    imgLink: string;
}

const links = [
    {
        id: 1,
        name: "Profile",
        path: "/categories",
    },
    {
        id: 2,
        name: "Settings",
        path: "/settings",
    },
    {
        id: 3,
        name: "Accout",
        path: "/account",
    },
    {
        id: 4,
        name: "Help",
        path: "/help",
    },
    {
        id: 5,
        name: "Log Out",
        path: "/",
    },
]



const DropdownAvatar: React.FC<DropdownAvatarProps> = ({ imgLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="flex items-center justify-center w-12 h-12 rounded-full"
                    onClick={toggleDropdown}
                >
                    <img
                        src={`${imgLink}`}
                        alt="Avatar"
                        className="object-cover w-10 h-10 rounded-full"
                    />
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 bg-[#0c111b] border border-zinc-600 rounded-lg shadow-md px-1">
                    <ul className="py-1">
                        {/* Map */}
                        {links.map((link) => (
                            <li key={link.id} className="py-2 hover:text-blue-300 px-8 flex flex-col justify-center items-center">
                                <a href={link.path}>{link.name}</a>
                                <hr className='border-t-zinc-600 mt-1 pt-1 w-full'></hr> 
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownAvatar;