import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <div className="Header">
            <img src={props.newLogo || logo}></img>
            <div>
                <Link to={`/our-events`} style={{ textDecoration: "none", color: "inherit" }}>
                    <a>мероприятия</a>
                </Link>
                <Link to={`/team`} style={{ textDecoration: "none", color: "inherit" }}>
                    <a>состав</a>
                </Link>
                <Link to={`/profunion`} style={{ textDecoration: "none", color: "inherit" }}>
                    <a>бонусы</a>
                </Link>
                <Link to={`/materialhelp`} style={{ textDecoration: "none", color: "inherit" }}>
                    <a>мат помощь</a>
                </Link>
            </div>

        </div>
    )
}