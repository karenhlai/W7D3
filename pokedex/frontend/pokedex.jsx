import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    //testing
    const store = configureStore();
    window.store = store;
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<h1>Pokedex</h1>, root);
})