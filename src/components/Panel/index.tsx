import React from 'react';
import { WidthAnimatedSection } from '../common/AnimatedSection';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import { IoMdClose } from 'react-icons/io';

function PanelView() {
    const { state: { option: { panel } } } = usePlayerContext();
    return (
        <>
            <PanelLayout title="Queue" toggle={panel === "queue"} />
            <PanelLayout title="Download" toggle={panel === "download"} />
            <PanelLayout title="Song" toggle={panel === "song"} />
        </>
    );
}

export default PanelView;

export interface PanelLayoutProps {
    title?: React.ReactNode;
    toggle?: boolean;
}

function PanelLayout({ title, toggle }: PanelLayoutProps) {
    const { dispatch } = usePlayerContext();
    return (
        <WidthAnimatedSection
            className="h-full overflow-hidden"
            toggle={toggle}
        >
            <section className="w-full h-full">
                <section className="w-80 h-full bg-[#000a] shadow-xl rounded-lg gap-3 p-3 flex flex-col flex-nowrap">
                    <header className="w-full flex items-center flex-nowrap justify-between">
                        <div className="flex-1 font-medium text-gray-400">{title}</div>
                        <button className="round small" content="Close" onClick={() => dispatch({ type: "PANEL", payload: false })}>
                            <IoMdClose />
                        </button>
                    </header>
                    <section className="relative w-full flex-1 rounded-lg overflow-hidden   ">
                        <section className="bg-gray-900 overflow-auto absolute inset-0 w-full h-full">
                        </section>
                    </section>
                </section>
            </section>
        </WidthAnimatedSection>
    );
}