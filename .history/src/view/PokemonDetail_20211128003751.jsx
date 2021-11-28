import {useParams, useHistory} from "react-router-dom";
import useFetch from '../custom/useFetch';

const PokemonDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon/` + id);
    let currentData =  data.results;
    console.log(data.moves.name);
      
    function handleClick() {
      history.push("/blogs");
    }
    return (
        <>

        {isLoading === true && 
                
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    
                
            }
            <div className="card-body">

        {isLoading === false && currentData && currentData.length > 0 && currentData.map((item, index) => {
            return(
                <div className="card-item" data-aos="fade-up">
        <div className="card-item__body">
        <div className="card-item__img"><img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/></div>
        <div className="card-item__info">
        <div className="card-item__name">{item.name}</div>
        <div className="card-item__type">
        <Link to={"/detail/" + parseInt(index+1)}><div className="type-btn detail"><span className="desc-type">Detail</span></div></Link>


           
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
export default PokemonDetail;