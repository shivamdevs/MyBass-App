import React from 'react';
import audioPlayer from '..';
import { useEventListener, useUpdateEffect } from 'react-unique-hooks';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

export default function useSongTiming(): [currentTime: number | null, duration: number | null, update: (time?: number) => void] {
    const [timePlayed, setTimePlayed] = React.useState<number | null>(null);
    const [totalDuration, setTotalDuration] = React.useState<number | null>(null);

    const { state } = usePlayerContext();

    function updateTimings() {
        setTimePlayed(audioPlayer.currentTime ?? null);
        setTotalDuration(audioPlayer.duration ?? null);
    }

    useUpdateEffect(() => {
        if (state.song?.duration) setTotalDuration(+state.song.duration);
    }, [state.song?.duration]);

    function update(time?: number) {
        time && setTimePlayed(time);
    }

    useEventListener("canplay", updateTimings, audioPlayer);
    useEventListener("timeupdate", updateTimings, audioPlayer);
    useEventListener("loadedmetadata", updateTimings, audioPlayer);

    return [timePlayed, totalDuration, update];
}