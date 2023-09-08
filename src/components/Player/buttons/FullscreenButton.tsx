import React from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { CgArrowsExpandRight, CgCompressRight } from 'react-icons/cg';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

function FullscreenButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {

    const { state: { option: { expand } }, dispatch } = usePlayerContext();
    return (
        <Tippy content={expand ? "Exit fullscreen" : "Fullscreen"}>
            <button type="button" className={classNames("round", (!expand && "small"), className)} {...props} onClick={() => dispatch({ type: (expand ? "COMPRESS" : "EXPAND") })}>
                {expand ? <CgCompressRight /> : <CgArrowsExpandRight />}
            </button>
        </Tippy>
    );
}

export default FullscreenButton;
