import { TestBed } from '@angular/core/testing';

import { PokemonStoreService } from './pokemon-store.service';

describe('PokemonStoreService', () => {
  let service: PokemonStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shouls create a BehaviorSubject with a Map', () => {
    expect(service.pokemonsMinimal$.value).toEqual(new Map());
  });


});
