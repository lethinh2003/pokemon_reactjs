import '../styles/nav.scss';
import { BiHomeAlt, BiAdjust, BiUser, BiPaperPlane } from "react-icons/bi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
  } from "react-router-dom";
const Nav = () => {
    return(
        <>
        <div className="navigation">
            <NavLink to="/" activeClassName="active" exact>
            <div className="home">
                <BiHomeAlt />
                <span className="desc-icon">Home</span>
            </div>
            </NavLink>
            <div className="home">
                <BiAdjust />
                <span className="desc-icon">Display</span>
            </div>
            <div className="home">
                <BiUser />
                <span className="desc-icon">Me</span>
            </div>
            <NavLink to="/contact" activeClassName="active">
            <div className="home">
                <BiPaperPlane />
                <span className="desc-icon">Contact</span>
            </div>
            </NavLink>
        </div>
        </>
    )

}
export default Nav;