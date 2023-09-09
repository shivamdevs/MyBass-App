import Album from '../../types/Album';
import uuid from '../../util/uuid';
import GridCard from './GridCard';
import Scrollable from './Scrollable';

export function AlbumDummyData(): Album {
    return {
        id: uuid() + '-' + uuid(),
        name: "",
        year: "",
        type: "",
        playCount: "",
        language: "",
        explicitContent: "",
        url: "",
        primaryArtists: [],
        featuredArtists: [],
        artists: [],
        image: [],
        songs: [],
    };
}

export interface AlbumsProps {
    data?: Album[];
    append?: React.ReactNode;
}
function Albums({ data, append }: AlbumsProps) {
    let items = data || new Array(10).fill(null).map(AlbumDummyData).map(item => ({ ...item, loading: true }));
    items = items.filter(item => item.type !== "song");
    return (
        <>
            <Scrollable title="Albums">
                {items.map((album: Album) => <GridCard key={album.id} api="albums" item={album} />)}
            </Scrollable>
            {data && data.length === 0 && append}
        </>
    );
}

export default Albums;