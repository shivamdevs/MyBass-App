import { LazyImage } from "neatkit/components";
import Album from "../../../types/Album";
import convertHTMLEntities from "../../../util/convertHTMLEntities";
import PlayButton from "../../../components/common/PlayButton";
import QueueButton from "../../../components/common/QueueButton";

export interface CarouselItemProps {
    data: Album;
}

function CarouselItem({ data }: CarouselItemProps) {
    return (
        <div className="h-[60vh] bg-gray-950 shadow-lg shadow-gray-900 hero-carousel-item overflow-hidden relative rounded-lg">
            <LazyImage
                className="inset-0 left-auto max-w-[70%] w-full"
                style={{ position: "absolute" }}
                thumbnail={data.image.find(img => (img.quality === "50x50"))?.link}
                src={data.image.find(img => (img.quality === "500x500"))?.link}
                imageClass="object-cover inset-0 h-full w-full"
                imageStyle={{ position: "absolute" }}
            />
            <div className="absolute inset-0 right-auto w-full max-w-[80%] bg-[linear-gradient(to_right,_#000,_#000,_#0000)] z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start font-family-comfortaa bg-[#000a] z-10 py-10 px-20">
                <h1 className=" text-3xl text-gray-300 line-clamp-2">{convertHTMLEntities(data.name)}</h1>
                <h2 className=" text-2xl text-gray-500 my-5 line-clamp-2">{convertHTMLEntities([...data.artists, ...data.primaryArtists].map(artist => artist.name).join(",") || "Various Artists")}</h2>
                <div className="absolute right-5 bottom-8 flex flex-nowrap gap-3">
                    <PlayButton />
                    <QueueButton />
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;
