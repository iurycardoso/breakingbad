import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  filmsUrl = 'https://breakingbadapi.com/api/characters';

  constructor(private http: HttpClient) { }

  /** metodo get para listar todos os personagens */
  listar() {
    return this.http.get<any[]>(`${this.filmsUrl}`)
  }
}
