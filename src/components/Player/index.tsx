import usePlayerContext from "../../context/PlayerContext/usePlayerContext";
import Thumbnail from "../common/Thumbnail";
import AudioSeeker from "./seekers/AudioSeeker";
import NavigateNextButton from "./buttons/NavigateNextButton";
import NavigatePreviousButton from "./buttons/NavigatePreviousButton";
import PlayPauseButton from "./buttons/PlayPauseButton";
import ButtonFavorite from "../common/ButtonFavorite";
import InfoButton from "./buttons/InfoButton";
import { AnimatePresence, motion } from "framer-motion";
import QueueButton from "./buttons/QueueButton";
import DownloadButton from "./buttons/DownloadButton";
import RepeatLoopButton from "./buttons/RepeatLoopButton";
import ShuffleButton from "./buttons/ShuffleButton";
import MuteButton from "./buttons/MuteButton";
import VolumeSeeker from "./seekers/VolumeSeeker";
import FullscreenButton from "./buttons/FullscreenButton";
import classNames from "classnames";
import { HeightAnimatedSection } from "../common/AnimatedSection";
import getInfo from "../../util/getInfo";

function MainPlayer() {
    const { state } = usePlayerContext();


    const songInfo = getInfo(state.song);

    return (
        <footer className={classNames("w-full mt-auto group", (state.option.expand && "exp"))}>
            <HeightAnimatedSection toggle={!!state.song}>
                <div className="w-full pt-3 shadow-2xl relative z-10 pb-4 px-3 bg-[#000a] group-[.exp]:bg-[#0005] flex flex-col gap-3 rounded-lg overflow-hidden">
                    <AudioSeeker />
                    <div className="flex w-full flex-nowrap gap-5 justify-between items-center">
                        <AnimatePresence initial={false} mode="wait">
                            {state.option.expand && <motion.div
                                className="inline-flex flex-1 flex-nowrap"
                                key="player-left-info-expand"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            ><ButtonFavorite /></motion.div>}
                            {!state.option.expand && <motion.div
                                key="player-left-info-base"
                                className="inline-flex flex-1 flex-nowrap gap-5 items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Thumbnail
                                    image={state.song?.image}
                                    size={50}
                                    round={8}
                                />
                                <div className="">
                                    <div className="w-full line-clamp-1">{songInfo?.name}</div>
                                    <div className="w-full line-clamp-1 text-xs font-medium text-gray-500">{songInfo?.artists}</div>
                                </div>
                                <div className="inline-flex flex-nowrap gap-1 pl-5">
                                    <ButtonFavorite />
                                    <InfoButton />
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                        <div className="inline-flex gap-2 items-center">
                            <ShuffleButton className="mr-2" />
                            <NavigatePreviousButton />
                            <PlayPauseButton />
                            <NavigateNextButton />
                            <RepeatLoopButton className="ml-2" />
                        </div>
                        <div className="inline-flex flex-1 flex-nowrap gap-2 group-[.exp]:gap-5 transition-all items-center justify-end">
                            <DownloadButton />
                            <QueueButton />
                            <MuteButton />
                            <VolumeSeeker />
                            <FullscreenButton />
                        </div>
                    </div>
                </div>
            </HeightAnimatedSection>
        </footer>
    );
}

export default MainPlayer;
