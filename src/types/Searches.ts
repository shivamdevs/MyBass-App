import Album from "./Album";
import Artist from "./Artist";
import Playlist from "./Playlist";
import Song from "./Song";

export default interface Searches {
    data?: {
        albums: { results: Album[], position: number };
        artists: { results: Artist[], position: number };
        playlists: { results: Playlist[], position: number };
        songs: { results: Song[], position: number };
    };
    message: string | null;
    status: string;
}