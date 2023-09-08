import React from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';
import audioPlayer from '../../../core/audio';

function MuteButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {

    const { state: { setting: { muted }, option: { expand } }, dispatch } = usePlayerContext();

    React.useEffect(() => {
        audioPlayer.muted = muted;
    }, [muted]);
    return (
        <Tippy content={muted ? "Unmute" : "Mute"}>
            <button type="button" className={classNames("round", (!expand && "small"), className)} {...props} onClick={() => dispatch({ type: (muted ? "UNMUTE" : "MUTE") })}>
                {muted ? <ImVolumeMute2 /> : <ImVolumeMedium />}
            </button>
        </Tippy>
    );
}

export default MuteButton;
