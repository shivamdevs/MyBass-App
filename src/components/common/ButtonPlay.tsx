import React from 'react';
import classNames from 'classnames';
import { GiPlayButton } from 'react-icons/gi';
import Tippy from '@tippyjs/react';
import getSongs, { GetSongsApiHook, GetSongsItemTypes } from '../../util/getSongs';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import toast from 'react-hot-toast';

export interface ButtonPlayProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    item: GetSongsItemTypes;
    api: GetSongsApiHook;
}

function ButtonPlay(props: ButtonPlayProps) {

    const { dispatch } = usePlayerContext();

    async function playButton() {
        const api = toast.loading("Getting songs...");
        const songs = await getSongs(props.item, props.api);
        console.log(songs);
        if (songs) {
            dispatch({ type: "SET", payload: songs, autoplay: true });
            dispatch({ type: "JUMP", payload: 0 });
            const length = songs.length, suffix = length === 1 ? "" : "s";
            toast.success(`Playing ${length} song${suffix}`, { id: api });
        } else {
            toast.error(`Failed to fetch songs. Try again.`, { id: api });
        }
    }

    return (
        <Tippy content="Play">
            <button {...props} onClick={playButton} className={classNames(
                "theme-bg theme-bg-hover theme-bg-focus-visible theme-bg-active p-3 rounded-full text-xl text-black font-medium transition-all",
                props.className,
            )}><GiPlayButton /></button>
        </Tippy>
    );
}

export default ButtonPlay;