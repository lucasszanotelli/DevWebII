import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Usuario {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  #http = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this.#http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
  }
  
}
