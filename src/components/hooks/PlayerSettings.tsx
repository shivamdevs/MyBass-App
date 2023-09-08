import appData from '../../core/app/appData';
import PlayerSetting from '../../types/PlayerSetting';
import { useEffectOnce, useLocalStorage, useUpdateEffect } from 'react-unique-hooks';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';

function PlayerSettings() {
    const [setting, setSetting] = useLocalStorage<PlayerSetting | null>(appData.storage.setting, null);

    const { state, dispatch } = usePlayerContext();

    useEffectOnce(() => {
        if (setting) {
            dispatch({ type: "SETTING", payload: setting });
        }
    });

    useUpdateEffect(() => {
        setSetting(state.setting);
    }, [setSetting, state.setting]);

    return null;
}

export default PlayerSettings;
