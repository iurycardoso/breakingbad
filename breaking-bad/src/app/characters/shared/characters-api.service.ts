import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




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
