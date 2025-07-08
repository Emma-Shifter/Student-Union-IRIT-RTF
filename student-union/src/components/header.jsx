import logo from '../img/logo.svg';

export default function Header(props) {
    return (
        <div className="Header">
            <img src={props.newLogo || logo}></img>
            <div>
                <a>мероприятия</a>
                <a>состав</a>
                <a>бонусы</a>
                <a>мат помощь</a>
            </div>

        </div>
    )
}