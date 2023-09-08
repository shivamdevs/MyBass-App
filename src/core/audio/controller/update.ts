import Process from "../../../types/Process";
import audioPlayer from "..";
import play from "./play";

export default function update(process?: Process) {
    console.log(process);
    if (!process?.song) return;
    audioPlayer.src = process.song.downloadUrl.find(url => url.quality === "320kbps")?.link || "";
    audioPlayer.dataset.songId = process.song.id;
    audioPlayer.addEventListener("canplay", () => {
        process.restore && (audioPlayer.currentTime = process.restore);
        process.autoplay && play();
    }, { once: true });
}