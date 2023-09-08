import React from 'react';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';
import useSongLoadingState from './useSongLoadingState';

function useSongControlDisabled(): { disabled: boolean, previousDisabled: boolean, nextDisabled: boolean } {
    const [disabled, setDisabled] = React.useState<boolean>(true);
    const [next, setNext] = React.useState<boolean>(true);
    const [previous, setPrevious] = React.useState<boolean>(true);

    const [buffering] = useSongLoadingState();

    const { state } = usePlayerContext();

    React.useEffect(() => {
        let pool = true;
        if (state.song) {
            pool = buffering;
        }
        setDisabled(pool);
    }, [buffering, state.song]);

    React.useEffect(() => {
        let pool = true;
        if (state.queue.length) {
            pool = !state.queue[state.index + 1];
        }
        setNext(pool);
    }, [disabled, state.index, state.queue]);

    React.useEffect(() => {
        let pool = true;
        if (state.queue.length) {
            pool = !state.queue[state.index - 1];
        }
        setPrevious(pool);
    }, [disabled, state.index, state.queue]);

    return {
        disabled,
        nextDisabled: next,
        previousDisabled: previous,
    };
}

export default useSongControlDisabled;
