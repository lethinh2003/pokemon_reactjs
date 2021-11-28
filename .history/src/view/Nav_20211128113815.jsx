import '../styles/nav.scss';
import { BiHomeAlt, BiAdjust, BiUser, BiPaperPlane } from "react-icons/bi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Nav = () => {
    return(
        <>
        <div className="navigation">
            <Link to="/">
            <div className="home">
                <BiHomeAlt />
                <span className="desc-icon">Home</span>
            </div>
            </Link>
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