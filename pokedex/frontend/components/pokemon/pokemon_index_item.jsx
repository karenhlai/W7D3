import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => (
    <li>
    <Link to={`/pokemon/${props.pokemon.id}`}>
        <img src={props.pokemon.image_url} height="25px" width="25px"></img> 
        {props.pokemon.name}
    </Link>
    </li>
)

export default PokemonIndexItem;