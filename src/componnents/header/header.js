import "./header.css"
import Input from "../input/input"
import { HiOutlineChevronLeft, HiDotsCircleHorizontal } from 'react-icons/hi';


function Header(props) {
    return (
        <header className={props.htmlClass}>
            <div className="navigation-content">
                <div className="navigation-item">
                   <a href="/back"> <HiOutlineChevronLeft /><p>Back</p></a>
                </div>
                <div className="navigation-item">
                    <p>Home</p></div>
                <div className="navigation-item"><HiDotsCircleHorizontal /></div>
            </div>
            <div className="search-content">
                <Input placeholder="Search" />
            </div>
        </header>
    )
}

export default Header