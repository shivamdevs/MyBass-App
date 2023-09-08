import React from "react";
import getRandomContrastColor from "../../util/getRandomContrastColor";
import { FastAverageColor, FastAverageColorResult } from "fast-average-color";
import Image from "../../types/Image";

export type BackgroundColorHook = {
    background: string;
    color: "#ffffff" | "#000000";
    scheme: "dark" | "light";
    result?: FastAverageColorResult;
}

export default function useColors(image?: Image[]): BackgroundColorHook {
    const [color, setColor] = React.useState<BackgroundColorHook>({ background: getRandomContrastColor(), color: "#ffffff", scheme: "dark" });

    React.useEffect(() => {
        if (image) {
            const source = image.find(img => img.quality === "50x50")?.link;
            if (source) {
                const fac = new FastAverageColor();

                fac.getColorAsync(source, { algorithm: "simple" })
                    .then(color => {
                        setColor({
                            result: color,
                            background: color.hexa,
                            color: color.isDark ? "#ffffff" : "#000000",
                            scheme: color.isDark ? "dark" : "light",
                        });

                    })
                    .catch(e => {
                        console.error(e);
                        setColor({ background: getRandomContrastColor(), color: "#ffffff", scheme: "dark" });
                    }).finally(() => {
                        fac.destroy();
                    });
            }
        }
    }, [image]);

    return color;
}