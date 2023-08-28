import { MdSearch } from 'react-icons/md';

function Search() {
    return (
        <form className="bg-gray-950 flex flex-nowrap items-center flex-1 max-w-lg rounded-lg overflow-hidden relative h-12">
            <label htmlFor="search-query" className="theme-color text-xl w-14 flex justify-center"><MdSearch /></label>
            <input id="search-query" name="q" type="search" className="bg-transparent w-full outline-none absolute inset-0 pl-14" placeholder="Search for songs, playlists, artists, etc..." />
        </form>
    );
}

export default Search;
