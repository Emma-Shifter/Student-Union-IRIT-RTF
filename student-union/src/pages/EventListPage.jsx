import EventCard from "../components/event-card";
import Footer from "../components/footer";
import Header from "../components/header";
// import ImageSlider from "../components/image-slider";
import {eventsList, sliderList} from "../data";

export default function MainPage(props) {
    return (
        <div className="App MainPage">
            <Header></Header>
            <h1>Наши мероприятия</h1>
            {/* <ImageSlider 
                items={sliderList} 
                emptyMessage="Нет оплаченных занятий за этот период"
            /> */}

            <div className="events-list-container">
                {eventsList.map((elem) => (
                    <EventCard cardClass={elem.cardClass} title={elem.title} desc={elem.desc} image={elem.image}></EventCard>
                ))}
            </div>

            <Footer></Footer>
        </div>
    )
}