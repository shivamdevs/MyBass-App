import Albums from './Albums';
import { useFetch } from 'react-unique-hooks';
import Module from '../../types/Module';
import HomeCarousel from './Carousel';
import { useEffect } from 'react';

function HomePage() {
    const [result, , error] = useFetch<Module, Error>(`${import.meta.env.VITE_API}/modules?hindi,english`);

    useEffect(() => {
        console.log(result);
    }, [result]);
    if (error) return "An error ocurred";

    return (
        <section className="w-full">
            <HomeCarousel data={result?.data?.trending} />
            <Albums data={result?.data?.albums} />
            <Albums data={result?.data?.albums} />
        </section>
    );
}

export default HomePage;
