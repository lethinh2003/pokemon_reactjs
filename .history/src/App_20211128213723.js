import logo from './logo.svg';
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
  Link
} from "react-router-dom";


function App() {
  const lightTheme = {
    textColor: "#fff",
    background: "rgba(29, 143, 158, 0.507)"
  };
  
  const darkTheme = {
    textColor: "#000",
    background: "rgba(11, 12, 12, 0.822)"

  };


  const TextChange = styled.h1`
  color: ${({ theme }) => theme.textColor};
`
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
