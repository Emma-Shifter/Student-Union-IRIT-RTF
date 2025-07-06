import Header from "../components/header";
import npDesc from '../img/np-desc.png';
import btnHero from '../img/event-btn.svg';
import btnArrow from '../img/btn-arrow.svg';
import Masonry from 'react-masonry-css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../img/np', false, /\.(png|jpe?g|svg)$/));

const data = {
    title: 'НЕДЕЛЯ ПЕРВОКУРСНИКОВ',
    image: images,
    desc1: 'Серия из нескольких мероприятий, направленных на знакомство первокурсников друг с другом, внеучебной жизнью, нашей командой и институтом.',
    desc2: 'Каждый год неделя первокурсников проходит в разных тематиках, но неизменным остается одно: она приносит яркие эмоции и остается в памяти участников надолго.'
}

const breakpointColumnsObj = {
            default: 3,
            1100: 2,
            700: 1,
        };

export default function EventPage(props) {
    return (
        <div className="App EventPage">
            <Header></Header>
            <h1>Наши мероприятия</h1>
            <section className="event-hero">
                <h1 className="hero-title">{data.title}</h1>
                <div>
                    <img src={btnHero}></img>
                </div>
            </section>

            <div className="event-desc">
                <div>
                    <p>{data.desc1}</p>
                    <br></br>
                    <p>{data.desc2}</p>
                </div>
                <div className="event-desc-img">
                    <img src={npDesc}></img>
                </div>
            </div>

            <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid-column">
                {data.image.map((img, index) => (
                    <div key={index} className="masonry-item">
                        <img src={img} alt={img.alt} />
                    </div>
                ))}
            </Masonry>

            <div className="VK-link-container">
                <p>Больше <span>фотографий</span> в нашей группе вк</p>
                <div className="VK-link-container-BTN">
                    <p>МЫ В ВК</p>
                    <img src={btnArrow}></img>
                </div>
            </div>
        </div>
    )
}