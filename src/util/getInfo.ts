import Album from "../types/Album";
import Artist from "../types/Artist";
import Playlist from "../types/Playlist";
import Song from "../types/Song";
import convertHTMLEntities from "./convertHTMLEntities";
import getArtists from "./getArtists";

export type GetInfoType = Playlist | Artist | Song | Album | null;

export type GetInfoResult = {
    name: string;
    artists: string;
};

export default function getInfo(item?: GetInfoType): GetInfoResult | null {
    if (!item) return null;
    return {
        name: convertHTMLEntities((item as Song).name || (item as Playlist).title),
        artists: getArtists(item),
    };
}
