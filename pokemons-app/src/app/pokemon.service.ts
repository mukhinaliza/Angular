import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class PokemonService {

  constructor(private messageService: MessageService) { }


  getPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

   getPokemon(id: number): Observable<Pokemon> {
    return of(POKEMONS.find(pokemon => pokemon.id === id));
}

}
