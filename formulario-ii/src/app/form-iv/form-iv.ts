import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-iv',
  imports: [ReactiveFormsModule],
  templateUrl: './form-iv.html',
  styleUrl: './form-iv.css',
})
export class FormIV {
  private fb = inject(FormBuilder);
  formulario = this.fb.group({
    nome: [''],
    endereco: this.fb.group({
      logradouro: [''],
      numero: [''],
      bairro: ['']
    })
  });


  limparNome() {
    this.formulario.get('nome')?.setValue('');
  }

  limparNumero() {
    this.formulario.get('endereco')?.get('numero')?.setValue('');
  }

  limparEndereco() {
    this.formulario.get('endereco')?.reset();
  }

  limparTudo() {
    this.formulario.reset();
  }

}