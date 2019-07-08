import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-prato-vegano',
  templateUrl: './modal-prato-vegano.page.html',
  styleUrls: ['./modal-prato-vegano.page.scss'],
})
export class ModalPratoVeganoPage implements OnInit {

  constructor(private modalController: ModalController,
    public router: Router,private modalCtrl:ModalController) { }




  ngOnInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
 
}