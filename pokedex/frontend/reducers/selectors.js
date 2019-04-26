export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon);
}

export const selectPokeItems = (state) => {
    return Object.values(state.entities.items);
}