import './create-note.css'
import CardNote from "../card-note/card-note"
import { HiPlusCircle } from 'react-icons/hi';

const AppBar = () => {
  return (
    <div className='create-note-container'>
      <p>Select an existing note pad to place your new note.</p>
      <div className='category-notes-container'>
        <CardNote title="Groceries" />
        <CardNote title="Family" color="orange" />
        <CardNote title="Work" color="green-ligth" />
        <CardNote title="Home" color="blue-ligth" />
        <CardNote title="Car" color="pink-litgh" />
        <CardNote title="wekend" color="red-ligth" />
      </div>
      <p>Create a new pad to place your note.</p>
      <div className="bottom-content">
                <HiPlusCircle color="#f7e781"/>
                <HiPlusCircle color="#7deb74"/>
                <HiPlusCircle color="#b498f0"/>
                <HiPlusCircle color="#fc7b6a"/>
                <HiPlusCircle color="#81cff9"/>
                <HiPlusCircle color="#fc9d30"/>
           
            </div>
    </div>

  )
}

export default AppBar;
