import { Component, signal } from '@angular/core';
import { Forms } from './form-i/forms';
import { FormII } from './form-ii/form-ii';
import { FormIII } from './form-iii/form-iii';


@Component({
  selector: 'app-root',
  imports: [Forms, FormII, FormIII],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formulario-ii');
}
