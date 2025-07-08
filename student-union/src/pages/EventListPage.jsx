import EventCard from "../components/event-card";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from 'react-router-dom';
// import ImageSlider from "../components/image-slider";
import {eventsList, sliderList} from "../data";

export default function EventListPage(props) {
    return (
        <div className="App EventListPage">
            <Header></Header>
            <h1>Наши мероприятия</h1>
            {/* <ImageSlider 
                items={sliderList} 
                emptyMessage="Нет оплаченных занятий за этот период"
            /> */}

            <div className="events-list-container">
                {eventsList.map((elem) => (
                    <Link to={`/event/${elem.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <EventCard cardClass={elem.cardClass} title={elem.title} desc={elem.desc} image={elem.image}></EventCard>
                    </Link>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}