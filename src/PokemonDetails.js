import React from 'react';
import LocPokemon from './LocPokemon';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const { pokemons } = this.props;
    const { id } = this.props.match.params;
    const pokemon = pokemons.find((pokemon) => pokemon.id === +(id));

    return (
      <div>
        <Pokemon pokemon={pokemon} />
        <div>
          <h2>Summary</h2>
          <p>{pokemon.summary}</p>
        </div>
        <div>
          <h2>Game Locations</h2>
          {pokemon.foundAt.map((loc) => <LocPokemon location={ loc } />)}
        </div>
      </div>
    )
  }
}

export default PokemonDetails