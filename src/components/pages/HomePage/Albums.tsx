import Album from '../../../types/Album';
import uuid from '../../../util/uuid';
import GridCard from '../../Cards/GridCard';
import Scrollable from '../../Cards/Scrollable';

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
}
function Albums({ data }: AlbumsProps) {
    console.log(data);
    data = data || new Array(10).fill(null).map(AlbumDummyData).map(item => ({ ...item, loading: true }));
    data = data.filter(item => item.type !== "song");
    return (
        <Scrollable title="Albums">
            {data.map((album: Album) => <GridCard key={album.id} api="albums" item={album} />)}
        </Scrollable>
    );
}

export default Albums;