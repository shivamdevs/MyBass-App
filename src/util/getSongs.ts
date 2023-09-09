import Song from '../types/Song';
import Album from '../types/Album';
import Playlist from '../types/Playlist';
import axios from 'axios';
import { ModuleAlbums, ModuleSongs } from '../types/Module';
import Chart from '../types/Chart';
import Artist from '../types/Artist';

export type GetSongsItemTypes = Song | Album | Playlist | Chart | Artist;

export type GetSongsFetchType = ModuleAlbums | ModuleSongs;

export type GetSongsApiHook = "songs" | "albums" | "playlists" | "artists";

async function getSongs<Type extends GetSongsItemTypes>(item: Type, api: GetSongsApiHook): Promise<Song[] | undefined | null> {
    try {
        const result = await axios.get<GetSongsFetchType>(`${import.meta.env.VITE_API}/${api}?id=${item.id}`);
        console.log(result.data);
        return (result.data as Exclude<GetSongsFetchType, ModuleSongs>).data?.songs || (result.data as ModuleSongs)?.data;
    } catch (err) {
        console.error(err);
        return null;

    }
}

export default getSongs;
