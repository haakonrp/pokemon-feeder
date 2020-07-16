import React from 'react';
import Pokemon1 from '../assets/pokemon/1.png';
import Pokemon2 from '../assets/pokemon/2.png';
import Pokemon3 from '../assets/pokemon/3.png';
import Pokemon4 from '../assets/pokemon/4.png';
import Pokemon5 from '../assets/pokemon/5.png';
import Pokemon6 from '../assets/pokemon/6.png';
import Pokemon7 from '../assets/pokemon/7.png';
import Pokemon8 from '../assets/pokemon/8.png';
import Pokemon9 from '../assets/pokemon/9.png';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      increment: 1,
      stage: 0,
      evolved: false,
    };
  }

  gainPoint = () => {
    this.setState((state) => ({
      points: state.points + state.increment
    }));

    if (this.state.points >= 9 && this.state.stage === 0) {
      this.evolve();
    }

    if (this.state.points >= 99 && this.state.stage === 1) {
      this.evolve();
    }
  }

  evolve = () => {
    this.setState((state) => ({
      stage: state.stage + 1,
    }));
  }

  getPokemonSrc = (name, stage) => {
    let src;
    switch (name) {
      case "Bulbasaur":
        if (stage === 0) {
          src = Pokemon1;
        } else if (stage === 1) {
          src = Pokemon2;
        } else {
          src = Pokemon3;
        }
        break;

      case "Charmander":
          if (stage === 0) {
            src = Pokemon4;
          } else if (stage === 1) {
            src = Pokemon5;
          } else {
            src = Pokemon6;
          }
        break;

      case "Squirtle":
          if (stage === 0) {
            src = Pokemon7;
          } else if (stage === 1) {
            src = Pokemon8;
          } else {
            src = Pokemon9;
          }
        break;
    
      default:
        break;
    }
    return src;
  }

  render() {
    return (
      <div className="pokemon-container">
        <img src={this.getPokemonSrc(this.props.name, this.state.stage)} className="pokemon no-drag" onClick={this.gainPoint} alt="Pokemon" />
        <div className="points">{this.state.points}</div>
      </div>
    );
  }
}

export default Pokemon;