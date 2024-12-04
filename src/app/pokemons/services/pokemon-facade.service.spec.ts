import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonFacadeService } from './pokemon-facade.service';
import { PokemonApiService } from './pokemon-api.service';
import { PokemonStoreService } from './pokemon-store.service';
import { PokemonMinimal } from '../models/pokemon-minimal.model';
import { of } from 'rxjs';

describe('PokemonFacadeService', () => {
    let facade: PokemonFacadeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PokemonFacadeService, PokemonApiService, PokemonStoreService],
        });
        facade = TestBed.inject(PokemonFacadeService);
    });

    it('devrait récupérer les premiers Pokémon et les stocker', (done) => {
        const apiService = TestBed.inject(PokemonApiService);
        const storeService = TestBed.inject(PokemonStoreService);

        const mockPokemons: PokemonMinimal[] = [
            { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        ];

        jest.spyOn(apiService, 'getFirstPokemons').mockReturnValue(of(mockPokemons));
        const storeSpy = jest.spyOn(storeService, 'setPokemonsMinimal$').mockReturnValue(of(mockPokemons));

        facade.getFirstPokemons(1).subscribe((pokemons) => {
            expect(pokemons).toEqual(mockPokemons);
            expect(storeSpy).toHaveBeenCalledWith(1, mockPokemons);
            done();
        });
    });
});
