import { Injectable } from '@angular/core';
import { PokemonMinimal } from '../models/pokemon-minimal.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Cache } from '../../common/services/cache/cache.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonStoreService {
  pokemonsMinimal$: BehaviorSubject<Cache<PokemonMinimal[]>> = new BehaviorSubject<Cache<PokemonMinimal[]>>(new Map());

  setPokemonsMinimal$(page: number, pokemons: PokemonMinimal[]): Observable<PokemonMinimal[]> {
    const actualCache = this.pokemonsMinimal$.value;
    this.pokemonsMinimal$.next(actualCache.set(page, pokemons));
    return this.pokemonsMinimal$.asObservable().pipe(map((cache: Cache<PokemonMinimal[]>) => cache.get(page) ?? []));
  }
}
