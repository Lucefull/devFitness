import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (e) => e.LoginPagePageModule
      ),
  },
  {
    path: '',
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
    path: 'exercicios/:id',
    loadChildren: () =>
      import('./exercicios/exercicios.module').then(
        (m) => m.ExerciciosPageModule
      ),
  },
  {
    path: 'tabs/tab2',
    loadChildren: () =>
      import('./tab2/tab2.module').then(
        (m) => m.Tab2PageModule
      ),      
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
