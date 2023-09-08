import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce, useEffectOnce } from 'react-unique-hooks';
import axios from 'axios';
import convertToFormDataString from '../../../util/convertToFormDataString';
import Searches from '../../../types/Searches';
import toast from 'react-hot-toast';

function SearchPage() {
    const location = useLocation();
    const [searches, setSearch] = useState<Searches | null>();
    const [api, setApi] = useState<string>();

    async function performSearchQuery() {
        const query = new URLSearchParams(location.search).get("q");
        if (query !== null && query.trim() !== "") {
            try {
                setApi(toast.loading("Refreshing searches...", { id: api }));
                const result = await axios.get<Searches>(`${import.meta.env.VITE_API}/search/all?query=${convertToFormDataString(query)}`);
                setSearch(result.data);
                console.log(result.data);
                setApi(toast.success("Search result updated", { id: api }));
            } catch (error) {
                setApi(toast.error("Failed to fetch Searches", { id: api }));
                console.error(error);
            }
        } else {
            setSearch(undefined);
        }
    }

    useDebounce(() => { performSearchQuery(); }, 500, [location.search]);
    useEffectOnce(() => { performSearchQuery(); });

    return (
        <>
        </>
    );
}

export default SearchPage;
