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
    // if (data && data.results && data.results.length > 0 && !keyword ) {
        useEffect(() => {
          
           

        
                    const dataCurent = data.results;
                 
                    console.log('Data coppy ', dataCurent);
                
               
           
            

            // const dataSearch = currentData.filter()
            setCurrentData(data.results);
        },[data])
        useEffect(() => {
            if (currentData && currentData.length > 0) {
                let currentDataSearched = currentData.filter((item) => {
                    return item.name.toLowerCase().includes(keyword.toLowerCase())
                })
                setCurrentData(currentDataSearched);
            }

        }, [keyword])
        

    // }
    const handleChangeKeyword = (word) => {
        setKeyword(word)

    }
    const handleChangeSearchStatus = (status) => {
        setIsSearch(status)

    }
    if (isSearch === true) {
        console.log('search is true');
    }
    // let currentData =  data.results;
 
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
            {isLoading === false &&
            <Search
            handleChangeKeyword={handleChangeKeyword}
            handleChangeSearchStatus={handleChangeSearchStatus}
             />
             }
            
            <div className="card-body">{keyword}
       

        {isLoading === false && currentData && currentData.length > 0 && currentData.map((item, index) => {
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