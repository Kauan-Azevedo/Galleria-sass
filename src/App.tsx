import { Gallery } from './components/Gallery/Gallery';
import { Navbar } from './components/Navbar/Navbar';
import { Card } from './components/Card/Card';
import { data } from './mocks/data';
import { Footer } from './components/Footer/footer';

function App() {
    const { navData, cards } = data;
    return (
        <>
            <Navbar title={navData.title} items={navData.items} />
            <Gallery>
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            title={card.title}
                            href={card.href}
                            img={card.img}
                        />
                    );
                })}
            </Gallery>
            <Footer />
        </>
    );
}

export default App;
