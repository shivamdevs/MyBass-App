import { LazyImage } from "neatkit/components";

function LoadCard() {
    return (
        <div className=" h-48 min-w-[160px] last-of-type:pr-3 pl-3">
            <div className="relative bg-gray-800 w-full h-full rounded-xl overflow-hidden">
                <LazyImage
                    className="inset-0"
                    style={{ position: "absolute" }}
                    thumbnail="/icon-black.png"
                />
            </div>
        </div>
    );
}

export default LoadCard;
