import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index'
import selectAllPokemon from '../../reducers/selectors';


const mapStateToProps = state => ({
    // piece of state that container subscribes to
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()) // dispatch requestAllPokemon action.
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);