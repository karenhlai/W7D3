import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
export const RECEIVE_POKE_ITEMS = 'RECEIVE_POKE_ITEMS';

//index only shows 3 keys preview of all pokemons 
//receiving one type of entity (pokemon slice)
export const receiveAllPokemon = pokemon => ({ 
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

//show all attributes of a single pokemon 
//receiving two entities (pokemone and items)
export const receiveOnePokemon = payload => ({
    type: RECEIVE_ONE_POKEMON,
    payload
});

export const receivePokeItems = payload => ({
    type: RECEIVE_POKE_ITEMS,
    payload
});

//THUNK ACTION CREATORS

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
    APIUtil.requestSinglePokemon(id)
        .then(payload => {
            dispatch(receiveOnePokemon(payload));
            dispatch(receivePokeItems(payload))
            // return payload;
        })
        // .then(payload => {
        //     dispatch(receivePokeItems(payload));
        // })
)