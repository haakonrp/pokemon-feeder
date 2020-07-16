import React from 'react';
import Bulbasaur from '../assets/pokemon/1.png';
import Charmander from '../assets/pokemon/4.png';
import Squirtle from '../assets/pokemon/7.png';


class StarterSelect extends React.Component {
    render() {
        return (
            <div className="select-container">
                <div className="starter-pokemon-container">
                    <img src={Bulbasaur} className="starter-pokemon no-drag" onClick={() => this.props.handleClick("Bulbasaur")} alt="Bulbasaur" />
                    <img src={Charmander} className="starter-pokemon no-drag" onClick={() => this.props.handleClick("Charmander")} alt="Charmander" />
                    <img src={Squirtle} className="starter-pokemon no-drag" onClick={() => this.props.handleClick("Squirtle")} alt="Squirtle" />
                </div>
                <div className="starter-text">Select Starter Pokemon</div>
            </div>
        );
    }
}

export default StarterSelect;