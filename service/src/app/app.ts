import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { UsuarioComService } from './usuario-com-service/usuario-com-service';

@Component({
  selector: 'app-root',
  imports: [Usuarios, UsuarioComService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service');
}
