import { motion } from 'framer-motion';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import useColors from '../../core/hooks/useColors';
import TopSection from './TopSection';
import UpNext from './UpNext';

function Extended() {


    const { state } = usePlayerContext();

    const colors = useColors(state.song?.image);

    return (
        <>
            {state.option.expand && <motion.section
                key="extended-app"
                className="absolute inset-0 flex justify-center items-center flex-col flex-nowrap p-10 pb-36"
                // onClick={() => dispatch({ type: "COMPRESS" })}
                initial={{ opacity: 0, visibility: "hidden", scale: 1.25 }}
                animate={{ opacity: 1, visibility: "visible", scale: 1 }}
                exit={{ opacity: 0, visibility: "hidden", scale: 1.25 }}
                transition={{ duration: 0.25 }}
                style={{ backgroundColor: colors.background, color: colors.color, colorScheme: colors.scheme, transition: "background-color 500ms, color 500ms, color-scheme 500ms" }}
            >
                <TopSection />
                <UpNext />
            </motion.section>}
        </>
    )
}

export default Extended;
