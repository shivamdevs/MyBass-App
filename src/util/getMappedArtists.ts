import Album from "../types/Album";
import Song from "../types/Song";

export type GetMappedArtistsType = Song | Album;

export type GetMappedArtistsResult = {
    name: string;
    id?: string;
}

export default function getMappedArtists(item: GetMappedArtistsType) {
    // console.log(item);
    return [];
}