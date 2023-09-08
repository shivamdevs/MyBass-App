import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import { useEffectOnce, useLocalStorage, useUpdateEffect } from 'react-unique-hooks';
import QueueHistory from '../../types/QueueHistory';
import appData from '../../core/app/appData';
import { ApiResponseSongDetails } from '../../types/ApiResponse';
import axios from 'axios';
import useSongTiming from '../../core/audio/hooks/useSongTiming';
import audioPlayer from '../../core/audio';

function RestoreHistory() {

    const { state, dispatch } = usePlayerContext();

    const [currentTime] = useSongTiming();

    const [queueHistory, setHistory, unsetHistory] = useLocalStorage<QueueHistory>(appData.storage.history, null);

    useUpdateEffect(() => {
        if (state.queue.length && state.song) {
            setHistory({ queue: state.queue.map(song => song.id), song: [state.song?.id, currentTime || 0] });
        } else {
            unsetHistory();
        }
    }, [currentTime, setHistory, state.queue, state.song, unsetHistory]);

    useEffectOnce(() => {
        if (queueHistory && queueHistory.queue) {
            axios.get<ApiResponseSongDetails>(`/songs?id=${queueHistory.queue.join(",")}`).then(({ data }) => {
                const index = data.data.findIndex(song => song.id === queueHistory.song[0]);
                if (index > -1) audioPlayer.dataset.currentTime = `${queueHistory.song[1] || 0}`;
                dispatch({ type: "SET", payload: data.data });
                dispatch({ type: "JUMP", payload: index || 0 });
            }).catch((err) => {
                console.error(err);
            });
        }
    });

    return null;
}

export default RestoreHistory
