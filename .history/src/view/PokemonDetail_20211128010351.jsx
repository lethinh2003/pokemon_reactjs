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
        <div className="pokemon-detail__header">
            <div className="detail-title">{data.name} #{id}</div>
        </div>
        <div className="pokemon-detail__body">
            <div className="detail-profile"></div>
            <div className="detail-properties">
                <div className="detail-desc">
                There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger
                </div>
                <div className="detail-info"></div>
            </div>
        </div>
        <div className="pokemon-detail__footer"></div>

</div>
        
  
        </>
    )

}
export default PokemonDetail;