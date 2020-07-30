import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { MessagesComponent } from './messages/messages.component';
import { HighlightDirective } from './highlight.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonsComponent,
    PokemonDetailComponent,
    MessagesComponent,
    HighlightDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
     FormsModule,
     AppRoutingModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
