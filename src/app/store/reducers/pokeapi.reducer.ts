import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/pokeapi/models/pokeapi";
import { pokemonListInpogress, pokemonListSuccess, retrievedPokemonList } from "../action/pokeapi.action";

export interface PokemonModel {
    pokemons: Pokemon[];
    isLoading: boolean;
}
export const initialState: PokemonModel = {
    pokemons: [],
    isLoading: false
};

export const pokemonReducer = createReducer(
    initialState,
    on(retrievedPokemonList, (state, { pokemons = [] }) => {
        return {...state, ...{pokemons:pokemons}};
    }),
    on(pokemonListInpogress, (state, { isLoading = false }) => {
        return {...state, ...{isLoading:isLoading}};
    }),
    on(pokemonListSuccess, (state, { isLoading = false }) => {
        return {...state, ...{isLoading:isLoading}};
    }),
);