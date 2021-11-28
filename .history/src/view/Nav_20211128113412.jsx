import '../styles/nav.scss';
import { BiHomeAlt, BiAdjust, BiUser, BiPaperPlane } from "react-icons/bi";
const Nav = () => {
    return(
        <>
        <div className="navigation">
            <div className="home">
                <BiHomeAlt />
                <span className="desc-icon">Home</span>
            </div>
            <div className="home">
                <BiAdjust />
                <span className="desc-icon">Display</span>
            </div>
            <div className="home">
                <BiUser />
                <span className="desc-icon">About me</span>
            </div>
            <div className="home">
                <BiPaperPlane />
                <span className="desc-icon">Contact</span>
            </div>
        </div>
        </>
    )

}
export default Nav;