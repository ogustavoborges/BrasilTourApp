import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'body' },
    { title: 'Passeios', url: '/folder/favorites', icon: 'airplane' },
    { title: 'Botão', url: '/botao', icon: 'mail' },
    { title: 'Lista', url: '/lista', icon: 'list' },
  ];
  constructor() {}
}
