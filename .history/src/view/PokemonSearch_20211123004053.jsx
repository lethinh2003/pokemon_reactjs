import { useState } from "react";
const PokemonSearch = () => {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
        <>
        <div className="pokemon-search">
        <input type="text" value={search} onChange={(e)=> handleChange(e)} />
        <div className="value">{search}</div>

        </div>
        
        </>
    )

}
export default PokemonSearch;