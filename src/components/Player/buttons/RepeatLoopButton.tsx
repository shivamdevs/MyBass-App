import React from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from 'react-icons/tb';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

function RepeatLoopButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { state: { setting: { repeat }, option: { expand } }, dispatch } = usePlayerContext();
    return (
        <AnimatePresence>
            {!expand && <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Tippy content={repeat === "all" ? "Repeat one" : (repeat === 1) ? "No repeat" : "Repeat all"}>
                    <button type="button" className={classNames("round", className)} {...props} onClick={() => dispatch({ type: "REPEAT" })}>
                        {repeat === "all" ? <TbRepeat /> : (repeat === 1) ? <TbRepeatOnce /> : <TbRepeatOff />}
                    </button>
                </Tippy>
            </motion.span >}
        </AnimatePresence >
    );
}

export default RepeatLoopButton;
