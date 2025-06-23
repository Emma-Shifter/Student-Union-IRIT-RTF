import Button from "./button";

export default function EventCard(props) {
    return (
        <div className="App EventCard">
            <img src={props.image}></img>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <Button></Button>
        </div>
    )
}