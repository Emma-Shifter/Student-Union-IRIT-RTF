export default function Button(props) {
    return (
        <div className={"Button " + props.btnClass}>
            <p>{props.btnName}</p>
            <img src={props.btnImage}></img>
        </div>
    )
}