import logo from './logo.svg';
import './App.css';
import './styles/body.scss';
import Pokemon from './view/Pokemon';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";


function App() {
  return (
    <>
        <div className="container"> 
        <Router>
        <Switch>
          <Route path="/" exact>
            <Pokemon />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
         
        </div>
    </>
  );
}

export default App;
