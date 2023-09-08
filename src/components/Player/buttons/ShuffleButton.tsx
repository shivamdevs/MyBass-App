import React from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { TbArrowsShuffle } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

function ShuffleButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {

    const { state: { option: { expand } } } = usePlayerContext();
    return (
        <AnimatePresence>
            {!expand && <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Tippy content="Shuffle">
                    <button type="button" className={classNames("round", className)} {...props}>
                        <TbArrowsShuffle />
                    </button>
                </Tippy>
            </motion.span>}
        </AnimatePresence>
    );
}

export default ShuffleButton;
