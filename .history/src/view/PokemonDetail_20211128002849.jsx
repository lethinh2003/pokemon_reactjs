import {useParams, useHistory} from "react-router-dom";

const PokemonDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    let { data, isLoading } =  useFetch(`https://pokeapi.co/api/v2/pokemon/` + id);
    let currentData =  data.results;
    console.log(currentData);
      
    function handleClick() {
      history.push("/blogs");
    }
    return (
        <p>Hello {id}</p>
    )

}
export default PokemonDetail;