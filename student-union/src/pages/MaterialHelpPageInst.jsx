import Header from "../components/header";
import { mpInstList } from "../data";
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

const breakpointColumnsObj = {
            default: 2,
            1100: 2,
            700: 1,
        };

export default function MaterialHelpPageInst(props) {
    return (
        <div className="App MaterialHelpPageInst">
            <Header></Header>
            <h1>Материальная помощь</h1>
            <p>Единовременная денежная выплата, назначаемая обучающимся, которые оказались в тяжелой жизненной ситуации.</p>
            <div className="mp-category">
                <h2>В ИРИТ-РТФ</h2>
                <div>бюджетники</div>
            </div>
            <section className="info-contacts-container">
                <div className="info-side-container">
                    <div className="info-side-elem">
                        <img src={wallet}></img>
                        <div>
                            <p className="info-side-elem-title">Минимальная сумма для подачи заявления</p>
                            <p className="info-side-elem-digits">2800 рублей</p>
                            <p className="info-side-elem-desc">Материальная помощь компенсирует от 2800 до 10000 рублей (без учета НДФЛ*), даже если сумма в чеках более 10000 рублей</p>
                        </div>
                    </div>
                    <div className="info-side-elem">
                        <img src={alert}></img>
                        <div>
                            <p className="info-side-elem-title">Обратите внимание</p>
                            <p className="info-side-elem-desc">Все документы, прилагаемые к заявлению, должны быть получены или реализованы в течение текущего учебного года</p>
                        </div>
                    </div>
                    <div className="info-side-elem">
                        <img src={time}></img>
                        <div>
                            <p className="info-side-elem-title">Прием заявлений до</p>
                            <p className="info-side-elem-digits">27 числа каждого месяца</p>
                            <p className="info-side-elem-desc">Актуальное расписание в закрепе группы</p>
                        </div>
                    </div>
                    <div className="info-side-elem">
                        <img src={map}></img>
                        <div>
                            <p className="info-side-elem-title">Приходи в</p>
                            <p className="info-side-elem-digits">Р-126 (Мира, 32)</p>
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
                    mpInstList.map((elem) => (
                        <MPReason className="masonry-item" title={elem.title} docs={elem.docs} etc={elem.etc}></MPReason>
                    ))
                }
            </Masonry>
        </div>
    )
}