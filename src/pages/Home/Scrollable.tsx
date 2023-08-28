import React from "react";

export interface ScrollableProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
}

function Scrollable({title, children }: ScrollableProps) {
    return (
        <div className="my-10">
            <h2 className="p-3 text-2xl font-family-nunito">{title}</h2>
            <div className="w-full overflow-x-auto scroll-hidden">
                <div className="flex flex-nowrap">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Scrollable;
