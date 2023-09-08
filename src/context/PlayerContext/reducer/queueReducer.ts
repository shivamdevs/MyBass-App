import audioPlayer from "../../../core/audio";
import Song from "../../../types/Song";
import { PlayerContextType } from "../context";

export type PlayerContextQueueAction =
    { type: "CLEAR" } |
    { type: "SET", payload: Song[], autoplay?: boolean } |
    { type: "ADD", payload: Song[] };

export default function playerContextQueueReducer(state: PlayerContextType["queue"], action: PlayerContextQueueAction): PlayerContextType["queue"] {
    switch (action.type) {
        case "SET":
            if (action.autoplay) audioPlayer.dataset.autoplay = 'true';
            return [...action.payload];
        case "ADD":
            return [...state, ...action.payload.filter(song => state.find(item => item.id !== song.id))];
        default: return state;
    }
}