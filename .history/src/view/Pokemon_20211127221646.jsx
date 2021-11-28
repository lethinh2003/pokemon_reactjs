import axios from 'axios';
import useFetch from '../custom/useFetch';
import './Pokemon.scss';
import { useState, useEffect } from 'react';
import PokemonSearch from './PokemonSearch';
const  Pokemon = () => {
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    let currentData =  data.results;
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

        </div>
  
        </>


    )


}
export default Pokemon;