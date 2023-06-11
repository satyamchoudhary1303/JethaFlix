import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Play from './components/Play';
import Playsearch from './components/Playsearch';

function App(){
    return (
        <>
        <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path='/:numfirst/:numsuggest/:num' element={<Playonclick/>}/>
            <Route exaxt path='/:search' element={<Playonsearch/>}/>
        </Routes>
        </Router>
        </>
    );
}

function Playonclick() {
  const { numfirst, numsuggest , num } = useParams() || {};
  return <Play numfirst={numfirst} numsuggest={numsuggest} num = {num}/>;
}

function Playonsearch() {
  const { search } = useParams() || {};
  return <Playsearch search = {search}/>;
}

export default App;