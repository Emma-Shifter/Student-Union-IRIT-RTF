import Header from "../components/header";
import {commissionList} from "../data";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from "../components/footer";
import PartOfTeam from "../components/part-of-team";

export default function TeamPage(props) {
    const { commissionId } = useParams();
    const data = commissionList.find(item => item.id === commissionId);

    return (
        <div className="App TeamPage">
            <Header></Header>
            
            <h1>Кто мы?</h1>
            <p>Союз студентов — это поддержка, которую ты получаешь от организации: материальные блага или защита ваших интересов, помощь в решении любых проблем.</p>
            <div className="team-container">
                {commissionList.slice(0, -2).map((elem) => (
                    <Link className='teamElem' to={`/commission/${elem.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <PartOfTeam POTTitle={elem.title} POTDesc={elem.desc}></PartOfTeam>
                    </Link>
                ))}
            </div>
            <div className="team-container-spec">
                {commissionList.slice(-2).map((elem) => (
                    <Link className='lastTeamElem' to={`/commission/${elem.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <PartOfTeam POTTitle={elem.title} POTDesc={elem.desc}></PartOfTeam>
                    </Link>
                ))}
            </div>
    
            <Footer></Footer>
        </div>
    )
}