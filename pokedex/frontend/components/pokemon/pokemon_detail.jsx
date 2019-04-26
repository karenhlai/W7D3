import React from 'react';

class PokemonDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.pokemonId;
        this.props.requestSinglePokemon(id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }
    
    render () { 
        debugger
        // const poke = this.props.pokemon[this.props.match.params.pokemonId];
        return (

            <div>
                <ul>
                    <li><img src={this.props.pokemon.image_url} /></li>
                    <li>{this.props.pokemon.name}</li>
                    <li>{this.props.pokemon.type}</li>
                    <li>{this.props.pokemon.attack}</li>
                    <li>{this.props.pokemon.defense}</li>
                    <li>{this.props.pokemon.moves}</li>
                    <li>{this.props.pokemon.items}</li>
                </ul>
            </div>
        )
        
    }
}

export default PokemonDetail;