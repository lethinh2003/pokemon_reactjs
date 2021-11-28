import {useParams, useHistory} from "react-router-dom";
import useFetch from '../custom/useFetch';
import '../styles/pokemonDetail.scss';

const PokemonDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon/` + id);
    let currentData =  data.results;
 

      
    function handleClick() {
      history.push("/blogs");
    }
    return (
        <>
<div className="pokemon-detail__container">
        <div className="pokemon-detail__header">
            <div className="detail-title"><span>{data.name}</span> <span style={{"fontSize": "40px"}}>#{id}</span></div>
        </div>
        <div className="pokemon-detail__body">
            <div className="detail-profile">
                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/00" + data.order + ".png"}/>
            </div>
            <div className="detail-properties">
                <div className="detail-desc">
                There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger
                </div>
                <div className="detail-info">
                    <div className="info-left">
                        <span className="info-name">Height</span>
                        <span className="info-num">{data.height} cm</span>
                        <span className="info-name">Weight</span>
                        <span className="info-num">{data.weight} cm</span>
                        <span className="info-name">Gender</span>
                        <span className="info-num">0</span>
                    </div>
                    <div className="info-right">
                        <span className="info-name">Category</span>
                        <span className="info-num">0</span>
                        <span className="info-name">Abilities</span>
                        <span className="info-num">0</span>
                        
                    </div>

                </div>
            </div>
        </div>
        <div className="pokemon-detail__footer"></div>

</div>
        
  
        </>
    )

}
export default PokemonDetail;