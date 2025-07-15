import Footer from "../components/footer";
import Header from "../components/header";
import btnArrow from '../img/btn-arrow.svg';
import money from '../img/main-money.svg';
import people from '../img/main-people.svg';
import stars from '../img/main-stars.svg';
import calendar from '../img/main-calendar.svg';
import InterfaceBtn from "../components/InterfaceBtn";
import logo from '../img/main-logo.svg';
import { Link } from "react-router-dom";

export default function MainPage(props) {
    return (
        <div className="App MainPage">
            <section className="Hero">
                <Header newLogo={logo}></Header>
                <div className="hero-info">
                    <p className="hero-title">твой путь в студенческую жизнь начинается здесь</p>
                    <p className="hero-text">Вливайся в активное сообщество ИРИТ-РТФ: мероприятия, проекты, возможности для роста!</p>
                    <p className="hero-tag">#вайбтвоегостуденчества</p>
                </div>
                <a style={{ textDecoration: "none", color: "inherit" }} href="https://vk.com/irit_rtf" className="VK-link-container-BTN">
                    <p>МЫ В ВК</p>
                    <img src={btnArrow}></img>
                </a>
            </section>
            <section className="Info">
                <h1>Кто мы?</h1>
                <p><span>Союз студентов ИРИТ-РТФ</span> — профсоюзная организация студентов института радиоэлектроники и информационных технологий, которая занимается защитой прав студентов, помощью с поселением в общежитие, проведением спортивных, научных и культурно-массовых мероприятий. Мы помогаем дирекции института и студентам, а также готовы поддержать любые инициативы. <br></br><br></br>Вообщем, делаем студенчество комфортным и ярким.</p>
            </section>
            <section className="About">
                <h1>Проф... что?</h1>
                <div className="about-info-container">
                    <div>
                        <div className="about-category">на бумаге</div>
                        <div className="about-text">Профсоюз — добровольное общественное объединение граждан, связанных общими производственными, профессиональными интересами по роду их деятельности, создаваемое в целях представительства и защитыих социально-трудовых прав и интересов.</div>
                    </div>
                    <div>
                        <div className="about-category">на деле</div>
                        <div className="about-text">Профсоюз помогает студентам решить трудные ситуации, возникающие в процессе обучение. Также членам профсоюза доступны некоторые плюшки и бонусы, о которых расскажем дальше.</div>
                    </div>
                </div>
            </section>
            <section className="Digits">
                <h1>Чего мы достигли?</h1>
                <div className="union-container">
                    <div className="digits-0-container">
                        <div>
                            <p className="digits">10 000 +</p>
                            <p className="digits-desc">подписчиков <br></br>в социальных сетях</p>
                        </div>
                        <div>
                            <p className="digits">37</p>
                            <p className="digits-desc">решенных студенческих проблем через сервис <a href="https://forms.yandex.ru/u/66d99657d0468807a6dea3a5/">красная кнопка</a></p>
                        </div>
                    </div>
                    <div className="digits-1-container">
                        <div>
                            <p className="digits">700</p>
                            <p className="digits-desc">человек посетили наши мероприятия</p>
                        </div>
                        <div>
                            <p className="digits">192</p>
                            <p className="digits-desc">активиста в 2025 году</p>
                        </div>
                        <div>
                            <p className="digits">≈70</p>
                            <p className="digits-desc">мероприятий проводим за год</p>
                        </div>
                    </div>
                </div>
                <div className="digits-2-container">
                    <div>
                        <p className="digits">4 600</p>
                        <p className="digits-desc">студентов состоят в профсоюзе</p>
                    </div>
                </div>
            </section>
            <section className="Buttons">
                <h1>Обязательно загляни</h1>
                <div className="interface-container">
                    <Link to={`/our-events`} style={{ textDecoration: "none", color: "inherit" }}>
                        <InterfaceBtn title='Мероприятия' img={calendar}></InterfaceBtn>
                    </Link>
                    <Link to={`/materialhelp`} style={{ textDecoration: "none", color: "inherit" }}>
                        <InterfaceBtn title='Мат помощь' img={money}></InterfaceBtn>
                    </Link>
                    <Link to={`/profunion`} style={{ textDecoration: "none", color: "inherit" }}>
                        <InterfaceBtn title='Бонусы' img={stars}></InterfaceBtn>
                    </Link>
                    <Link to={`/team`} style={{ textDecoration: "none", color: "inherit" }}>
                        <InterfaceBtn title='Наша команда' img={people}></InterfaceBtn>
                    </Link>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}