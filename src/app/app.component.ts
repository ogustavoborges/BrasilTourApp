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
    { title: 'Passeios', url: '/passeios', icon: 'airplane' },
    { title: 'Contato', url: '/contato', icon: 'mail' },
  ];
  constructor() {}
}
