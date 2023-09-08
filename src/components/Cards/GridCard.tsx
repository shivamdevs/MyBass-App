import Album from '../../types/Album';
import { LazyImage } from 'neatkit/components';
import convertHTMLEntities from '../../util/convertHTMLEntities';
import { OasisMenu, OasisMenuBreak, OasisMenuItem, OasisMenuTrigger } from 'oasismenu';
import uuid from '../../util/uuid';
import Skeleton from 'react-loading-skeleton';
import ButtonPlay from '../common/ButtonPlay';
import { GetSongsApiHook } from '../../util/getSongs';
import Playlist from '../../types/Playlist';
import Chart from '../../types/Chart';

export type GridCardItemType = Album | Playlist | Chart;

export interface GridCardProps {
    item: GridCardItemType;
    api: GetSongsApiHook;
    loading?: boolean;
}

function GridCard({ item, loading, api }: GridCardProps) {
    const { image, id } = item;
    const name = (item as Album).name || (item as Playlist).title;
    const artists = [...((item as Album).artists || []), ...((item as Album).featuredArtists || [])];
    const oasisName = id + uuid();
    return (
        <div className="p-2">
            <OasisMenuTrigger name={oasisName}>
                <div className="relative bg-gray-800 rounded-lg group transition-all duration-300 overflow-hidden p-2">
                    <div className="overflow-hidden rounded-lg  ">
                        <LazyImage
                            ratio="1 / 1"
                            thumbnail={image.find(img => (img.quality === "50x50"))?.link}
                            src={image.find(img => (img.quality === "500x500"))?.link}
                        >
                            {!loading && <div className="absolute z-10 inset-0 backdrop-blur-sm bg-[#0007] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300"></div>}
                            {loading ? <Skeleton className="inset-0 z-10" style={{ position: "absolute" }} /> : <ButtonPlay item={item} api={api} className="absolute right-2 -bottom-12 transition-all duration-300 invisible opacity-0 group-hover:visible group-hover:bottom-2 group-hover:opacity-100" />}
                        </LazyImage>
                    </div>
                    <div className=" line-clamp-1 mt-2 font-medium">{convertHTMLEntities(name) || <Skeleton width="75%" />}</div>
                    <div className=" line-clamp-1 text-gray-500 text-sm">{!loading ? (convertHTMLEntities(artists.map(artist => artist.name).join(",")) || "Various Artists") : <Skeleton />}</div>
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