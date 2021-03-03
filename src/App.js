import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
    }
  }

  render () {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
          <Switch>
            <Route path="/pokemondetails/:id" render={ (props) => <PokemonDetails {...props} pokemons={ pokemons }/> } />
            <Route exact path="/" render={ (props) => <Pokedex pokemons={pokemons} /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;