import React, { Component } from 'react'
import axios from 'axios';
import Pokecell from './Pokecell';
import './styles/Pokemonlist.scss';

export default class Pokemonlist extends Component {
    state= {
      url: "https://pokeapi.co/api/v2/pokemon?limit=151",
      pokemon: null
    };
  
    async componentDidMount() {
      const res = await axios.get(this.state.url);
      this.setState({ pokemon: res.data['results'] });
    }

    render() {
        return (
        <React.Fragment>
            {this.state.pokemon ? ( 
                <div className="pokemonlist">
                    {this.state.pokemon.map(pokemon => (
                        <Pokecell 
                        key = {pokemon.name}
                        name = {pokemon.name}
                        url = {pokemon.url}
                        />
                    ))}
                </div>
                ) : (
                
                    <h1>Loading pokémon...</h1>
                )}

        </React.Fragment>
        );
    }
}