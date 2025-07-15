import Footer from "../components/footer";
import Header from "../components/header";
import PartOfTeam from "../components/part-of-team";
import { Link } from "react-router-dom";

export default function MaterialHelpPage(props) {
    return (
        <div className="App MaterialHelpPage">
            <Header></Header>
            <h1>Материальная помощь</h1>
            <p>Единовременная денежная выплата, назначаемая обучающимся, которые оказались в тяжелой жизненной ситуации.</p>
            <div className="mp-elem-container">                    
                <Link to={`/materialhelp/inst`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="mp-elem-0">
                        <PartOfTeam POTTitle='Институт' POTDesc='Для бюджетной формы обучения'></PartOfTeam>
                    </div>
                </Link>
                <Link to={`/materialhelp/uni`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="mp-elem-1">
                        <PartOfTeam POTTitle='Университет' POTDesc='Для бюджетной формы обучения' ></PartOfTeam>
                    </div>
                </Link>
                <Link to={`/materialhelp/contract`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="mp-elem-2">
                        <PartOfTeam POTTitle='Университет' POTDesc='Для контрактной формы обучения'></PartOfTeam>
                    </div>    
                </Link>
            </div>
            <p className="mp-elem-0-text">Тут одни причины</p>
            <p className="mp-elem-1-text">А тут уже другие</p>
            <p className="mp-elem-2-text">Если вы учитесь на контракте</p>
            <Footer></Footer>
        </div>
    )
}