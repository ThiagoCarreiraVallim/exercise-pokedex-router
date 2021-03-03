import React from 'react';

class LocPokemon extends React.Component {
  render() {
    const { location, map } = this.props.location;
    return(
      <div>
        <img src={ map } />
        <p>{ location }</p>
      </div>
    )
  }
}

export default LocPokemon;