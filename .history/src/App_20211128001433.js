import logo from './logo.svg';
import './App.css';
import './styles/body.scss';
import Pokemon from './view/Pokemon';
import PokemonDetail from './view/PokemonDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
        </Router>
        <div className="container"> 
        
        <Router>
       
        <Switch>
          <Route path="/" exact>
            <Pokemon />
          </Route>
          <Route path="/detail">
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
