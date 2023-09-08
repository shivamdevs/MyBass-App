import Album from "./Album";
import Artist from "./Artist";
import Image from "./Image";
import Playlist from "./Playlist";
import Song from "./Song";

export default interface Searches {
    data?: {
        topQuery: { result: TopQuery[], position: number };
        albums: { result: Album[], position: number };
        artists: { result: Artist[], position: number };
        playlists: { result: Playlist[], position: number };
        songs: { result: Song[], position: number };
    };
    message: string | null;
    status: string;
}

export type TopQuery = SearchAlbum;


export interface SearchAlbum {
    id: string;
    title: string;
    image: Image[];
    artist: string;
    url: string;
    type: string;
    description: string;
    position: number;
    year: string;
    songIds: string;
    language: string;
}