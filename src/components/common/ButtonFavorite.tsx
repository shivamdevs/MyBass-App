import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';

function ButtonFavorite({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { state: { option: { expand } } } = usePlayerContext();
    return (
        <Tippy content="Add to Favorites">
            <button type="button" className={classNames("round", (!expand && "small"), className)} {...props}>
                <MdFavoriteBorder />
            </button>
        </Tippy>
    );
}

export default ButtonFavorite;
