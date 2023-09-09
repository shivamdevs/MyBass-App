import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Searches from '../../../types/Searches';

function SearchHeader({ loading, result }: { loading?: boolean, result: Searches["data"] }) {
    return (
        <header className="flex flex-nowrap overflow-x-auto sticky top-0 bg-[#040509] z-10">
            <AnimatePresence>
                {loading && <motion.span className="search-header-screen absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}></motion.span>}
            </AnimatePresence>
            <HeaderButton to="#songs">Songs ({result?.songs.results.length || 0})</HeaderButton>
            <HeaderButton to="#albums">Albums ({result?.albums.results.length || 0})</HeaderButton>
            <HeaderButton to="#playlists">Playlists ({result?.playlists.results.length || 0})</HeaderButton>
            <HeaderButton to="#artists">Artists ({result?.artists.results.length || 0})</HeaderButton>
        </header>
    );
}

export default SearchHeader;

interface HeaderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    to: string;
}
function HeaderButton({ to, ...props }: HeaderButtonProps) {
    const navigate = useNavigate();
    const location = useLocation();

    return <button type="button" className={twMerge(
        "inline-flex z-10 relative flex-1 min-w-min px-4 py-2 items-center justify-center bg-gradient-to-b from-[#fa63] text-[#fa6] to-[#fa60] hover:bg-[#fa67] hover:text-white focus-visible:bg-[#fa67] focus-visible:text-white transition-all",
        (location.hash === to || (location.hash === "" && to === "#top")) && "bg-[#fa6] text-white",

    )} onClick={() => navigate(`${location.pathname}${location.search}${to}`, { replace: true })} {...props}></button>;
}
