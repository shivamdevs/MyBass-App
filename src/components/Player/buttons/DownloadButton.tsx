import React from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineFileDownload } from 'react-icons/md';
import usePlayerContext from '../../../context/PlayerContext/usePlayerContext';

function DownloadButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { state: { option: { expand } }, dispatch } = usePlayerContext();
    return (
        <AnimatePresence>
            {!expand && <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Tippy content="Download">
                    <button type="button" onClick={() => dispatch({ type: "PANEL", payload: "download" })} className={classNames("round small", className)} {...props}>
                        <MdOutlineFileDownload />
                    </button>
                </Tippy>
            </motion.span >}
        </AnimatePresence >
    );
}

export default DownloadButton;
