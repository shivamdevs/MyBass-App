import DownloadUrl from "./DownloadUrl";
import Languages from "./Languages";

type PlayerSetting = {
    muted: boolean;
    volume: number;
    repeat: false | 1 | "all";
    quality: DownloadUrl["quality"];
    languages: Languages[];
};

export default PlayerSetting;