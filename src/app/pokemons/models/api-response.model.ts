import { PokemonMinimal } from './pokemon-minimal.model';

export type ApiResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonMinimal[];
};
