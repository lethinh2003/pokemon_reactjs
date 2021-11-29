import '../styles/search.scss';
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';
const Search = (props) => {
    const [keyword, SetKeyword] = useState('');
    const {handleChangeKeyword, handleChangeSearchStatus} = props;
    
    const handleOnChange = (e) => {
        SetKeyword(e.target.value);
        handleChangeKeyword(e.target.value);
        
    }
    const handleClickSearch = () => {
        handleChangeSearchStatus(true);
        

    }
    return( 
        <div className="search">
            <div className="search-input">
                <input type="text" value={keyword} onChange={(e) => handleOnChange(e)} />
            </div>
            <div className="search-icon" onClick={() => handleClickSearch()}><BiSearch /></div>
        </div>
    )

}
export default Search;