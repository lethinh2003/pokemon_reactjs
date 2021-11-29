import axios from 'axios';
import useFetch from '../custom/useFetch';
import '../styles/loading.scss';
import { useState, useEffect, useImperativeHandle } from 'react';
import PokemonDetail from './PokemonDetail';
import Search from './Search';

import 'aos/dist/aos.css';
import {Link} from "react-router-dom";
import Aos from 'aos';
const  Pokemon = () => {
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    const [keyword, setKeyword] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [currentData, setCurrentData] = useState([]);
    const [isLoadingSearch, setIsLoadingSearch] = useState(false);
    useEffect(() => {
        setCurrentData(data.results);
    },[data]);
    useEffect(() => {
        setIsLoadingSearch(true);
        const fakeLoad = setTimeout(() => {
            const dataCurent = data.results;
            if (dataCurent && dataCurent.length > 0) {               
                console.log(isLoadingSearch);
                const dataCurentCopy = data.results;
                let currentDataSearched = dataCurentCopy.filter((item) => {
                    return item.name.toLowerCase().includes(keyword.toLowerCase())
                })
                if (keyword !== '' ) {
                    setCurrentData(currentDataSearched);
                    setIsLoadingSearch(false);                    
                } else {                   
                    setCurrentData(dataCurentCopy);                   
                    setIsLoadingSearch(false);
                    clearTimeout(fakeLoad);
                }
            }
        },50);
    }, [keyword]);
    const handleChangeKeyword = (word) => {
        setKeyword(word)
    }
    const handleChangeSearchStatus = (status) => {
        setIsSearch(status)
    }
    useEffect(() => {
        Aos.init({
            offset: 80,
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
        {isLoadingSearch === true && 
                
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>        
        }
           
        {isLoading === false &&
            <Search
                handleChangeKeyword={handleChangeKeyword}
                handleChangeSearchStatus={handleChangeSearchStatus}
             />
        }
            
            <div className="card-body">
       

        {isLoading === false   && currentData && currentData.length > 0 && currentData.map((item, index) => {
            return(
                <div className="card-item" data-aos="fade-up">              
        <div className="card-item__body">
        <div className="card-item__hover"></div>
        <div className="card-item__img"><img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/></div>
        <div className="card-item__info">
        <div className="card-item__name">{item.name}</div>
        <div className="card-item__type">
        <Link to={"/detail/" + parseInt(index+1)}><div className="type-btn detail"><span className="desc-type">Detail</span></div></Link>
       
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