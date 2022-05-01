import CardNote from "../../componnents/card-note/card-note";
import Footer from "../../componnents/footer/footer";
import Header from "../../componnents/header/header";

import "./categories.css"

function Categories(props) {
    return (
        <>
            <Header />

            <div className="text-content">
                <h1>Welcome back, {props.name}!</h1>
                <p>What can we help you remember?</p>
            </div>
            <div className="card-notes-block">
                <CardNote title="Groceries" text="1 note" animated={true}/>
                <CardNote title="Family" text="22 notes" color="orange" animated={true}/>
                <CardNote title="Work" text="22 notes" color="green-ligth" animated={true}/>
                <CardNote title="Home" text="22 notes" color="blue-ligth" animated={true}/>
                <CardNote title="Car" text="22 notes" color="pink-litgh" animated={true}/>
                <CardNote title="wekend" text="22 notes" color="red-ligth" animated={true}/>
            </div>

            <Footer />
        </>
    )
}

export default Categories;