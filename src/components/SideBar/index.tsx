import classNames from 'classnames';
import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { PiPlaylistBold } from 'react-icons/pi';
import { MdSearch } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToggle } from 'react-unique-hooks';

function SideBar() {
    return (
        <aside className="flex-1 flex flex-col flex-nowrap gap-[10px]">
            <div className="bg-[#000a] rounded-lg overflow-hidden">
                <SideButton to="/" icon={<HiOutlineHome />}>Home</SideButton>
                <SideButton to="/search" icon={<MdSearch />}>Search</SideButton>
            </div>
            <div className="bg-[#000a] rounded-lg overflow-hidden flex-1 flex flex-col flex-nowrap">
                <div className="py-2 px-5 font-medium text-gray-400 border-b border-b-gray-900 flex flex-nowrap gap-3 items-center">
                    <PiPlaylistBold /><span className="text-sm">YOUR PLAYLISTS</span>
                </div>
                <div className="overflow-auto flex-1">
                    
                </div>
            </div>
        </aside>
    );
}

export default SideBar;

interface SideButtonProps {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    to: string;
}

function SideButton({ className, icon, children, to }: SideButtonProps) {

    const location = useLocation();
    const navigate = useNavigate();

    const [at, setAt] = useToggle(false);

    React.useLayoutEffect(() => {
        setAt(location.pathname === to);
    }, [location.pathname, setAt, to]);

    return (
        <button type="button" onClick={() => navigate(to)} className={classNames(
            "w-full px-2 py-3 flex flex-nowrap items-center transition-all",
            {
                "bg-[#ffffff15] hover:bg-[#fff2] theme-color": at,
                "text-gray-500 hover:bg-[#ffffff09]": !at,
            },
            className
        )}>
            <span className="px-3 text-xl">{icon}</span>
            <span className="">{children}</span>
        </button>
    );
}
