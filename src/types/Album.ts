import uuid from "../util/uuid";
import Artist from "./Artist";
import Image from "./Image";
import Song from "./Song";

export default interface Album {
    id: string;
    name: string;
    year: string;
    type: string;
    playCount: string;
    language: string;
    explicitContent: string;
    url: string;
    primaryArtists: Artist[];
    featuredArtists: Artist[];
    artists: Artist[];
    image: Image[];
    songs: Song[];
}


export function AlbumDummyData(): Album {
    return {
        id: uuid() + '-' +  uuid(),
        name: "",
        year: "",
        type: "",
        playCount: "",
        language: "",
        explicitContent: "",
        url: "",
        primaryArtists: [],
        featuredArtists: [],
        artists: [],
        image: [],
        songs: [],
    };
}