import Album from "./Album";
import Chart from "./Chart";
import Playlist from "./Playlist";
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