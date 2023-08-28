import React from 'react';
import classNames from 'classnames';
import { GiPlayButton } from 'react-icons/gi';
import Tippy from '@tippyjs/react';

function PlayButton(props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <Tippy content="Play">
            <button {...props} className={classNames(
                "theme-bg theme-bg-hover theme-bg-focus-visible theme-bg-active p-3 rounded-full text-xl text-black font-medium transition-all",
                props?.className,
            )}><GiPlayButton /></button>
        </Tippy>
    );
}

export default PlayButton;
