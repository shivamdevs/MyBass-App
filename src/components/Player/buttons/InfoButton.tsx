import Tippy from '@tippyjs/react';
import React from 'react';
import { BsInfoCircle } from "react-icons/bs";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import classNames from 'classnames';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

function InfoButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { dispatch } = usePlayerContext();
    return (
        <Tippy content="Song info">
            <button type="button" onClick={() => dispatch({ type: "PANEL", payload: "song" })} className={classNames("round small", className)} {...props}>
                <BsInfoCircle />
                {/* {false ? <AiOutlineCloseCircle /> : <BsInfoCircle />} */}
            </button>
        </Tippy>
    )
}

export default InfoButton;
