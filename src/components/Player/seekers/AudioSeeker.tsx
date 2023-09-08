import InputRange from "../../common/InputRange";
import audioPlayer from "../../../core/audio";
import parseTime from '../../../util/parseTime';
import useSongBufferPercent from '../../../core/audio/hooks/useSongBufferPercent';
import useSongTiming from '../../../core/audio/hooks/useSongTiming';

function AudioSeeker() {

    const [currentTime, totalDuration, update] = useSongTiming();

    const bufferPercent = useSongBufferPercent();

    return (
        <div className="flex flex-nowrap w-full items-center text-gray-600 group-[.exp]:text-white font-black text-xs font-family-comfortaa tracking-widest min-h-[16px]">
            <span className="min-w-[50px]">{parseTime(currentTime)}</span>
            <div className="range-box">
                <div className="buffer" style={{ right: `${100 - bufferPercent}%` }}></div>
                <InputRange max={totalDuration} value={currentTime} onChange={(seek: number) => { audioPlayer.currentTime = seek; update(+seek) }} />
            </div>
            <span className="min-w-[50px] text-right">{parseTime(totalDuration)}</span>
        </div>
    );
}

export default AudioSeeker;
