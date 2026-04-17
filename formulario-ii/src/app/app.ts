import { Component, signal } from '@angular/core';
import { Forms } from './form-i/forms';
import { FormII } from './form-ii/form-ii';
import { FormIII } from './form-iii/form-iii';
import { FormIV } from './form-iv/form-iv';


@Component({
  selector: 'app-root',
  imports: [Forms, FormII, FormIII, FormIV],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formulario-ii');
}
