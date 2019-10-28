import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './shared/characters-api.service';




@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Array<any>

  constructor(private characterSvc: CharactersApiService) { }


  ngOnInit() {
    this.listar();
  }

  listar() {
    this.characterSvc.listar().subscribe(dados => this.allCharacters = dados)
  }

}
