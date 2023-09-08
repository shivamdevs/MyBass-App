import PlayerOption from "../../../types/PlayerOption";
import { PlayerContextType } from "../context";

export type PlayerContextOptionAction =
    { type: "EXPAND" } |
    { type: "COMPRESS" } |
    { type: "PANEL", payload: PlayerOption["panel"] };

export default function playerContextOptionReducer(state: PlayerContextType["option"], action: PlayerContextOptionAction): PlayerContextType["option"] {
    switch (action.type) {
        case "EXPAND":
            return { ...state, expand: true };
        case "COMPRESS":
            return { ...state, expand: false };
        case "PANEL":
            return { ...state, panel: (state.panel === action.payload ? false : action.payload) };
        default: return state;
    }
}