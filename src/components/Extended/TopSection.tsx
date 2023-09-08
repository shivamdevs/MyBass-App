import Thumbnail from '../common/Thumbnail';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import getInfo from '../../util/getInfo';

function TopSection() {
    const { state: { song } } = usePlayerContext();
    const songInfo = getInfo(song);
    return (
        <div className="flex-1 flex w-full items-center justify-center">
            <div className="w-full max-w-5xl flex flex-nowrap gap-10 items-center">
                <Thumbnail image={song?.image} size={320} className="shadow-2xl" />
                <div className="flex flex-col gap-4">
                    <div className="text-3xl font-bold line-clamp-1">{songInfo?.name}</div>
                    <div className="text-xl opacity-50 font-semibold line-clamp-1">{songInfo?.artists}</div>
                </div>
            </div>
        </div>
    );
}

export default TopSection;
