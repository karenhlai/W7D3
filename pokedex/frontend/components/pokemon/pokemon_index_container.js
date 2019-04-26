import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index'
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';


const mapStateToProps = state => ({
    // piece of state that container subscribes to
    pokemon: selectAllPokemon(state) //ARRAY HERE, WHATS GOING ON
});

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()) // dispatch requestAllPokemon action.
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);