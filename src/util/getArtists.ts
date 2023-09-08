import Album from "../types/Album";
import Artist from "../types/Artist";
import Song from "../types/Song";
import convertHTMLEntities from "./convertHTMLEntities";

export type GetArtistsType = Song | Album;

function mapArtists(names: string | Artist[]): string[] {
    if (!names) return [];
    if (Array.isArray(names)) return names.map(artist => mapArtists(artist.name)).flatMap(item => item);
    return names.split(",").map(name => convertHTMLEntities(name.trim()));
}

export default function getArtists(item: GetArtistsType): string {
    return [...mapArtists((item as Album)?.artists), ...mapArtists(item.primaryArtists), ...mapArtists(item.featuredArtists)].filter(artist => !!artist).reduce((accumulate, artist, i) => `${accumulate}${i > 0 ? ", " : ""}${artist}`, "");
}