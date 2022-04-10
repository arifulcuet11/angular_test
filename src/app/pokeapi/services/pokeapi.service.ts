import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { pokemonListInpogress, pokemonListSuccess, retrievedPokemonList } from 'src/app/store/action/pokeapi.action';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  routePrefix = '/api/v2/pokemon';

  constructor(private http: HttpClient,
    private store: Store) { }

  getPokemons(limit: number) {
    this.store.dispatch(pokemonListInpogress({ isLoading: true }));
    return this.http.get(`${this.routePrefix}?limit=${limit}&offset=0`).subscribe((res: any) => {
      this.store.dispatch(retrievedPokemonList({ pokemons: res.results }));
      this.store.dispatch(pokemonListSuccess({ isLoading: false }));
    });
  }
}
