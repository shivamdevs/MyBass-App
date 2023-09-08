import React from 'react'
import Song from '../../types/Song';
import { PlayerContextAction } from './reducer';
import PlayerSetting from '../../types/PlayerSetting';
import PlayerOption from '../../types/PlayerOption';

export type PlayerContextType = {
    queue: Song[];
    song: Song | null;
    index: number;
    setting: PlayerSetting;
    option: PlayerOption;
};

export type PlayerContextValue = {
    state: PlayerContextType;
    dispatch: React.Dispatch<PlayerContextAction>;
}

export const initialPlayerContext: PlayerContextType = {
    queue: [],
    index: -1,
    song: null,
    setting: {
        muted: false,
        volume: 1,
        repeat: "all",
        quality: "320kbps",
        languages: [],
    },
    option: {
        expand: false,
        panel: false,
    }
};

const PlayerContext = React.createContext<PlayerContextValue>({ state: initialPlayerContext, dispatch: () => initialPlayerContext });

export default PlayerContext;
