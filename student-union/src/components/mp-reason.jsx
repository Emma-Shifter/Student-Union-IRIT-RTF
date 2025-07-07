import star from '../img/mp/star.svg';
import arrow from '../img/mp/arrow-right.svg';

export default function MPReason(props) {
    return (
        <div className="MPReason">
            <h3>{props.title}</h3>
            <div className='reason-info'>
                {props.docs.map((elem) => (
                    <div className='reasons-container'>
                        <img src={arrow}></img>
                        <p>{elem}</p>
                    </div>
                ))}
                {Array.isArray(props.etc) && props.etc.map((elem) => (
                    <div className='etc-container'>
                        <img src={star} alt="star" />
                        <p>{elem}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}