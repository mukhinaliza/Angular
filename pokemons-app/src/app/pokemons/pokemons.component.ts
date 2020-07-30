import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
 
  toggle = true;
  pokemons: Pokemon[];
  constructor(private pokemonService: PokemonService, private messageService: MessageService) { }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
  ngOnInit(): void {
    this.getPokemons();
  }
  selectedPokemon: Pokemon;
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    
  }
 
  toggleCards() {
    this.toggle = !this.toggle;
  }
}