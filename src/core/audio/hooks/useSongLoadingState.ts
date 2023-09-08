import React from 'react';
import { useEventListener, useUpdateEffect } from 'react-unique-hooks';
import audioPlayer from '..';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';
import useSongTiming from './useSongTiming';

export default function useSongLoadingState(): [buffering: boolean] {
    const [buffering, setBuffering] = React.useState<boolean>(true);

    const [curr, dur] = useSongTiming();

    const { state } = usePlayerContext();

    useUpdateEffect(() => {
        setBuffering(true);
    }, [state.song]);
    useUpdateEffect(() => {
        (!curr || !dur) && setBuffering(true);
    }, [curr, dur]);

    function handleWaiting(): void {
        setBuffering(true);
    }

    function handleCanPlay(): void {
        setBuffering(false);
    }

    useEventListener("canplay", handleCanPlay, audioPlayer);
    useEventListener("playing", handleCanPlay, audioPlayer);
    useEventListener("waiting", handleWaiting, audioPlayer);
    useEventListener("timeupdate", handleCanPlay, audioPlayer);
    useEventListener("loadedmetadata", handleWaiting, audioPlayer);

    return [buffering];
}