import '../styles/search.scss';
import { BiSearch } from "react-icons/bi";
const Search = () => {
    return(
        <div className="search">
            <div className="search-input">
                <input type="text"></input>
            </div>
            <div className="search-icon"><BiSearch /></div>
        </div>
    )

}
export default Search;