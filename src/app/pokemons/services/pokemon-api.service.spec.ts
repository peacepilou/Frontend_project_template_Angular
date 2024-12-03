import { TestBed } from "@angular/core/testing";
import { PokemonApiService } from "./pokemon-api.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PAGINATION_LIMIT_50 } from "../../common/services/cache/cache.model";

describe('PokemonApiService', () => {
    let service: PokemonApiService;
    let httpMock: HttpTestingController;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(PokemonApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch first pokemons', (done) => {
        const mockResponse = {
            count: 1118,
            next: 'https://pokeapi.co/api/v2/pokemon?offset=50&limit=50',
            previous: null,
            results: [
                {
                    name: 'bulbasaur',
                    url: 'https://pokeapi.co/api/v2/pokemon/1/',
                }
            ]
        };

        service.getFirstPokemons().subscribe((data) => {
            expect(data[0]).toHaveProperty('name', 'bulbasaur');
            done();
        });

        const req = httpMock.expectOne(`${service['_BASE_API_URL']}/pokemon?limit=${PAGINATION_LIMIT_50}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

})

