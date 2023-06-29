import './App.css';
import React, { useEffect } from 'react';
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
  const apikey = process.env.REACT_APP_YT_API

    return (
        <>
        <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path='/:numfirst/:numsuggest/:num' element={<Playonclick apikey={apikey}/>}/>
            <Route exaxt path='/:search' element={<Playonsearch apikey={apikey}/>}/>
        </Routes>
        </Router>
        </>
    );
}

function Playonclick({apikey}) {
  const { numfirst, numsuggest , num } = useParams() || {};
  useEffect(() => {
    document.title = `JethaFlix | Episode - ${num}`;
  }, [num]);
  return <Play numfirst={numfirst} numsuggest={numsuggest} num = {num} apikey={apikey}/>;
}

function Playonsearch({apikey}) {
  const { search } = useParams() || {};
  useEffect(() => {
    if (!isNaN(search)) {
      document.title = `JethaFlix | Episode - ${search}`;
    } else if (typeof search === 'string' && search.length > 0) {
      const firstChar = search.charAt(0).toUpperCase();
      const remainingChars = search.slice(1);
      document.title = `JethaFlix | ${firstChar}${remainingChars}`;
    }
  }, [search]);  
  return <Playsearch search = {search} apikey={apikey}/>;
}

export default App;