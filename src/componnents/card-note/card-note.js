import "./card-note.css"

function CardNote(props) {
    const classes = `cardNote ${props.color?"background--"+props.color:""} ${props.animated?" animated-true":""}`

   
    return (
        <div className={classes}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default CardNote;