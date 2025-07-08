import EventCard from "../components/event-card";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from 'react-router-dom';
import {eventsList, sliderList} from "../data";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function EventListPage(props) {
    return (
        <div className="App EventListPage">
            <Header></Header>
            <h1>Наши мероприятия</h1>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderList.map((elem) => (
                    <SwiperSlide>
                        <img src={elem.image}></img>
                        <p className="slider-text">{elem.title}</p>
                    </SwiperSlide>

                ))}
            </Swiper>

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