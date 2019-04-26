import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail'
import {selectAllPokemon, selectPokeItems} from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';


const mapStateToProps = state => ({ //root, entities, etc...
    // piece of state that container subscribes to
    pokemon: selectAllPokemon(state), //props.pokemon
    items: selectPokeItems(state) //all items, but not limited to ^ pokemon
});

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)) // dispatch requestAllPokemon action
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);