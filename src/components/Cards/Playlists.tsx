import Playlist from '../../types/Playlist';
import uuid from '../../util/uuid';
import GridCard from './GridCard';
import Scrollable from './Scrollable';

export function PlaylistDummyData(): Playlist {
    return {
        id: uuid() + '-' + uuid(),
        userId: "",
        title: "",
        subtitle: "",
        type: "",
        image: [],
        url: "",
        songCount: "",
        firstname: "",
        followerCount: "",
        lastUpdated: "",
        explicitContent: "",
    };
}

export interface PlaylistsProps {
    data?: Playlist[];
    append?: React.ReactNode;
}
function Playlists({ data, append }: PlaylistsProps) {
    let items = data || new Array(10).fill(null).map(PlaylistDummyData).map(item => ({ ...item, loading: true }));
    items = items.filter(item => item.type !== "song");
    return (
        <>
            <Scrollable title="Playlists">
                {items.map((playlist: Playlist) => <GridCard key={playlist.id} api="playlists" item={playlist} />)}
            </Scrollable>
            {data && data.length === 0 && append}
        </>
    );
}

export default Playlists;