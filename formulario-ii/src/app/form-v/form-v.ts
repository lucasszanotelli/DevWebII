import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


function numeroPositivoValido(): ValidatorFn {
  return (control: AbstractControl) => {
    const valor = String(control.value ?? '').trim();
    if (!valor) return null;

    if (!/^\d+$/.test(valor)) {
      return { numeroInvalido: true };
    }

    const numero = Number(valor);
    return numero <= 0 ? { numeroInvalido: true } : null;
  };
}

function bairroNoLogradouro(): ValidatorFn {
  return (control: AbstractControl) => {
    const logradouro = String(control.get('logradouro')?.value ?? '');
    const bairro = String(control.get('bairro')?.value ?? '');

    // Normalização
    const logradouroNormalizado = logradouro.trim().toLowerCase();
    const bairroNormalizado = bairro.trim().toLowerCase();

    return logradouroNormalizado !== '' &&
      bairroNormalizado !== '' &&
      logradouroNormalizado.includes(bairroNormalizado)
      ? { bairroNoLogradouro: true }
      : null;

  };
}


@Component({
  selector: 'app-form-v',
  imports: [ReactiveFormsModule],
  templateUrl: './form-v.html',
  styleUrl: './form-v.css',
})
export class FormV {
  private fb = inject(FormBuilder);
  formulario = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    endereco: this.fb.group(
      {
        logradouro: [''],
        numero: ['', [Validators.required, numeroPositivoValido()]],
        bairro: [''],
      },
      { validators: [bairroNoLogradouro()] },
    ),
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

  get nome() {
    return this.formulario.get('nome');
  }
  get endereco() {
    return this.formulario.get('endereco');
  }
  get numero() {
    return this.endereco?.get('numero');
  }
  get bairro() {
    return this.endereco?.get('bairro');
  }

}