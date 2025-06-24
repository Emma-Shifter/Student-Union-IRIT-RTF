import Button from "./button";
import btnImage from "../img/btn-image.svg";

export default function EventCard(props) {
    return (
        <div className={"EventCard " + props.cardClass}>
            <img src={props.image}></img>
            <div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <Button btnClass="event-list" btnName="перейти" btnImage={btnImage}></Button>
            </div>
        </div>
    )
}