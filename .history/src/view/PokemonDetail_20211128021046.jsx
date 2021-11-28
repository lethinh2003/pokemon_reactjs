import { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";
import useFetch from '../custom/useFetch';
import '../styles/pokemonDetail.scss';

const PokemonDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon/` + id);
  
    const [orderNum, setOrderNum] = useState('');
    useEffect(() => {
        if (id <10) {
            setOrderNum('00' + id);
            
    
        } else if (id <100 && id >=10) {
            setOrderNum('0' + id);
    
        } else if (id >=100) {
            setOrderNum(id);

        }

    },[data]);
  
 

      
    function handleClick() {
      history.push("/");
    }
    return (
        <>
        {isLoading === true && (id != data.order-1) && 
                
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        
                   
                }
                {!isLoading && (id == data.order-1) &&
               
<div className="pokemon-detail__container">

        <div className="pokemon-detail__header">
            <div className="detail-title"><span>{data.name}</span> <span style={{"fontSize": "40px"}}>#{orderNum}</span></div>
        </div>
        <div className="pokemon-detail__body">
            <div className="detail-profile">
                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + orderNum + ".png"}/>
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
                        <span className="info-num">Both</span>
                    </div>
                    <div className="info-right">
                    {!isLoading && data.types && data.types.length>0 && 
                    data.types.map((item) => {
                        return (
                    <div className={'type-btn' + ' ' + (item.type.name)}><span className="desc-type">{item.type.name}</span></div>

                        )

                    })
                    }
                       
                        
                    </div>

                </div>
            </div>
        </div>
        <div className="pokemon-detail__footer"></div>

</div>
  }
        
  
        </>
    )

}
export default PokemonDetail;