import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { ModalPratoVegetarianoPage } from './modal-prato-vegetariano.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPratoVegetarianoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPratoVegetarianoPage]
})
export class ModalPratoVegetarianoPageModule {}
