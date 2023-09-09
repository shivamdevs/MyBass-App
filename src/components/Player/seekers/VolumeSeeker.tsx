import React from 'react';
import InputRange from '../../common/InputRange';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';
import audioPlayer from '../../../core/audio';
import { useDebounce, useUpdateEffect } from 'react-unique-hooks';

function VolumeSeeker() {

    const { state: { setting: { volume, muted } }, dispatch } = usePlayerContext();

    const [debounce, setDebounce] = React.useState<number>(volume);

    useUpdateEffect(() => {
        audioPlayer.volume = +debounce.toFixed(1);
    }, [volume]);

    useDebounce(() => {
        dispatch({ type: "VOLUME", payload: debounce })
    }, 100, [debounce]);

    return (
        <div className="range-box volume-range">
            <InputRange max={1} divisor={10} disabled={muted} value={debounce} onChange={(vol: number) => setDebounce(vol)} />
        </div>
    );
}

export default VolumeSeeker;
