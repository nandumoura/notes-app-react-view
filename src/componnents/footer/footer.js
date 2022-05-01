import "./footer.css"
import { HiHome, HiOutlineCollection } from 'react-icons/hi';
import { GiNotebook } from "react-icons/gi"

function Footer(props) {
    return (
        <div className="footer-content">
            <div className="footer-item">
                <HiHome />
            </div>
            <div className="footer-item">
                <GiNotebook />
            </div>
            <div className="footer-item">
                <HiOutlineCollection />
            </div>
        </div>
    )
}

export default Footer