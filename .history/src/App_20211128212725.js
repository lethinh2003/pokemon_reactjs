import logo from './logo.svg';
import './App.css';
import './styles/body.scss';
import Pokemon from './view/Pokemon';
import PokemonDetail from './view/PokemonDetail';
import Nav from './view/Nav';
import Contact from './view/Contact';
import { useState } from 'react';
import ThemeProvider from './custom/theme';
import Global from './custom/global';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>

        <div className="container"> 
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Global />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <TextChange>Dark Mode</TextChange>
      </ThemeProvider>
        
        <Router>
            <Nav />
    
        <Switch>
          <Route path="/" exact>
            <Pokemon />
          </Route>

          <Route path="/detail/:id" exact>
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
