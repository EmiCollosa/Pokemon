import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import './App.css';
import LadingPage from './Páginas/LandingPage/LandingPage.jsx';
import Home from './Páginas/Home/Home.jsx';
import PokemonCreate from './Páginas/PokemonCreate/PokemonCreate.jsx';
import PokemonDetail from './Páginas/PokemonDetail/PokemonDetail.jsx';


function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={LadingPage} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/Detail:id"} component={PokemonDetail} />
        <Route exact path={"/create"} component={PokemonCreate} />
        
      <h1>Proyecto Individual Pokemon</h1>
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
