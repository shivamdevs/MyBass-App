import Song from '../types/Song';
import Album from '../types/Album';
import Playlist from '../types/Playlist';
import axios from 'axios';
import { ModuleAlbums } from '../types/Module';
import Chart from '../types/Chart';

export type GetSongsItemTypes = Song | Album | Playlist | Chart;

export type GetSongsFetchType = ModuleAlbums;

export type GetSongsApiHook = "songs" | "albums" | "playlists" | "artists";

async function getSongs<Type extends GetSongsItemTypes>(item: Type, api: GetSongsApiHook): Promise<Song[] | undefined | null> {
    const typeCheck = (item as Exclude<Type, Song>).type;
    try {
        if (typeCheck === "song") return null;
        const result = await axios.get<GetSongsFetchType>(`${import.meta.env.VITE_API}/${api}?id=${item.id}`);
        console.log(result.data);
        return result.data.data?.songs;
    } catch (err) {
        console.error(err);
        return null;

    }
}

export default getSongs;
