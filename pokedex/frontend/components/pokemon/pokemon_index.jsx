import React from 'react';
import {Route} from 'react-router-dom'
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }
    
    render() {
        return (
            <>
                <ul>
                    <Route exact path="/pokemon/:pokemonId" container={PokemonDetailContainer}></Route>
                    {this.props.pokemon.map(poke => {
                        return ( 
                            <PokemonIndexItem key={poke.id} pokemon={poke}></PokemonIndexItem>
                            //how to know to pass in key and poke
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default PokemonIndex;