import Album from "./Album";
import Artist from "./Artist";
import Chart from "./Chart";
import Image from "./Image";
import Playlist from "./Playlist";
import Song from "./Song";
import Trending from "./Trending";

export default interface Module {
    data?: {
        albums: Album[];
        charts: Chart[];
        playlists: Playlist[];
        trending: Trending;
    };
    message: string | null;
    status: string;
}


export interface ModuleAlbums {
    data?: {
        id: string;
        name: string;
        year: string;
        releaseDate: string;
        songCount: string;
        url: string;
        primaryArtistsId: string;
        primaryArtists: string;
        featuredArtists: Artist[];
        artists: Artist[];
        image: Image[];
        songs: Song[];
    };
    message: string | null;
    status: string;
}

export interface ModuleSongs {
    data?: Song[];
    message: string | null;
    status: string;
}