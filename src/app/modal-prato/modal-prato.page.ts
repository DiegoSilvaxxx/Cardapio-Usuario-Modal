import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-prato',
  templateUrl: './modal-prato.page.html',
  styleUrls: ['./modal-prato.page.scss'],
})
export class ModalPratoPage implements OnInit {

 
  constructor(private modalController: ModalController, public router: Router,) { }

  ngOnInit() {
  }

  ListaDePratosCm() {
    this.router.navigate(['/lista-de-pratos-cm']);
  }

}
