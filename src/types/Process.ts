import Song from "./Song";

type Process = {
    song?: Song;
    index: number;
    restore?: number;
    autoplay?: boolean;
} | null;

export default Process;