import { PlayerContextType } from "../context";
import playerContextIndexReducer, { PlayerContextIndexAction } from "./indexReducer";
import playerContextOptionReducer, { PlayerContextOptionAction } from "./optionReducer";
import playerContextQueueReducer, { PlayerContextQueueAction } from "./queueReducer";
import playerContextSettingReducer, { PlayerContextSettingAction } from "./settingReducer";
import playerContextSongReducer, { PlayerContextSongAction } from "./songReducer";

export type PlayerContextAction = PlayerContextQueueAction | PlayerContextSongAction | PlayerContextIndexAction | PlayerContextSettingAction | PlayerContextOptionAction;

function playerContextReducer(state: PlayerContextType, action: PlayerContextAction): PlayerContextType {
    return {
        queue: playerContextQueueReducer(state.queue, action as PlayerContextQueueAction),
        index: playerContextIndexReducer(state.index, action as PlayerContextIndexAction),
        song: playerContextSongReducer(state.song, action as PlayerContextSongAction),
        setting: playerContextSettingReducer(state.setting, action as PlayerContextSettingAction),
        option: playerContextOptionReducer(state.option, action as PlayerContextOptionAction),
    };
}

export default playerContextReducer;

