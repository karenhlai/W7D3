import React from 'react'

class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon;
    }
    
    render() {
        return (
            <><ul>
                {this.props.pokemon.map(poke => {
                    return( 
                        <li><img src={poke.image_url} height="25px" width="25px"></img>{poke.name}</li>
                    )
                })}
            </ul></>
        );
    }
}

export default PokemonIndex;