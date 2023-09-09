import React, { useEffect } from 'react';
import { useDebounce, useEffectOnce } from 'react-unique-hooks';
import Searches from '../../../types/Searches';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import convertToFormDataString from '../../../util/convertToFormDataString';

export default function useSearch(): [result: Searches["data"], loading: boolean] {
    const location = useLocation();
    const [searches, setSearch] = React.useState<Searches | null>();
    const [loading, setLoading] = React.useState<boolean>(false);

    async function performSearchQuery() {
        const query = new URLSearchParams(location.search).get("q");
        if (query !== null && query.trim() !== "") {
            try {
                setLoading(true);
                const result = await axios.get<Searches>(`${import.meta.env.VITE_API}/search/all?query=${convertToFormDataString(query)}`);
                setSearch(result.data);
            } catch (error) {
                toast.error("Failed to fetch search results");
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            setSearch(undefined);
        }
    }

    useDebounce(() => { performSearchQuery(); }, 500, [location.search]);
    useEffect(() => { setLoading(true); }, [location.search]);
    useEffectOnce(() => { performSearchQuery(); });

    return [searches?.data, loading];
}
