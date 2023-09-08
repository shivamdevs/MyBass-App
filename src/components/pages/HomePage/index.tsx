import Module from '../../../types/Module';
import HomeCarousel from './Carousel';
import Albums from './Albums';
import Playlists from './Playlists';
import Charts from './Charts';

export interface HomePageProps {
    result?: Module | null;
}
function HomePage({ result }: HomePageProps) {

    return (
        <>
            <HomeCarousel data={result?.data?.trending} />
            <Albums data={result?.data?.albums} />
            <Playlists data={result?.data?.playlists} />
            <Charts data={result?.data?.charts} />
        </>
    );
}

export default HomePage;