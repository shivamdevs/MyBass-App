import { PlayerContextType } from "../context";

export type PlayerContextIndexAction = { type: "PREVIOUS", } | { type: "NEXT" } | { type: "JUMP", payload: number };

export default function playerContextIndexReducer(state: PlayerContextType["index"], action: PlayerContextIndexAction): PlayerContextType["index"] {
    switch (action.type) {
        case "NEXT":
            return state + 1;
        case "PREVIOUS":
            return state - 1;
        case "JUMP":
            return action.payload;
        default: return state;
    }
}