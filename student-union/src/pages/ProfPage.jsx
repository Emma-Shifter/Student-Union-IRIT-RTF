import Footer from "../components/footer";
import Header from "../components/header";
import {profPlusList} from '../data';
import Masonry from 'react-masonry-css';
import vk from '../img/mp/vk.svg';
import tg from '../img/mp/tg.svg';
import phone from '../img/mp/phone.svg';
import zamPS from '../img/ps/ps-sos-z.png';
import sosPS from '../img/ps/ps-sos.png';
import star from '../img/mp/star.svg';
import hero from '../img/ps/ps-hero.jpg';
import and from '../img/ps/ps-and.svg';
import ps1 from '../img/ps/ps-1.svg';
import ps2 from '../img/ps/ps-2.svg';
import ps3 from '../img/ps/ps-3.svg';

const breakpointColumnsObj = {
            default: 2,
            1100: 2,
            700: 1,
        };

export default function ProfPage(props) {
    return (
        <div className="App ProfPage">
            <Header></Header>
            <div className="prof-bonus-container">
                <div className="prof-bonus-container-left">
                    <h1>Бонусные программы</h1>
                    <p className="prof-bonus-container-left-extra-text">После получения электронного профсоюзника для членов профсоюза открывается доступ к двум бонусным системам: <a href='https://vk.com/profcards_ru'>Profcards</a> и <a href='https://vk.com/sks_rf'>СКС Бонус</a>. Бонусные системы предоставляют скидки на абсолютно разные категории товаров, от мебели до косметики. </p>
                    <div className="prof-etc">
                        <img src={star}></img>
                        <p>Обе действуют как на территории Екатеринбурга, так и всей России.</p>
                    </div>

                    <div className="ps-full-ad-container">
                        <div className="ps-ad-container">
                            <div className="mp-category">
                                <div>Profcards</div>
                            </div>
                            <img src={and}></img>
                            <div className="mp-category">
                                <div>СКС Бонус</div>
                            </div>
                        </div>

                        <p className="algo-text">Чтобы познакомиться с программой, необходимо:</p>
                        
                        <div className="algo-step">
                            <img src={ps1}></img>
                            <p>Состоять в профсоюзе</p>
                        </div>
                        <div className="algo-step">
                            <img src={ps2}></img>
                            <p>Скачать приложение Profcards/СКС Бонусе</p>
                        </div>
                        <div className="algo-step">
                            <img src={ps3}></img>
                            <p>Зарегистрироваться <br></br>в системе</p>
                        </div>
                    </div>
                </div>
                <div className="prof-bonus-container-right">
                    <img src={hero}></img>
                </div>
            </div>

            <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid-column">
                <div className="mansory-title">«ПЛЮШКИ» ПРОФСОЮЗНИКА</div>
                <div>
                    <div className="contacts-side-elem">
                        <div className="contacts-side-elem-img">
                            <img src={zamPS}></img>
                        </div>
                        <div>
                            <p>Мартемьянова Лада</p>
                            <div className="contact-container">
                                <img src={vk}></img>
                                <a href='https://vk.com/lads_mart'>lads_mart</a>
                            </div>
                            <div className="contact-container">
                                <img src={tg}></img>
                                <a href="https://t.me/o0pSis">@o0pSis</a>
                            </div>
                            <div className="contact-container">
                                <img src={phone}></img>
                                <a>+7 (908) 071-34-60</a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-side-elem">
                        <div className="contacts-side-elem-img">
                            <img src={sosPS}></img>
                        </div>                        
                        <div>
                            <p>Габдуллина Карина</p>
                            <div className="contact-container">
                                <img src={vk}></img>
                                <a href="https://vk.com/ynerrea">ynerrea</a>
                            </div>
                            <div className="contact-container">
                                <img src={tg}></img>
                                <a href='https://t.me/ynerrea'>@ynerrea</a>
                            </div>
                            <div className="contact-container">
                                <img src={phone}></img>
                                <a>+7 (917) 809-20-95</a>
                            </div>
                        </div>
                    </div>
                </div>
                {profPlusList.map((elem) => (
                    <div className="masonry-item prof-plus-elem">{elem}</div>
                ))}
            </Masonry>
            
            <Footer></Footer>
        </div>
    )
}