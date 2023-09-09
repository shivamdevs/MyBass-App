import { MdSearch } from 'react-icons/md';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <Routes>
            <Route path="/search" element={
                <div className="bg-[#fff1] flex flex-nowrap items-center flex-1 max-w-lg rounded-lg overflow-hidden relative h-12">
                    <label htmlFor="search-query" className="theme-color text-xl w-14 flex justify-center"><MdSearch /></label>
                    <input id="search-query" name="q" type="search" className="bg-transparent w-full outline-none absolute inset-0 pl-14 border border-transparent focus-visible:border-[#fa6] rounded-lg" autoFocus value={new URLSearchParams(location.search).get("q") || ""} onChange={({ target }: { target: HTMLInputElement }) => navigate(`/search?${target.value ? `q=${encodeURIComponent(target.value).replace(/%20/g, '+')}` : ""}${location.hash}`, { replace: true })} placeholder="Search for songs, playlists, albums, etc..." />
                </div>
            } />
            <Route path="/*" element={
                <button className="bg-[#fff1] hover:bg-[#fa63] focus-visible:bg-[#fa63] transition-all flex flex-nowrap items-center flex-1 max-w-lg rounded-lg overflow-hidden relative h-12" onClick={() => navigate("/search")}>
                    <span className="theme-color text-xl w-14 flex justify-center"><MdSearch /></span>
                    <span className="bg-transparent w-full outline-none absolute inset-0 pl-14 inline-flex items-center justify-start border border-transparent">Search for songs, playlists, albums, etc...</span>
                </button>
            } />
        </Routes>
    );
}

export default Search;