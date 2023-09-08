import Song from "./Song";

export type ApiResponseSongDetails = {
    status: "SUCCESS" | string;
    message: string | null;
    data: Song[];
}