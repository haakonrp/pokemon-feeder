import React from 'react';
import pokeball from '../assets/pokeball.svg';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
      isLoading: false,
    };
  }


  render() {
    return (
      <div className="container">
        <img src={pokeball} className="pokemon" alt="Pokemon" />
      </div>
    );
  }
}

export default Pokemon;