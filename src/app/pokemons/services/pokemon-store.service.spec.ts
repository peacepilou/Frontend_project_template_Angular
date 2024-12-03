import { TestBed } from '@angular/core/testing';

import { PokemonStoreService } from './pokemon-store.service';
import { PokemonMinimal } from '../models/pokemon-minimal.model';

describe('PokemonStoreService', () => {
  let service: PokemonStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shouls create a BehaviorSubject with an empty Map', () => {
    expect(service.pokemonsMinimal$.value).toEqual(new Map());
  });

  it('should set pokemonsMinimal$ with a new page', () => {
    const page = 1;
    const pokemons: PokemonMinimal[] = [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      }
    ];
    service.setPokemonsMinimal$(page, pokemons).subscribe(() => {
      expect(service.pokemonsMinimal$.value.get(page)).toEqual(pokemons);
    });
  });

});
