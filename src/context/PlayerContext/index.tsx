import React from "react";
import PlayerContext, { initialPlayerContext } from "./context";
import playerContextReducer from "./reducer";
import { useDebugInformation, useUpdateEffect } from "react-unique-hooks";

export interface PlayerContextProviderProps {
    children?: React.ReactNode;
}

function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [state, dispatch] = React.useReducer(playerContextReducer, initialPlayerContext);

    useDebugInformation("Player", state);

    useUpdateEffect(() => {
        if (state.queue.length) {
            const index = state.index;
            if (index >= state.queue.length) {
                return dispatch({ type: "JUMP", payload: index });
            }
            dispatch({ type: "UPDATE", payload: state.queue[index] });
        }
    }, [state.queue, state.index]);
    return (
        <PlayerContext.Provider value={{ state, dispatch }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
