import Album from '../../types/Album';
import { LazyImage } from 'neatkit/components';
import convertHTMLEntities from '../../util/convertHTMLEntities';
import PlayButton from '../common/PlayButton';
import { OasisMenu, OasisMenuBreak, OasisMenuItem, OasisMenuTrigger } from 'oasismenu';
import uuid from '../../util/uuid';
import Skeleton from 'react-loading-skeleton';

export interface GridCardProps extends Album {
    loading?: boolean;
}

function GridCard({ image, name, artists, primaryArtists, id, loading }: GridCardProps) {
    const oasisName = id + uuid();
    return (
        <div className="min-w-[160px] mr-3">
            <OasisMenuTrigger name={oasisName}>
                <div className="relative bg-gray-800 rounded-lg group transition-all duration-300 overflow-hidden p-2">
                    <div className="overflow-hidden rounded-lg  ">
                        <LazyImage
                            width={144}
                            height={144}
                            thumbnail={image.find(img => (img.quality === "50x50"))?.link}
                            src={image.find(img => (img.quality === "500x500"))?.link}
                        >
                            {!loading && <div className="absolute z-10 inset-0 backdrop-blur-sm bg-[#0007] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300"></div>}
                            {loading ? <Skeleton className="inset-0 z-10" style={{ position: "absolute" }} /> : <PlayButton className="absolute right-2 -bottom-12 transition-all duration-300 invisible opacity-0 group-hover:visible group-hover:bottom-2 group-hover:opacity-100" />}
                        </LazyImage>
                    </div>
                    <div className=" line-clamp-1 mt-2 font-medium">{convertHTMLEntities(name) || <Skeleton width="75%" />}</div>
                    <div className=" line-clamp-1 text-gray-500 text-sm">{!loading ? (convertHTMLEntities([...artists, ...primaryArtists].map(artist => artist.name).join(",")) || "Various Artists") : <Skeleton />}</div>
                    <button type="button" className="absolute inset-0 invisible"></button>
                </div>
            </OasisMenuTrigger>
            <OasisMenu name={oasisName}>
                <OasisMenuItem content="Add to Queue" />
                <OasisMenuItem content="Play now" />
                <OasisMenuBreak />
                <OasisMenuItem content="Add to Library" />
                <OasisMenuItem content="Add as Playlist" />
            </OasisMenu>
        </div>
    )
}

export default GridCard;
