import "./card-note.css"

function CardNote(props) {

    return (
        <div className="cardNote">
            <h2>{props.title}</h2>
        </div>
    )
}

export default CardNote;