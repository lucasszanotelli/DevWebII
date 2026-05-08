import { Component, inject, OnInit, signal } from '@angular/core';
import { Usuario, UsuarioService } from '../services/usuario-service';

@Component({
  selector: 'app-usuario-com-service',
  imports: [],
  templateUrl: './usuario-com-service.html',
  styleUrl: './usuario-com-service.css',
})
export class UsuarioComService implements OnInit {
  #usuarioService = inject(UsuarioService);

  usuarios = signal<Usuario[]>([]);

  ngOnInit(){
    this.#usuarioService.getUsuarios().subscribe({
      next:(data) => this.usuarios.set(data),
      error: (err) => alert("erro ao carregar usuarios " + err)
    })
  }

  usuariosComService(){
    return this.usuarios(); 
  }


}
