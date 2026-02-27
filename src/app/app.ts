import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//componets
import { Perfil } from './perfil/perfil';
import { Incrementar } from './incrementar/incrementar';
import { NomeTela } from './nome-tela/nome-tela';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Perfil, Incrementar, NomeTela],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetc1');
}
