import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//componets
import { Perfil } from './perfil/perfil';
import { Incrementar } from './incrementar/incrementar';
import { NomeTela } from './nome-tela/nome-tela';
import { Listav1 } from './listav1/listav1';
import { Listav2 } from './listav2/listav2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Perfil, Incrementar, NomeTela, Listav1, Listav2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetc1');
}
