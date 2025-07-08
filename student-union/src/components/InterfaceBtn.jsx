export default function InterfaceBtn(props) {
    return (
        <div className="InterfaceBtn ">
            <img src={props.img}></img>
            <h3>{props.title}</h3>
        </div>
    )
}