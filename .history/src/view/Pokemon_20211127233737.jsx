import axios from 'axios';
import useFetch from '../custom/useFetch';
import './Pokemon.scss';
import { useState, useEffect, useImperativeHandle } from 'react';
import PokemonSearch from './PokemonSearch';
import 'aos/dist/aos.css';
import Aos from 'aos';
const  Pokemon = () => {
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    let currentData =  data.results;
    const [ styleHover, setStyleHover ] = useState('');
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 50,
        });
        
      }, []);
      const handleMouseOver = (e) => {
          setStyleHover('background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);')
          
      }
    return(
        <>

        {isLoading === true && 
                
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    
                
            }
            <div className="card-body">

        {isLoading === false && currentData && currentData.length > 0 && currentData.map((item) => {
            return(
                <div className="card-item" style={styleHover} data-aos="fade-up" onMouseOver={(e) => handleMouseOver(e)}>
        <div className="card-item__body">
        <div className="card-item__img"><img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/></div>
        <div className="card-item__info">
        <div className="card-item__name">{item.name}</div>
        <div className="card-item__type">


           
            {/* <div className="type-btn gass"><span className="desc-type">Gass</span></div>
            <div className="type-btn gass"><span className="desc-type">Gass</span></div> */}
     
            
       
        </div>
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