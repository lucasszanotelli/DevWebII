import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit{
  #http = inject(HttpClient);
  usuarios = signal<any[]>([]);

  ngOnInit(){
    this.#http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next:(data) => this.usuarios.set(data),
      error: (err) => alert("erro ao carregar usuarios " + err)
    })

  }

}
