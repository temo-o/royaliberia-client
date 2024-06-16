import { Component } from '@angular/core';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: "Poke1",
      type: "Electric",
      isCool: true
    },
    {
      id: 2,
      name: "Poke2",
      type: "Sworded",
      isCool: false
    }
  ]
  constructor() {

  }
}
