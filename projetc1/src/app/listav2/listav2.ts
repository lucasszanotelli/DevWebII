import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Produto = {
  nome: string;
  qtd: number;
};

@Component({
  selector: 'app-listav2',
  imports: [CommonModule],
  templateUrl: './listav2.html',
  styleUrl: './listav2.css',
})
export class Listav2 {
  produtos: Produto[] = [
    { nome: 'Arroz', qtd: 5 },
    { nome: 'Feijão', qtd: 2 },
    { nome: 'Macarrão', qtd: 1 },
    { nome: 'Carne', qtd: 3 },
    { nome: 'Leite', qtd: 8 },
    { nome: 'Açúcar', qtd: 0 },
    { nome: 'Óleo', qtd: 4 },
  ];

  getItemClass(produto: Produto): string {
    if (produto.qtd < 2) {
      return 'vermelho';
    } else if (produto.qtd <= 3) {
      return 'laranja';
    } else {
      return 'verde';
    }
  }

}