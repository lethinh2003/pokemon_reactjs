import '../styles/nav.scss';
import { BiHomeAlt, BiAdjust, BiUser, BiPaperPlane } from "react-icons/bi";
const Nav = () => {
    return(
        <>
        <div className="navigation">
            <div className="home"><BiHomeAlt /></div>
            <div className="home"><BiAdjust /></div>
            <div className="home"><BiUser /></div>
            <div className="home"><BiPaperPlane /></div>
        </div>
        </>
    )

}
export default Nav;