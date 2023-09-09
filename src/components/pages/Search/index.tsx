import { useLocation } from 'react-router-dom';
import Albums from '../../Cards/Albums';
import Playlists from '../../Cards/Playlists';
import Songs from '../../Cards/Songs';
import SearchHeader from './Header';
import SearchError from './SearchError';
import useSearch from './useSearch';
import Artists from '../../Cards/Artists';

function SearchPage() {
    const [result, loading] = useSearch();
    const location = useLocation();

    return (
        <>
            {location.search ? <>
                <SearchHeader loading={loading} result={result} />
                {(location.hash === "" || location.hash === "#songs") && <Songs data={result?.songs.results} append={<SearchError>No matching song found with your search query.</SearchError>} />}
                {(location.hash === "#albums") && <Albums data={result?.albums.results} append={<SearchError>No matching album found with your search query.</SearchError>} />}
                {(location.hash === "#playlists") && <Playlists data={result?.playlists.results} append={<SearchError>No matching playlist found with your search query.</SearchError>} />}
                {(location.hash === "#artists") && <Artists data={result?.artists.results} append={<SearchError>No matching artist found with your search query.</SearchError>} />}
            </> : <SearchError> Type in the field above to search for Songs, Playlists, or Albums etc...</SearchError>}
        </>
    );
}

export default SearchPage;
