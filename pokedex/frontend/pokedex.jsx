import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    //testing
    const store = configureStore();
    window.store = store;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.selectAllPokemon = selectAllPokemon;

    ReactDOM.render(<Root store={store}/>, root);
})