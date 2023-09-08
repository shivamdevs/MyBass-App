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