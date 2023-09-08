
import React from "react";
import { useEventListener } from "react-unique-hooks";
import audioPlayer from "..";

export default function useSongPlayableState(): [playing: boolean, ended: boolean] {

    const [state, setState] = React.useState<boolean>(false);
    const [ended, setEnded] = React.useState<boolean>(false);


    function handleState(): void {
        setState(!audioPlayer.paused);
        setEnded(audioPlayer.ended || audioPlayer.currentTime === audioPlayer.duration);
    }

    useEventListener("load", handleState, audioPlayer);
    useEventListener("play", handleState, audioPlayer);
    useEventListener("ended", handleState, audioPlayer);
    useEventListener("pause", handleState, audioPlayer);
    useEventListener("canplay", handleState, audioPlayer);
    useEventListener("timeupdate", handleState, audioPlayer);
    useEventListener("loadedmetadata", handleState, audioPlayer);

    return [state, ended];
}