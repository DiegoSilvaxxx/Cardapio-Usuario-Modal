import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { ListaDePratosVeganoCmPage } from './lista-de-pratos-vegano-cm.page';
import { ModalPratoVeganoPage } from '../modal-prato-vegano/modal-prato-vegano.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDePratosVeganoCmPage
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
  declarations: [ListaDePratosVeganoCmPage,ModalPratoVeganoPage],
  entryComponents: [ModalPratoVeganoPage]
})
export class ListaDePratosVeganoCmPageModule {}

