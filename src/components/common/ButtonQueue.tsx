import React from 'react';
import classNames from 'classnames';
import { MdOutlineQueueMusic } from 'react-icons/md';
import Tippy from '@tippyjs/react';
import toast from 'react-hot-toast';
import getSongs, { GetSongsApiHook, GetSongsItemTypes } from '../../util/getSongs';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';

export interface ButtonQueueProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    item: GetSongsItemTypes;
    api: GetSongsApiHook;
}

function ButtonQueue(props: ButtonQueueProps) {

    const { state: { queue }, dispatch } = usePlayerContext();

    async function queueButton() {
        const api = toast.loading("Getting songs...");
        const songs = await getSongs(props.item, props.api);
        if (songs) {
            const past = queue.reduce((acc, item) => (acc + (songs.find(song => song.id === item.id) ? 1 : 0)), 0),
                length = +songs.length - past;

            if (length === 0) return toast("Songs already in queue", { id: api });

            dispatch({ type: "ADD", payload: songs });
            dispatch({ type: "JUMP", payload: 0 });

            toast.success(`${length ? `Added ${length} song${length === 1 ? "" : "s"} to queue${past ? ", " : ""}` : ""}${past ? `${past} song${past === 1 ? "" : "s"} already in queue` : ""}`, { id: api });
        } else {
            toast.error(`Failed to fetch songs. Try again.`, { id: api });
        }
    }

    return (
        <Tippy content="Add to Queue">
            <button {...props} onClick={queueButton} className={classNames(
                "theme-bg theme-bg-hover theme-bg-focus-visible theme-bg-active p-3 rounded-full text-xl text-black font-medium transition-all",
                props?.className,
            )}><MdOutlineQueueMusic /></button>
        </Tippy>
    );
}

export default ButtonQueue;