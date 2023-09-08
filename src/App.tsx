import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import MainPlayer from "./components/Player";
import AudioPlayerSource from "./components/hooks/AudioPlayerSource";
import PlayerSettings from "./components/hooks/PlayerSettings";
import RestoreHistory from "./components/hooks/RestoreHistory";
import PlayerContextProvider from "./context/PlayerContext";
import usePlayerContext from "./context/PlayerContext/usePlayerContext";
import Extended from "./components/Extended";
import SideBar from "./components/SideBar";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import toast, { Toaster } from "react-hot-toast";
import Module from "./types/Module";
import { useState } from "react";
import axios from "axios";
import { useDebounce, useEffectOnce } from "react-unique-hooks";
import Footer from "./components/Footer";
import SearchPage from "./components/pages/Search";


function App() {

    useEffectOnce(() => {
        toast.dismiss();
    });

    return (
        <PlayerContextProvider>
            <AudioPlayerSource />
            <RestoreHistory />
            <PlayerSettings />
            <ExtendedApp />
        </PlayerContextProvider>
    );
}


function ExtendedApp() {

    const { state: { queue, option: { expand }, setting: { languages } } } = usePlayerContext();

    const [result, setResult] = useState<Module | null>();
    const [api, setApi] = useState<string>();

    async function fetchRecords() {
        try {
            setApi(toast.loading("Updating Homepage", { id: api }));
            const res = await axios.get<Module>(`${import.meta.env.VITE_API}/modules?language=english,hindi,${languages.join(",")}`);
            setResult(res.data);
            setApi(toast.success("Homepage updated", { id: api }));
        } catch (error) {
            setApi(toast.error("Failed to update Homepage", { id: api }));
            console.log(error);
        }
    }

    useEffectOnce(() => { fetchRecords() });
    useDebounce(() => { fetchRecords() }, 500, [languages]);

    return (
        <>
            <AnimatePresence initial={false}>
                <motion.section
                    key="base-app"
                    className="flex flex-1 flex-col overflow-hidden flex-nowrap w-full gap-[10px] transition-all duration-300"
                    animate={{ opacity: (expand ? 0 : 1), visibility: (expand ? "hidden" : "visible") }}
                >
                    <Header />
                    <section className="flex-1 flex flex-nowrap overflow-hidden gap-[10px]">
                        <SideBar />
                        <section className="flex-[3] rounded-lg bg-[#000a] overflow-hidden">
                            <div className="w-full h-full overflow-auto">
                                <article className="min-h-[100%]">
                                    <Routes>
                                        <Route path="/" index element={<HomePage result={result} />} />
                                        <Route path="/search" element={<SearchPage />} />
                                    </Routes>
                                </article>
                                <Footer />
                            </div>
                        </section>
                    </section>
                </motion.section>
                <Extended />
            </AnimatePresence>
            <MainPlayer />
            <Toaster position="bottom-center" containerStyle={{ bottom: queue.length ? 126 : 16 }} />
        </>
    );
}

export default App;
