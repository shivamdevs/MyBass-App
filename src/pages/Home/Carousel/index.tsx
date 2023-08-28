import { Carousel } from 'react-responsive-carousel';
import Trending from '../../../types/Trending';
import CarouselItem from './Item';
import "./carousel.scss";
import Album from '../../../types/Album';
import Skeleton from 'react-loading-skeleton';

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
            </Carousel> : <Skeleton className="h-[60vh] -mb-[20px] mt-[10px]" baseColor="#111827" highlightColor="#1f2937" />}
        </section>
    );
}

export default HomeCarousel;
