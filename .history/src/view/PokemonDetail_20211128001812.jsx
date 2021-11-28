import {useParams, useHistory} from "react-router-dom";

const PokemonDetail = () => {
    const { name } = useParams();
    let history = useHistory();
      
    function handleClick() {
      history.push("/blogs");
    }
    return (
        <p>Hello</p>
    )

}
export default PokemonDetail;