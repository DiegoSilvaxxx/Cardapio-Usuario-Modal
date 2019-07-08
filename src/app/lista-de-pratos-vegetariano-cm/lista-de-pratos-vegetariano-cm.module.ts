import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { ListaDePratosVegetarianoCmPage } from './lista-de-pratos-vegetariano-cm.page';
import { ModalPratoVegetarianoPage } from '../modal-prato-vegetariano/modal-prato-vegetariano.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDePratosVegetarianoCmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDePratosVegetarianoCmPage,ModalPratoVegetarianoPage],
  entryComponents: [ModalPratoVegetarianoPage]
})
export class ListaDePratosVegetarianoCmPageModule {}

