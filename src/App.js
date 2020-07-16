import React from 'react';
import Pokemon from './components/Pokemon'
import StarterSelect from './components/StarterSelect'
import Logo from './assets/logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
    };
  }

  setPokemon = (name) => {
    this.setState({pokemon: name})
  }

  render() {
    return (
      <div className="app">
        <img src={Logo} className="logo no-drag" alt="Pokemon Logo" />
        {this.state.pokemon ? <Pokemon name={this.state.pokemon}/> : <StarterSelect handleClick={this.setPokemon}/>}
      </div>
    );
  }
}

export default App;
