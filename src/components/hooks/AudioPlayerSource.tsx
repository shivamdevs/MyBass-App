import { useEventListener, useUpdateEffect } from 'react-unique-hooks';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import audioPlayer from '../../core/audio';
import audioPlay from '../../core/audio/controller/play';
import appData from '../../core/app/appData';
import getArtists from '../../util/getArtists';
import convertHTMLEntities from '../../util/convertHTMLEntities';

function AudioPlayerSource() {

    const { state, dispatch } = usePlayerContext();

    useEventListener("canplay", () => {
        if (audioPlayer.dataset.autoplay === "true") {
            audioPlay();
            delete audioPlayer.dataset.autoplay;
        }
    }, audioPlayer);

    useEventListener("loadedmetadata", () => {
        if (audioPlayer.dataset.currentTime) {
            const current = parseFloat(audioPlayer.dataset.currentTime);
            if (!isNaN(current)) (audioPlayer.currentTime = current);
            delete audioPlayer.dataset.currentTime;
        }
    }, audioPlayer);

    useEventListener("ended", () => {
        if (audioPlayer.played) {
            if (state.setting.repeat === "all" && state.queue.length - 1 === state.index) {
                audioPlayer.dataset.autoplay = 'true';
                dispatch({ type: "JUMP", payload: 0 });
            } else if (state.setting.repeat === 1) {
                audioPlay();
            } else if (state.setting.repeat !== false && state.index < state.queue.length) {
                audioPlayer.dataset.autoplay = 'true';
                dispatch({ type: "NEXT" });
            }
        }
    }, audioPlayer);

    useUpdateEffect(() => {
        if (state.song) {
            window.document.title = `${convertHTMLEntities(state.song.name)} • ${getArtists(state.song)} • ${appData.name}`;
            if (!audioPlayer.paused) audioPlayer.dataset.autoplay = 'true';
            const source = state.song.downloadUrl.find(url => url.quality === "320kbps")?.link;
            source && (audioPlayer.src = source);
        }
    }, [state.song]);
    return null;
}

export default AudioPlayerSource;
