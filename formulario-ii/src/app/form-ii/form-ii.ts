import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-ii',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ii.html',
  styleUrl: './form-ii.css',
})
export class FormII {
  formulario = new FormGroup({
    nome: new FormControl(''),
    endereco: new FormGroup({
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
    })
  });

  limparNome() {
    this.formulario.get('nome')?.setValue('');
  }
  limparTudo() {
    this.formulario.reset();
  }
  limparEndereco() {
    this.formulario.get('endereco')?.reset();
  }
  limparNumero() {
    this.formulario.get('endereco')?.get('numero')?.setValue('');
  }
}
