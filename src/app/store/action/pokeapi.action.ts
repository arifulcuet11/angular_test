import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/pokeapi/models/pokeapi';

export const retrievedPokemonList = createAction(
  '[Pokemon List/API] Retrieve Pokemons Success',
  props<{ pokemons:Pokemon[] }>()
);
export const pokemonListInpogress = createAction(
    '[Pokemon List/API] Retrieve Pokemons Inpogress',
    props<{ isLoading:boolean }>()
  );
  export const pokemonListSuccess = createAction(
    '[Pokemon List/API] Retrieve Pokemons Success Result',
    props<{ isLoading:boolean }>()
  );