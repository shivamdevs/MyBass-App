import Album from "./Album";
import Song from "./Song";

export default interface Trending {
    songs: Song[];
    albums: Album[];
}