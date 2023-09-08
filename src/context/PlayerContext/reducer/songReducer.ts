import Song from "../../../types/Song";
import { PlayerContextType } from "../context";

export type PlayerContextSongAction = { type: "UPDATE", payload: Song | null } | { type: "REMOVE" };

export default function playerContextSongReducer(state: PlayerContextType["song"], action: PlayerContextSongAction): PlayerContextType["song"] {
    switch (action.type) {
        case "UPDATE":
            return action.payload;
        case "REMOVE":
            return null;
        default: return state;
    }
}