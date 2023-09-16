import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (e) => e.LoginPagePageModule
      ),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'cadastrar-treino',
    loadChildren: () =>
      import('./cadastrar-treino/cadastrar-treino.module').then(
        (m) => m.CadastrarTreinoPageModule
      ),
  },
  {
    path: 'login-page',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPagePageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
