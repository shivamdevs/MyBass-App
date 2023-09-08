import classNames from "classnames";
import React from "react";

export interface ScrollableProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
}

function Scrollable({ title, children }: ScrollableProps) {
    return (
        <div className="my-10 @container/scrollable">
            <h2 className="p-3 text-2xl font-family-nunito">{title}</h2>
            <div className={classNames(
                "w-full grid",
                "grid-cols-1",
                "@xs/scrollable:grid-cols-2",
                "@lg/scrollable:grid-cols-3",
                "@2xl/scrollable:grid-cols-4",
                "@3xl/scrollable:grid-cols-5",
                "@4xl/scrollable:grid-cols-6",
                "@5xl/scrollable:grid-cols-7",
                "@6xl/scrollable:grid-cols-8",
                "@7xl/scrollable:grid-cols-9",
                )}>
                {children}
            </div>
        </div>
    );
}

export default Scrollable;