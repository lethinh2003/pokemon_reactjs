import {useParams, useHistory} from "react-router-dom";
import useFetch from '../custom/useFetch';

const PokemonDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon/` + id);
    let currentData =  data.results;
    console.log(data.name);
      
    function handleClick() {
      history.push("/blogs");
    }
    return (
        <>
<div className="pokemon-detail">Hihi</div>
        
  
        </>
    )

}
export default PokemonDetail;