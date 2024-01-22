import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-secao',
  templateUrl: './minha-secao.component.html',
  styleUrls: ['./minha-secao.component.scss'],
})
export class MinhaSecaoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  items = [
    {
      titulo: 'Card 1',
      descricao: 'Descrição do Card 1',
      imagem: 'caminho-para-imagem-1.jpg',
    },
    {
      titulo: 'Card 2',
      descricao: 'Descrição do Card 2',
      imagem: 'caminho-para-imagem-2.jpg',
    }];
}
