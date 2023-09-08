import { LazyImage } from "neatkit/components";
import Album from "../../../../types/Album";
import useColors from "../../../../core/hooks/useColors";
import ButtonPlay from "../../../common/ButtonPlay";
import ButtonQueue from "../../../common/ButtonQueue";
import { useNavigate } from 'react-router-dom';
import getInfo from "../../../../util/getInfo";

export interface CarouselItemProps {
    data: Album;
}

function CarouselItem({ data }: CarouselItemProps) {

    const colors = useColors(data.image);

    const navigate = useNavigate();

    const info = getInfo(data);

    return (
        <div className="aspect-[20/7] min-h-[320px] bg-gray-950 shadow-lg shadow-gray-900 hero-carousel-item overflow-hidden relative rounded-lg" style={{backgroundColor: colors.background, color: colors.color}}>
            <LazyImage
                className="inset-0 left-auto max-w-[60%] w-full"
                style={{ position: "absolute" }}
                thumbnail={data.image.find(img => (img.quality === "50x50"))?.link}
                src={data.image.find(img => (img.quality === "500x500"))?.link}
                imageClass="object-cover inset-0 h-full w-full"
                imageStyle={{ position: "absolute" }}
            />
            <div className="absolute inset-0 left-auto w-full max-w-[61%] z-10" style={{ backgroundImage: `linear-gradient(to left, ${colors.result?.hex || "#000000"}00 0%, ${colors.background} 100%)`}}></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start text-left font-family-comfortaa bg-[#000a] z-10 py-10 px-20 cursor-pointer" onClick={() => navigate(`/${data.type}/${data.id}`)}>
                <h1 className="w-full font-bold text-3xl opacity-60 line-clamp-2">{info?.name}</h1>
                <h2 className="w-full font-medium text-xl opacity-40 my-5 line-clamp-2">{info?.artists}</h2>
            </div>
            <div className="absolute right-5 bottom-8 flex flex-nowrap gap-3 z-10">
                <ButtonPlay item={data} api="albums" />
                <ButtonQueue item={data} api="albums" />
            </div>
        </div>
    );
}

export default CarouselItem;