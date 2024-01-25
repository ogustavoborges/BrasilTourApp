import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pagina/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'passeios',
    loadChildren: () => import('./pagina/passeios/passeios.module').then( m => m.PasseiosPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pagina/contato/contato.module').then( m => m.ContatoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
