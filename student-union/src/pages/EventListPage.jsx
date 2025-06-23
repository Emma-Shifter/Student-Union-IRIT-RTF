import EventCard from "../components/event-card";
import Header from "../components/header";
import image01 from "../img/image-01.png"; 

export default function MainPage(props) {
    return (
        <div className="App MainPage">
            <Header></Header>
            <h1>Наши мероприятия</h1>
            <EventCard 
                title='НЕДЕЛЯ ПЕРВОКУРСНИКОВ' 
                image={image01} 
                desc='Серия из нескольких мероприятий, направленных на знакомство 
                первокурсников друг с другом, внеучебной жизнью, нашей командой и институтом.'>
            </EventCard>
        </div>
    )
}