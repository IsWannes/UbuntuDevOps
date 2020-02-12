import { Component, OnInit, Input } from '@angular/core';
import { ISinglePokemon, IAbility } from '../lobet.service';

@Component({
  selector: 'app-lobet-child',
  templateUrl: './lobet-child.component.html',
  styleUrls: ['./lobet-child.component.css']
})
export class LobetChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input("pokemon") childpokemon: ISinglePokemon;

}
