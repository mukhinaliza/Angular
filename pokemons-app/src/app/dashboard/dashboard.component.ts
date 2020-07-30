import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  
  constructor(private pokemonService: PokemonService) { }
  
  catchPokemon(event, name) {
    if (event.target.innerHTML === 'Поймать') {
      console.log(`Покемон ${name} был пойман`);
      event.target.innerHTML = 'Отпустить';
    } else if (event.target.innerHTML === 'Отпустить') {
      console.log(`Покемон ${name} был отпущен`);
      event.target.innerHTML = 'Поймать';
    }
  }
  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons.slice(1, 11));
  }
}
