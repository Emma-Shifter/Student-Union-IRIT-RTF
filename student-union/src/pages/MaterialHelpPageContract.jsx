import Header from "../components/header";
import { mpContractList } from "../data";
import MPReason from '../components/mp-reason';
import Masonry from 'react-masonry-css';
import time from '../img/mp/time.svg';
import alert from '../img/mp/alert.svg';
import wallet from '../img/mp/wallet.svg';
import zamMP from '../img/mp/mp-sos-z.png';
import sosMP from '../img/mp/mp-sos.png';
import map from '../img/mp/map.svg';
import vk from '../img/mp/vk.svg';
import tg from '../img/mp/tg.svg';
import phone from '../img/mp/phone.svg';
import star from '../img/mp/star.svg';
import arrow from '../img/mp/arrow-right.svg';
import Footer from "../components/footer";

const breakpointColumnsObj = {
            default: 2,
            1100: 2,
            700: 1,
        };

export default function MaterialHelpPageContract(props) {
    return (
        <div className="App MaterialHelpPageContract">
            <Header></Header>
            <h1>Материальная помощь</h1>
            <p>Единовременная денежная выплата, назначаемая обучающимся, которые оказались в тяжелой жизненной ситуации.</p>
            <div className="mp-category">
                <h2>В ГУКЕ</h2>
                <div>контрактники</div>
            </div>
            <section className="info-contacts-container">
                <div className="info-side-container">
                    <div className="info-side-elem">
                        <img src={wallet}></img>
                        <div>
                            <p className="info-side-elem-title">Минимальная сумма для подачи заявления</p>
                            <p className="info-side-elem-digits">1 000 рублей</p>
                            <p className="info-side-elem-desc">Материальная помощь компенсирует от 1000 рублей</p>
                        </div>
                    </div>
                    <div className="info-side-elem">
                        <img src={alert}></img>
                        <div>
                            <p className="info-side-elem-title">Обратите внимание</p>
                            <p className="info-side-elem-desc">Обязательные документы помимо необходимых в конкретном случае: <br></br>– реквизиты банковской карты
<br></br> – копия профсоюзного билета с отметкой об уплате членских взносов (в профсоюзном билете на момент подачи заявления должно быть не менее двух печатей*). Если профсоюзный билет электронный, то копия не нужна
Все документы, прилагаемые к заявлению, должны быть получены или реализованы <span className="info-side-elem-desc-imp">в течение текущего учебного года</span></p>
                        </div>
                    </div>
                    <div className="info-side-elem">
                        <img src={time}></img>
                        <div>
                            <p className="info-side-elem-title">Прием заявлений до</p>
                            <p className="info-side-elem-digits">10 числа каждого месяца</p>
                            <p className="info-side-elem-desc">В будние дни с 10:00 до 17:00</p>
                        </div>
                    </div>
                    <div className="info-side-elem">
                        <img src={map}></img>
                        <div>
                            <p className="info-side-elem-title">Приходи в</p>
                            <p className="info-side-elem-digits">ГУК-309 (Мира, 19)</p>
                        </div>
                    </div>
                </div>
                <div className="contacts-side-container">
                    <div className="contacts-side-elem">
                        <div className="contacts-side-elem-img">
                            <img src={zamMP}></img>
                        </div>
                        <div>
                            <p>Попова Ксения</p>
                            <div className="contact-container">
                                <img src={vk}></img>
                                <a href='https://vk.com/ksushasolnyshko'>ksushasolnyshko</a>
                            </div>
                            <div className="contact-container">
                                <img src={tg}></img>
                                <a href="https://t.me/ksushasolnyshko">@ksushasolnyshko</a>
                            </div>
                            <div className="contact-container">
                                <img src={phone}></img>
                                <a>+7 (951) 447-90-73</a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-side-elem">
                        <div className="contacts-side-elem-img">
                            <img src={sosMP}></img>
                        </div>                        
                        <div>
                            <p>Кравченко Светлана</p>
                            <div className="contact-container">
                                <img src={vk}></img>
                                <a href="https://vk.com/otstantedaitepokushot">otstantedaitepokushot</a>
                            </div>
                            <div className="contact-container">
                                <img src={tg}></img>
                                <a href='https://t.me/cherezhnua'>@Cherezhnua</a>
                            </div>
                            <div className="contact-container">
                                <img src={phone}></img>
                                <a>+7 (967) 851-74-73</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="alert-container">
                <p>ПРИЧИНЫ ПОДАЧИ</p>
                <div>
                    <p>Важно: </p>
                    <p>по следующим причинам студенты старше 23 лет и студенты, совмещающие обучение с работой (в том числе ИП и самозанятые), должны предоставить сведения о своих доходах за последние 3 месяца</p>
                </div>
            </div>
             <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid-column">
                {
                    mpContractList.map((elem) => (
                        <MPReason className="masonry-item" title={elem.title} docs={elem.docs} etc={elem.etc}></MPReason>
                    ))
                }
                <div className="MPReason spec-reason">
                    <h3>Студенты, нуждающиеся в материальной поддержке в связи с дорогостоящим проездом до места жительства (прописки), а также до места жительства родителей</h3>
                    <div className='etc-container'>
                        <img src={star} alt="star" />
                        <p>Возмещается часть стоимости проезда</p>
                    </div>
                    <div className='reason-info'>
                        <div className="category-reason-container">
                            <div className="category-reason-container-left">
                                <p>для граждан РФ:</p>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>копия основной страницы паспорта</p>
                                </div>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>копия паспорта с регистрацией</p>
                                </div>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>оригиналы билетов (РДЖ/автобус)</p>
                                </div>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>электронный билет + посадочный талон (самолет)</p>
                                </div>
                            </div>
                            <div className="category-reason-container-right">
                                <p>для иностранных граждан </p>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>копия всех страниц паспорта, загранпаспорта</p>
                                </div>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>копия миграционной карты</p>
                                </div>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>оригиналы билетов (РДЖ/автобус)</p>
                                </div>
                                <div className='reasons-container'>
                                    <img src={arrow}></img>
                                    <p>электронный билет + посадочный талон (самолет)</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </Masonry>
            <Footer></Footer>
        </div>
    )
}