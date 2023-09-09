import classNames from 'classnames';
import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { MdFeedback } from 'react-icons/md';
import { SiProgress } from 'react-icons/si';
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
                    <MdFeedback /><span className="text-sm">MyBass</span><SiProgress />
                </div>
                <p className="px-4 font-medium text-gray-400 text-sm my-4">Features to be implemented</p>
                <ul className="list-disc px-8 text-xs font-medium text-gray-400">
                    <li>Login system</li>
                    <li>Favorite button</li>
                    <li>Shuffle button</li>
                    <li>Side-panel</li>
                    <li>Playlist queue</li>
                    <li>Mobile view</li>
                    <li>Context menu</li>
                    <li>Content page</li>
                </ul>
                <div className="overflow-auto flex-1">
                    <hr className="h-0 border-t border-t-gray-800 my-3" />
                    <p className="px-4 text-sm font-medium text-gray-400">If you want to give any suggestion or facing any issue, fill a <a href="https://forms.gle/4aJBPZuiTfahCNQL8" className="theme-color" target="_blank" rel="noopener noreferrer">form here</a></p>
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
