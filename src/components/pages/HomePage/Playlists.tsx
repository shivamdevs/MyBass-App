import Playlist from '../../../types/Playlist';
import uuid from '../../../util/uuid';
import GridCard from '../../Cards/GridCard';
import Scrollable from '../../Cards/Scrollable';

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
}
function Playlists({ data }: PlaylistsProps) {
    data = data || new Array(10).fill(null).map(PlaylistDummyData).map(item => ({ ...item, loading: true }));
    data = data.filter(item => item.type !== "song");
    return (
        <Scrollable title="Playlists">
            {data.map((playlist: Playlist) => <GridCard key={playlist.id} api="playlists" item={playlist} />)}
        </Scrollable>
    );
}

export default Playlists;