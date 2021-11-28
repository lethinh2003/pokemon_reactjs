import {useParams, useHistory} from "react-router-dom";
import useFetch from '../custom/useFetch';
import '../styles/pokemonDetail.scss';

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
<div className="pokemon-detail__container">
        <div className="pokemon-detail__header"></div>
        <div className="pokemon-detail__body"></div>
        <div className="pokemon-detail__footer"></div>

</div>
        
  
        </>
    )

}
export default PokemonDetail;