import Tippy from '@tippyjs/react';
import audioToggle from '../../../core/audio/controller/toggle';
import useSongPlayableState from '../../../core/audio/hooks/useSongPlayableState';
import { GiPauseButton, GiPlayButton } from 'react-icons/gi';
import { VscDebugRestart } from 'react-icons/vsc';
import LoadSVG from 'react-loadsvg';
import useSongLoadingState from '../../../core/audio/hooks/useSongLoadingState';
import useSongControlDisabled from '../../../core/audio/hooks/useSongControlDisabled';

function PlayPauseButton() {

    const [playing, ended] = useSongPlayableState();
    const [buffer] = useSongLoadingState();

    const { disabled } = useSongControlDisabled();
    return (
        <Tippy content={ended ? "Replay" : playing ? "Pause" : "Play"}>
            <button type="button" disabled={disabled} className="round big scale relative" onClick={() => audioToggle()}>
                {ended ? <VscDebugRestart /> : playing ? <GiPauseButton /> : <GiPlayButton />}
                {buffer && <LoadSVG className="absolute inset-0" size="100%" color="#fff9" lineCap="square" width={6} />}
            </button>
        </Tippy>
    );
}

export default PlayPauseButton;
