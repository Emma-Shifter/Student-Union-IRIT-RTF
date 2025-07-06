export default function PartOfTeam(props) {
    return (
        <div className={"PartOfTeam " + props.POTClass}>
            <h3>{props.POTTitle}</h3>
            <p>{props.POTDesc}</p>
        </div>
    )
}