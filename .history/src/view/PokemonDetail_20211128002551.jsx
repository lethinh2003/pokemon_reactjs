import {useParams, useHistory} from "react-router-dom";

const PokemonDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    // let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    let currentData =  data.results;
      
    function handleClick() {
      history.push("/blogs");
    }
    return (
        <p>Hello {name}</p>
    )

}
export default PokemonDetail;