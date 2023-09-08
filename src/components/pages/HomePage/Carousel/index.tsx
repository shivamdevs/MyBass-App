import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-loading-skeleton';
import Album from '../../../../types/Album';
import Trending from '../../../../types/Trending';
import CarouselItem from './Item';

export interface HomeCarouselProps {
    data?: Trending;
}

function HomeCarousel({ data }: HomeCarouselProps) {
    return (
        <section className="w-full">
            {data?.albums ? <Carousel
                showThumbs={false}
                autoPlay
                className="hero-carousel"
                infiniteLoop
                transitionTime={500}
                // showArrows={false}
                showStatus={false}
                swipeable
            >
                {data.albums.map((album: Album, index: number) => <CarouselItem key={index} data={album} />)}
            </Carousel> : <Skeleton className="aspect-[20/7] min-h-[320px]" baseColor="#111827" highlightColor="#1f2937" />}
        </section>
    );
}

export default HomeCarousel;