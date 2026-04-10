import { Routes } from '@angular/router';
import { Forms } from './form-i/forms';
import { FormIII } from './form-iii/form-iii';
import { FormII } from './form-ii/form-ii';

export const routes: Routes = [
    { path: 'forms', component: Forms },
    { path: 'form-ii', component: FormII },
    { path: 'form-iii', component: FormIII }
];
