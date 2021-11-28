import logo from './logo.svg';
import './App.css';
import './styles/body.scss';
import Pokemon from './view/Pokemon';
import PokemonDetail from './view/PokemonDetail';
import Nav from './view/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>

        <div className="container"> 
        
        <Router>
            <Nav />
    
        <Switch>
          <Route path="/" exact>
            <Pokemon />
          </Route>

          <Route path="/detail/:id" exact>
          <PokemonDetail />
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
        </Router>
         
        </div>
    </>
  );
}

export default App;
