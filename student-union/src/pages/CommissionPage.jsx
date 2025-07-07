import Header from '../components/header';
import {commissionList} from "../data";
import { useParams } from 'react-router-dom';
import VKlogo from '../img/ss-vk.svg';
import TGlogo from '../img/ss-tg.svg';
import Phonelogo from '../img/ss-phone.svg';


export default function CommissionPage(props) {
    const { commissionId } = useParams();  
    const data = commissionList.find(item => item.id === commissionId);
    return (
        <div className="App CommissionPage">
            <Header></Header>
            <h1>{data.title}</h1>
            <section className='works-container'>
                <h2>Чем занимается {data.title}</h2>
                <ul>
                    {
                        data.works.map((elem) => (
                            <li>{elem}</li>
                        ))
                    }
                </ul>
                <p className='fio'>{data.people[0].fio}</p>
                <p className='desc'>{data.desc}</p>
                <div className='social-container'>
                    <div className='social-vk'>
                        <img src={VKlogo}></img>
                        <a href={data.people[0].contacts.vk}>{data.people[0].contacts.vk_name}</a>
                    </div>
                    <div className='social-tg'>
                        <img src={TGlogo}></img>
                        <a href={data.people[0].contacts.tg}>{data.people[0].contacts.tg_name}</a>
                    </div>
                    <div className='social-phone'>
                        <img src={Phonelogo}></img>
                        <a>{data.people[0].contacts.phone}</a>
                    </div>
                </div>
            </section>
            <section className='CM-image-container'>
                {data.images.map((img, index) => (
                    <div className={'CM-image-'+index} key={index}>
                        <img src={img} />
                    </div>
                ))}
            </section>
        </div>
    )
}