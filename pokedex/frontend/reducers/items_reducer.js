import { RECEIVE_POKE_ITEMS } from '../actions/pokemon_actions';


function itemsReducer (state={}, action) {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POKE_ITEMS:
            Object.values(action.payload.items).forEach(item => {
                nextState[item.id] = item;
            });
            return nextState;
        default:
            return state;
    }
}

export default itemsReducer;