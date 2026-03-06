import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Notfound } from './notfound/notfound';
import { Usuario } from './usuario/usuario';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' } ,
    { path: 'home', component: Home, title: 'Home' },
    { path: 'sobre', component: Sobre, title: 'Sobre' },
    { path: 'usuario/:id', component: Usuario, title: 'Usuario' },
    { path: '**', component: Notfound, title: 'Not Found' }
];
