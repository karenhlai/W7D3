import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions'
import * as APIUtil from './util/api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;

    ReactDOM.render(<h1>Pokedex</h1>, root);
})