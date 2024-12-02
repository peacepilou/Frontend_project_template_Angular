import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { HttpService } from '../../common/services/http.service';
import { PAGINATION_LIMIT_50 } from '../../common/services/cache/cache.model';
import { PokemonMinimal } from '../models/pokemon-minimal.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService extends HttpService {
  private readonly _BASE_API_URL: string = '';

  getFirstPokemons(): Observable<PokemonMinimal[]> {
    return this.http
      .get<ApiResponse>(`${this._BASE_API_URL}/pokemon?limit=${PAGINATION_LIMIT_50}`)
      .pipe(map((response: ApiResponse) => response.results));
  }
}
