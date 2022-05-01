import "./add-note.css"
import Footer from "../../componnents/footer/footer"
import Header from "../../componnents/header/header"
import CardNote from "../../componnents/card-note/card-note"
import { HiPlusCircle } from 'react-icons/hi';

const AddNote = () => {
    const color = "pink-ligth"
    return (
        <>
            <Header htmlClass={"background--" + color} />
            <main>
                <div className="add-note-header">
                    <div className="card-note-container">
                        <CardNote title="Weekend" color={color} />
                    </div>
                    <div className={`left-actions ` + color}  >
                        <div >Cancel</div>
                        <div><HiPlusCircle /></div>
                    </div>
                </div>
                <div>
                    <form className="add-note-form">
                        <div>
                            <label for="subject" >Subject: </label>
                            <input id="subject"  placeholder="buy a coffe" type="text" />
                        </div>
                        <div>
                            <label for="date">Date:</label>
                            <input id="date"  type="date" />
                        </div>
                        <div>
                            <label for="description">Description:  </label>
                            <input id="description" placeholder="Buy a coffee for fernando moura"  type="text" />
                        </div>

                        <textarea name="note" rows="10" cols="30" placeholder="write your note here" ></textarea>
                    </form>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default AddNote