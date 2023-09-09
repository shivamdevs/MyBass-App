import Song from '../../types/Song';
import uuid from '../../util/uuid';
import GridCard from './GridCard';
import Scrollable from './Scrollable';

export function SongDummyData(): Song {
    return {
        id: uuid() + '-' + uuid(),
        name: "",
        album: {
            id: "",
            name: "",
            url: "",
        },
        year: "",
        releaseDate: "",
        duration: "",
        label: "",
        primaryArtists: "",
        primaryArtistsId: "",
        featuredArtists: "",
        featuredArtistsId: "",
        explicitContent: 0,
        playCount: 0,
        language: "",
        hasLyrics: "",
        url: "",
        copyright: "",
        image: [],
        downloadUrl: [],
    };
}

export interface SongsProps {
    data?: Song[];
    append?: React.ReactNode;
}
function Songs({ data, append }: SongsProps) {
    const items = data || new Array(10).fill(null).map(SongDummyData).map(item => ({ ...item, loading: true }));
    return (
        <>
            <Scrollable title="Songs">
                {items.map((song: Song) => <GridCard key={song.id} api="songs" item={song} />)}
            </Scrollable>
            {data && data.length === 0 && append}
        </>
    );
}

export default Songs;