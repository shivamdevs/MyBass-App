import React from "react";
import PlayerContext, { PlayerContextValue } from "./context";

function usePlayerContext():PlayerContextValue {
    const context = React.useContext(PlayerContext);
    if (!context) throw new Error("Unable to access Player Context API.");
    return context;
}

export default usePlayerContext
