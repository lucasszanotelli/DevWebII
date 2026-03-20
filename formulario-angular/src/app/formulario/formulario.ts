import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome: string = '';
  filme: string = '';
  isMaiorDeIdade: boolean = false;
  genero: string = '';

  enviar(){
    alert("Formulário enviado com sucesso!");
  }
  enviar1(propForm: NgForm){
    if(propForm.valid){
      alert("Formulário enviado com sucesso! " + this.nome);
    }else{
      alert("Formulário inválido!");
    }
  }

}
