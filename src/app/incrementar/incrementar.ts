import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementar',
  imports: [],
  templateUrl: './incrementar.html',
  styleUrl: './incrementar.css',
})
export class Incrementar {
  contador:number = 0;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
  zerar(){
    this.contador = 0;
  }

}
