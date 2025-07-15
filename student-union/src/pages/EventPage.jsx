import Header from "../components/header";
import btnHero from '../img/event-btn.svg';
import btnArrow from '../img/btn-arrow.svg';
import Masonry from 'react-masonry-css';
import { useParams } from 'react-router-dom';
import Footer from "../components/footer";
import {eventsList} from "../data";

const breakpointColumnsObj = {
            default: 3,
            1100: 2,
            700: 1,
        };

export default function EventPage(props) {
    const { eventId } = useParams();  // Получаем eventId из URL
    const data = eventsList.find(item => item.id === eventId);

    return (
        <div className="App EventPage">
            <Header></Header>
            <h1>Наши мероприятия</h1>
            <section style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5)), url(${data.heroImage}) center/cover`
                }} className="event-hero">
                <h1 className="hero-title">{data.title}</h1>
                <div>
                    <img src={btnHero}></img>
                </div>
            </section>

            <div className="event-desc">
                <div>
                    <p>{data.desc}</p>
                    <br></br>
                    <p>{data.descAdd}</p>
                </div>
                <div className="event-desc-img">
                    <img src={data.descImage}></img>
                </div>
            </div>

            <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid-column">
                {data.eImages.map((img, index) => (
                    <div key={index} className="masonry-item">
                        <img src={img} alt={img.alt} />
                    </div>
                ))}
            </Masonry>

            <div className="VK-link-container">
                <p>Больше <span>фотографий</span> в нашей группе вк</p>
                <a style={{ textDecoration: "none"}} href="https://vk.com/irit_rtf" className="VK-link-container-BTN">
                    <p>МЫ В ВК</p>
                    <img src={btnArrow}></img>
                </a>
            </div>
            <Footer></Footer>
        </div>
    )
}