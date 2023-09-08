import { GiNextButton } from 'react-icons/gi';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';
import Tippy from '@tippyjs/react';
import useSongControlDisabled from '../../../core/audio/hooks/useSongControlDisabled';

function NavigateNextButton() {

    const { dispatch } = usePlayerContext();

    const { nextDisabled } = useSongControlDisabled();

    return (
        <Tippy content="Next">
            <button type="button" className="round big" disabled={nextDisabled} onClick={() => dispatch({ type: "NEXT" })}>
                <GiNextButton />
            </button>
        </Tippy>
    );
}

export default NavigateNextButton;
