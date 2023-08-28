import Album, { AlbumDummyData } from '../../../types/Album';
import GridCard from '../../../components/Cards/GridCard';
import Scrollable from '../Scrollable';

export interface AlbumsProps {
    data?: Album[];
}
function Albums({ data }: AlbumsProps) {
    data = data || new Array(20).fill(null).map(AlbumDummyData).map(item => ({ ...item, loading: true }));
    return (
        <Scrollable title="Albums">
            {data.map((album: Album) => <GridCard key={album.id} {...album} />)}
        </Scrollable>
    );
}

export default Albums;
