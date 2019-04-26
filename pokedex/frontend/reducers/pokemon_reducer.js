import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

function pokemonReducer(state={}, action) {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            Object.values(action.pokemon).forEach (poke => {
                nextState[poke.id] = poke;
            });
            return nextState;
        case RECEIVE_ONE_POKEMON:
            nextState[action.payload.pokemon.id] = action.payload.pokemon
            return nextState;
        default:
            return state;
    }
}

export default pokemonReducer;