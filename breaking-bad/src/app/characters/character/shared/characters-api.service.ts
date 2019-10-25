import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  URL_API = 'https://breakingbadapi.com/api/characters';

  constructor(private http: HttpClient) { }

  /** metodo get para listar todos os personagens */
  
  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}
