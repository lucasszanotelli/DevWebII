import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nome-tela',
  imports: [FormsModule],
  templateUrl: './nome-tela.html',
  styleUrl: './nome-tela.css',
})
export class NomeTela {
  nome:string = ''

}
