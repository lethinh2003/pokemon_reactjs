import './App.css';
import './styles/body.scss';
import Pokemon from './view/Pokemon';
import PokemonDetail from './view/PokemonDetail';
import Nav from './view/Nav';
import Contact from './view/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

          <Route path="/detail/:name" exact>
          <PokemonDetail />
            
          </Route>
          <Route path="/contact">
          <Contact />
        
            
          </Route>
        </Switch>
        </Router>
         
        </div>
    </>
  );
}

export default App;
