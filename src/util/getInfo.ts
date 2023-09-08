import Album from "../types/Album";
import Song from "../types/Song";
import convertHTMLEntities from "./convertHTMLEntities";
import getArtists from "./getArtists";
import getMappedArtists, { GetMappedArtistsResult } from "./getMappedArtists";

export type GetInfoType = Song | Album | null;

export type GetInfoResult = {
    name: string;
    artists: string;
    mappedArtists: GetMappedArtistsResult[];
};

export default function getInfo(item?: GetInfoType): GetInfoResult | null {
    if (!item) return null;
    return {
        name: convertHTMLEntities(item.name),
        artists: getArtists(item),
        mappedArtists: getMappedArtists(item),
    };
}
