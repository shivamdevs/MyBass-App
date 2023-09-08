import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdQueueMusic } from 'react-icons/md';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

function QueueButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { state: { option: { expand } }, dispatch } = usePlayerContext();
    return (
        <AnimatePresence>
            {!expand && <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Tippy content="Queue">
                    <button type="button" onClick={() => dispatch({ type: "PANEL", payload: "queue" })} className={classNames("round small", className)} {...props}>
                        <MdQueueMusic />
                    </button>
                </Tippy>
            </motion.span >}
        </AnimatePresence >
    );
}

export default QueueButton;
