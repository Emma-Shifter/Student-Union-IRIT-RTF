import logo from '../img/logo.svg';
import logoMob from '../img/logo-mob.svg';
import menu from '../img/menu.svg';
import closeHeader from '../img/closeHeader.svg';
import menuDark from '../img/menu-dark.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Header">
            <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
                <img src={props.newLogo || logo} alt="Logo" />
            </Link>

            {/* Скрытое мобильное меню */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className='mobile-menu-interface'>
                        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
                            <img src={props.newLogo || logoMob} alt="Logo" />
                        </Link>
                        <div onClick={toggleMenu}>
                            <img src={closeHeader} className='closeHeaderBtn'></img>
                        </div>
                    </div>
                    <div className='mobile-menu-a'>
                        <Link to={`/our-events`} onClick={toggleMenu}>мероприятия</Link>
                        <Link to={`/team`} onClick={toggleMenu}>состав</Link>
                        <Link to={`/profunion`} onClick={toggleMenu}>бонусы</Link>
                        <Link to={`/materialhelp`} onClick={toggleMenu}>мат помощь</Link>
                    </div>
                </div>
            )}

            {/* Основное меню (для десктопа) */}
            <div className="desktop-menu">
                <Link to={`/our-events`}>мероприятия</Link>
                <Link to={`/team`}>состав</Link>
                <Link to={`/profunion`}>бонусы</Link>
                <Link to={`/materialhelp`}>мат помощь</Link>
            </div>

            {/* Бургер-кнопки */}
            <div className='burger-btn' onClick={toggleMenu}>
                <img src={menu} alt="Menu" />
            </div>
            <div className='burger-btn-dark' onClick={toggleMenu}>
                <img src={menuDark} alt="Menu Dark" />
            </div>
        </div>
    );
}