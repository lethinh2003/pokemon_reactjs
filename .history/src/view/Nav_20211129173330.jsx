import '../styles/nav.scss';
import { BiHomeAlt, BiAdjust, BiUser, BiPaperPlane } from "react-icons/bi";
import {
    BrowserRouter as Router,
     NavLink
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
            <a href="https://github.com/lethinh2003/pokemon_reactjs" target="_blank">
            <div className="home">
                <BiUser />
                <span className="desc-icon">Me</span>
            </div>
            </a>
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