import axios from 'axios';
import useFetch from '../custom/useFetch';
import './Pokemon.scss';
import { useState, useEffect } from 'react';
import PokemonSearch from './PokemonSearch';
const  Pokemon = () => {

    const  [loadpage, setLoadpage] =  useState(0);
    
    


    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${loadpage}&limit=10`);
    let currentData =  data.results;

    console.log(currentData);
    function handleLoadpage() {
        setLoadpage(loadpage+10);

    }
 
    

    



  
      
            

       
    
 
   
   
    return(
        <>

        {isLoading === true && 
                
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    
                
            }
            <div className="card-body">

        {isLoading === false && currentData && currentData.length > 0 && currentData.map((item) => {
            return(
                <div className="card-item">
        <div className="card-item__body">
        <div className="card-item__img"><img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/></div>
        <div className="card-item__name">{item.name}</div>
        </div>
        
        </div>

            )
   

        })}
        <div className="pokemon-more" onClick={() => handleLoadpage() }>Xem thêm</div>
        </div>
  
        </>


    )


}
export default Pokemon;