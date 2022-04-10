import { AppState } from '../app.state';

export const selectPokemons = (state: AppState) =>state.pokemon.pokemons;
export const selectPokemonsLoading = (state: AppState) =>state.pokemon.isLoading;
