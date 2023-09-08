import Languages from "../../../types/Languages";
import PlayerSetting from "../../../types/PlayerSetting";
import toggleFromArray from "../../../util/toggleFromArray";
import { PlayerContextType } from "../context";

export type PlayerContextSettingAction =
    { type: "SETTING", payload: PlayerSetting } |
    { type: "MUTE" } |
    { type: "UNMUTE" } |
    { type: "VOLUME", payload: number } |
    { type: "REPEAT" } |
    { type: "LANGUAGE", payload: Languages };

export default function playerContextSettingReducer(state: PlayerContextType["setting"], action: PlayerContextSettingAction): PlayerContextType["setting"] {
    switch (action.type) {
        case "SETTING":
            return { ...state, ...action.payload };
        case "MUTE":
            return { ...state, muted: true };
        case "UNMUTE":
            return { ...state, muted: false };
        case "VOLUME":
            return { ...state, volume: action.payload };
        case "REPEAT":
            return { ...state, repeat: state.repeat === "all" ? 1 : state.repeat === 1 ? false : "all" };
        case "LANGUAGE":
            return { ...state, languages: toggleFromArray<Languages>([...state.languages], action.payload).sort() };
        default: return state;
    }
}