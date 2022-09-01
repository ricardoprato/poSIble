import { Hero } from '../components/Hero'
import { Description } from '../components/Description'
import { Platforms } from '../components/Platforms'
import { Donate } from '../components/Donate';

export const Home = () => {
    return (
        <>
            <Hero />
            <Description />
            <Platforms />
            <Donate />
        </>
    );
}