import './create-note.css'
import CreateNoteComponent from "../../componnents/create-note/create-note"

import Footer from "../../componnents/footer/footer";
import Header from "../../componnents/header/header";
const CreateNote = () => {
  return (
    <>
    <Header />
      <CreateNoteComponent />
     <Footer/>
    </>
   
  )
}

export default CreateNote;
