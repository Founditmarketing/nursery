import Hero from '../components/Hero';
import About from '../components/About';
import Inventory from '../components/Inventory';
import Specials from '../components/Specials';
import Reviews from '../components/Reviews';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Inventory />
            <Specials />
            <Reviews />
        </main>
    );
}
