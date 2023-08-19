import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inscription', loadChildren: () => import('./views/page/formulair-inscription/formulair-inscription.module').then(m => m.FormulairInscriptionModule) },
  {
    path: '**',
    redirectTo: 'inscription',
    pathMatch: 'full'
  },
  // {
  //   path: 'formulair',
  //   component: FormulaiInscriptionPage4Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
