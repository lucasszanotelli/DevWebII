import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-iii',
  imports: [ReactiveFormsModule],
  templateUrl: './form-iii.html',
  styleUrl: './form-iii.css',
})
export class FormIII {
  formulario = new FormGroup({
    novoTelefone:new FormControl(''),
    telefones: new FormArray([])
  });

  addTelefone() {
    const novoTelefone = this.formulario.get('novoTelefone')?.value;
    if (novoTelefone) {
      this.telefones.push(new FormControl(novoTelefone));
      this.formulario.get('novoTelefone')?.setValue('');
    }
  }

  removerTelefone(index: number) {
    (this.formulario.get('telefones') as FormArray).removeAt(index);
  }

  get telefones() : FormArray{
    return this.formulario.get('telefones') as FormArray;
  }
}