import { Component, OnInit } from '@angular/core';


import * as firebase from 'firebase';
import { NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Prato } from '../model/prato'
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';
import { Item } from '../model/item';
import { ViewChild } from '@angular/core';
import { ModalPratoPage } from 'src/app/modal-prato/modal-prato.page';

@Component({
  selector: 'app-lista-de-pratos-cm',
  templateUrl: './lista-de-pratos-cm.page.html',
  styleUrls: ['./lista-de-pratos-cm.page.scss'],
})
export class ListaDePratosCmPage implements OnInit {

  ListaDePratosCm: Prato[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  @ViewChild("textoBusca") textoBusca;

  slideOpts = {
    initialSlide: 2,
    speed: 400,
    loop: 'auto',
    autoplay: true
  };

  pedido: Pedido;


  constructor(public router: Router,
    public loadingController: LoadingController,
    public storageServ: StorageService,
    private modalController: ModalController) {

    this.pedido = this.storageServ.getCart();

  }


  ngOnInit() {
    this.getList();
    console.log(this.ListaDePratosCm);
  }
  

  addCarrinho(prato: Prato) {



    this.pedido = this.storageServ.getCart();
    let add = true;

    let i = new Item();
    i.prato = prato;
    i.quantidade = 1;

    if (this.pedido == null) {

      this.pedido = new Pedido();
      this.pedido.itens = [];

    } else {


      this.pedido.itens.forEach(p => {


        if (p.prato !== undefined) {


          if (p.prato.id == prato.id) {
            add = false;
          }
        }


      });

    }

    if (add == true) this.pedido.itens.push(i);

    this.storageServ.setCart(this.pedido);

  }

  busca() {
    this.ListaDePratosCm = [];
    var ref = firebase.firestore().collection("prato");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new Prato();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratosCm.push(p);

        });

        this.busca2();

      } else {
        this.ListaDePratosCm = [];
        // doc.data() will be undefined in this case
        console.log("No such document!");
        this.busca2();
        this.busca3();
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  busca2() {



    var ref = firebase.firestore().collection("pratovegano");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new Prato();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratosCm.push(p);

        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  busca3() {



    var ref = firebase.firestore().collection("pratovegetariano");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new Prato();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratosCm.push(p);

        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  viewPratoVegano() {
    this.router.navigate(['/lista-de-pratos-vegano-cm']);
  }

  viewPratoVegetariano() {
    this.router.navigate(['/lista-de-pratos-vegetariano-cm']);
  }
  Home() {
    this.router.navigate(['/list']);
  }
  viewPrato(prato: Prato) {
    this.router.navigate(['/prato-view', { 'prato': prato.id }]);

  }
  Carrinho() {
    this.router.navigate(['/carrinho']);
  }

  ListaDePromocoesCm() {
    this.router.navigate(['/lista-de-promocoes-cm']);
  }

  ListaDeParceriasCm() {
    this.router.navigate(['/lista-de-parcerias-cm']);
  }



  getList() {

    var ref = firebase.firestore().collection("prato");
    ref.get().then(query => {
      query.forEach(doc => {

        let c = new Prato();
        c.setDados(doc.data());
        c.id = doc.id;

        let ref = firebase.storage().ref().child(`pratos/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.imagem = url;

          this.ListaDePratosCm.push(c);
        })
          .catch(err => {
            this.ListaDePratosCm.push(c);
          })

      });
    });
  }


  remove(obj: Prato) {
    var ref = firebase.firestore().collection("prato");
    ref.doc(obj.id).delete()
      .then(() => {
        this.ListaDePratosCm = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();


  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPratoPage
    });
    return await modal.present();
  }
}
