import vk from '../img/footer-vk.svg';
import tg from '../img/footer-tg.svg';
import vkFull from '../img/footer-vk-fill.svg';
import tgFull from '../img/footer-tg-fill.svg'

export default function Footer(props) {
    return (
        <div className="Footer">
            <div className="contacts-container">
                <div>
                    <p className='sub-title'>Председатель</p>
                    <p className='footer-text'>Гареев Роман Ирекович</p>
                    <p className='footer-text'>+7 962 524 8950</p>
                    <div className='footer-social-links first-links'>
                        <img src={vk}></img>
                        <img src={tg}></img>
                    </div>
                </div>
                <div>
                    <p className='sub-title'>Адрес</p>
                    <p className='footer-text'>Екатеринбург, ул. Мира, 32, каб. Р-126</p>
                </div>
            </div>
            <div className="req-container">
                <p className='sub-title'>© 2025 Профбюро (Союз студентов)<br></br> ИРИТ-РТФ УрФУ</p>
            </div>
            <div className="social-container">
                <p className='sub-title'>Наши соцсети</p>
                <div className='footer-social-links'>
                    <img src={vkFull}></img>
                    <img src={tgFull}></img>
                </div>
            </div>
        </div>
    )
}