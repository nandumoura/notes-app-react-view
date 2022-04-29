import CardNote from "../../componnents/card-note/card-note";
import Header from "../../componnents/header/header";

import "./categories.css"

function Categories(props) {
    return (
        <>
<Header/>

        <div className="text-content">
        <h1>Welcome back, {props.name}!</h1>
            <p>What can we help you remember?</p>
        </div>
   

            <div className="card-notes-block">
                <CardNote title="Groceries" text="1 note"/>
                <CardNote title="Family"  text="22 notes" color="orange"/>
                <CardNote title="Work"  text="22 notes" color="green-ligth"/>
                <CardNote title="Home"  text="22 notes" color="blue-ligth"/>
                <CardNote title="Car"  text="22 notes" color="pink-litgh"/>
                <CardNote title="wekend"  text="22 notes" color="red-ligth"/>
            </div>

        </>
    )
}

export default Categories;