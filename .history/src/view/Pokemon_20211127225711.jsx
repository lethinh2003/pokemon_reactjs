import axios from 'axios';
import useFetch from '../custom/useFetch';
import './Pokemon.scss';
import { useState, useEffect } from 'react';
import PokemonSearch from './PokemonSearch';
import 'aos/dist/aos.css';
import Aos from 'aos';
const  Pokemon = () => {
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    let currentData =  data.results;
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 50,
        });
        
      }, []);
    return(
        <>

        {isLoading === true && 
                
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    
                
            }
            <div className="card-body">

        {isLoading === false && currentData && currentData.length > 0 && currentData.map((item) => {
            return(
                <div className="card-item" data-aos="fade-up">
        <div className="card-item__body">
        <div className="card-item__img"><img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/></div>
        <div className="card-item__info">
        <div className="card-item__name">{item.name}</div>
        </div>
        </div>
        
        </div>

            )
   

        })}

        </div>
  
        </>


    )


}
export default Pokemon;