import React from 'react';
import classNames from 'classnames';
import { MdOutlineQueueMusic } from 'react-icons/md';
import Tippy from '@tippyjs/react';

function QueueButton(props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <Tippy content="Add to Queue">
            <button {...props} className={classNames(
                "theme-bg theme-bg-hover theme-bg-focus-visible theme-bg-active p-3 rounded-full text-xl text-black font-medium transition-all",
                props?.className,
            )}><MdOutlineQueueMusic /></button>
        </Tippy>
    );
}

export default QueueButton;
