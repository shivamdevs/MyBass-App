import audioPlayer from "..";

export default function audioToggle(state?: boolean) {
    if (state !== undefined) {
        if (state) {
            if (audioPlayer.paused) audioPlayer.play();
        } else {
            if (!audioPlayer.paused) audioPlayer.pause();
        }
    } else {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
}