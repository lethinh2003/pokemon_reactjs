import '../styles/nav.scss';
import { BiHomeAlt, BiAdjust } from "react-icons/bi";
const Nav = () => {
    return(
        <>
        <div className="navigation">
            <div className="home"><BiHomeAlt /></div>
            <div className="home"><BiAdjust /></div>
            <div className="home">Home</div>
            <div className="home">Home</div>
        </div>
        </>
    )

}
export default Nav;