import { Component } from '@angular/core';


@Component({
  selector: 'app-listav1',
  imports: [],
  templateUrl: './listav1.html',
  styleUrl: './listav1.css',
})
export class Listav1 {
  itens: string[] = [
    'Arroz',
    'Feijão',
    'Macarrão',
    'Leite',
    'Açúcar',
    'Legumes',
    'Frutas'
  ];
  
}
