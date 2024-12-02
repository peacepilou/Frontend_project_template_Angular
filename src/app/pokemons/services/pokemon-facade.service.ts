import { inject, Injectable } from '@angular/core';
import { PokemonApiService } from './pokemon-api.service';
import { PokemonStoreService } from './pokemon-store.service';
import { PokemonMinimal } from '../models/pokemon-minimal.model';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonFacadeService {
  private _api = inject(PokemonApiService);
  private _store = inject(PokemonStoreService);

  getFirstPokemons(page: number): Observable<PokemonMinimal[]> {
    return this._api.getFirstPokemons().pipe(switchMap((data: PokemonMinimal[]) => this._store.setPokemonsMinimal$(page, data)));
  }
}
