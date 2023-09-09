import Artist from '../../types/Artist';
import uuid from '../../util/uuid';
import GridCard from './GridCard';
import Scrollable from './Scrollable';

export function ArtistDummyData(): Artist {
    return {
        id: uuid() + '-' + uuid(),
        name: "",
        url: "",
        image: [],
        type: "",
        role: "",
    };
}

export interface ArtistsProps {
    data?: Artist[];
    append?: React.ReactNode;
}
function Artists({ data, append }: ArtistsProps) {
    let items = data || new Array(10).fill(null).map(ArtistDummyData).map(item => ({ ...item, loading: true }));
    items = items.filter(item => item.type !== "song");
    return (
        <>
            <Scrollable title="Artists">
                {items.map((artist: Artist) => <GridCard key={artist.id} api="artists" item={artist} />)}
            </Scrollable>
            {data && data.length === 0 && append}
        </>
    );
}

export default Artists;