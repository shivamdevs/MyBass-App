import { GiPreviousButton } from 'react-icons/gi';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';
import Tippy from '@tippyjs/react';
import useSongControlDisabled from '../../../core/audio/hooks/useSongControlDisabled';

function NavigatePreviousButton() {

    const { dispatch } = usePlayerContext();

    const { previousDisabled } = useSongControlDisabled();

    return (
        <Tippy content="Previous">
            <button type="button" className="round big" disabled={previousDisabled} onClick={() => dispatch({ type: "PREVIOUS" })}>
                <GiPreviousButton />
            </button>
        </Tippy>
    );
}

export default NavigatePreviousButton;
