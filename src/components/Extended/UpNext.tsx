import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import Thumbnail from '../common/Thumbnail';
import useSongTiming from '../../core/audio/hooks/useSongTiming';
import { AnimatePresence, motion } from 'framer-motion';
import getInfo from '../../util/getInfo';

function UpNext() {

    const { state } = usePlayerContext();
    const song = state.queue[state.index + 1];

    const songInfo = getInfo(song);

    const [current, total] = useSongTiming();

    return (
        <AnimatePresence>
            {song && current && total && current / total * 100 >= 90 && <motion.div
                key={song.id}
                className="absolute top-[10%] right-[10%] w-[80%] max-w-sm bg-gray-950 p-2 rounded shadow-lg flex flex-nowrap gap-3"
                initial={{ opacity: 0, y: "-60%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-60%" }}
                transition={{ duration: 0.2 }}
            >
                <Thumbnail
                    image={song.image}
                    size={50}
                    round={8}
                />
                <div className="text-white w-[calc(100%_-_50px_-_16px)] font-semibold">
                    <div className="line-clamp-1 w-full">Up Next</div>
                    <div className="line-clamp-1 w-full">
                        <span className="text-sm text-gray-300">{songInfo?.name}</span>
                        <span className="text-xs font-medium text-gray-500"> • {songInfo?.artists}</span>
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
    );
}

export default UpNext;
