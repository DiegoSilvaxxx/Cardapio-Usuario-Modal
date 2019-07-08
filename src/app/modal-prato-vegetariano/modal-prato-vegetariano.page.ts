import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-prato-vegetariano',
  templateUrl: './modal-prato-vegetariano.page.html',
  styleUrls: ['./modal-prato-vegetariano.page.scss'],
})
export class ModalPratoVegetarianoPage implements OnInit {

  constructor(private modalController: ModalController,
    public router: Router,private modalCtrl:ModalController) { }




  ngOnInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
 
}