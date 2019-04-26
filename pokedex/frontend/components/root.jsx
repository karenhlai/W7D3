import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

// import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={PokemonIndexContainer} />
            <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </HashRouter>
    </Provider>
)

export default Root;