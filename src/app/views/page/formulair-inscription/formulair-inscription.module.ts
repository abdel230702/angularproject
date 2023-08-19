import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaiInscriptionPage4Component } from './formulai-inscription-page4/formulai-inscription-page4.component';
import { RouterModule, Routes } from '@angular/router';
import { FormulairInscriptionComponent } from './formulair-inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulairInscriptionPage5Component } from './formulair-inscription-page5/formulair-inscription-page5.component';

const routes: Routes = [
  {
    path: '',
    component: FormulairInscriptionComponent,
    children: [
      {
        path: '',
        redirectTo: 'formulaire',
        pathMatch: 'full'
      },
      {
        path: 'formulaire',
        component: FormulaiInscriptionPage4Component
      },
      {
        path: 'formulairPage5',
        component: FormulairInscriptionPage5Component
      },
      { path: '**', redirectTo: 'formulaire', pathMatch: 'full' }
    ]
  },
]

@NgModule({
  declarations: [
    FormulaiInscriptionPage4Component,
    FormulairInscriptionPage5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormulairInscriptionModule { }
