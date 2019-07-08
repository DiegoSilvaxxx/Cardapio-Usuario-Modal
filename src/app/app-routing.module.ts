import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [Auth2Guard]
  },
  {
    path: 'logoff',
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]
  },
  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },

  { path: 'cadastro-de-prato', loadChildren: './cadastro-de-prato/cadastro-de-prato.module#CadastroDePratoPageModule' },
  { path: 'prato-view', loadChildren: './prato-view/prato-view.module#PratoViewPageModule' },



  { path: 'view-prato-vegano', loadChildren: './view-prato-vegano/view-prato-vegano.module#ViewPratoVeganoPageModule' },
  { path: 'cadastro-de-prato-vegano', loadChildren: './cadastro-de-prato-vegano/cadastro-de-prato-vegano.module#CadastroDePratoVeganoPageModule' },


  { path: 'view-prato-vegetariano', loadChildren: './view-prato-vegetariano/view-prato-vegetariano.module#ViewPratoVegetarianoPageModule' },
  { path: 'cadastro-de-prato-vegetariano', loadChildren: './cadastro-de-prato-vegetariano/cadastro-de-prato-vegetariano.module#CadastroDePratoVegetarianoPageModule' },

  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },


  { path: 'view-promocao', loadChildren: './view-promocao/view-promocao.module#ViewPromocaoPageModule' },
  { path: 'cadastro-de-promocao', loadChildren: './cadastro-de-promocao/cadastro-de-promocao.module#CadastroDePromocaoPageModule' },


  { path: 'view-parceria', loadChildren: './view-parceria/view-parceria.module#ViewParceriaPageModule' },
  { path: 'cadastro-de-parceiro', loadChildren: './cadastro-de-parceiro/cadastro-de-parceiro.module#CadastroDeParceiroPageModule' },

  { path: 'lista-de-pratos-cm', loadChildren: './lista-de-pratos-cm/lista-de-pratos-cm.module#ListaDePratosCmPageModule' },
  { path: 'lista-de-pratos-vegano-cm', loadChildren: './lista-de-pratos-vegano-cm/lista-de-pratos-vegano-cm.module#ListaDePratosVeganoCmPageModule' },
  { path: 'lista-de-pratos-vegetariano-cm', loadChildren: './lista-de-pratos-vegetariano-cm/lista-de-pratos-vegetariano-cm.module#ListaDePratosVegetarianoCmPageModule' },
  { path: 'lista-de-promocoes-cm', loadChildren: './lista-de-promocoes-cm/lista-de-promocoes-cm.module#ListaDePromocoesCmPageModule' },
  { path: 'lista-de-parcerias-cm', loadChildren: './lista-de-parcerias-cm/lista-de-parcerias-cm.module#ListaDeParceriasCmPageModule' },
 
  { path: 'modal-prato', loadChildren: './modal-prato/modal-prato.module#ModalPratoPageModule' },
 
  { path: 'modal-prato-vegano', loadChildren: './modal-prato-vegano/modal-prato-vegano.module#ModalPratoVeganoPageModule' },  { path: 'modal-prato-vegetariano', loadChildren: './modal-prato-vegetariano/modal-prato-vegetariano.module#ModalPratoVegetarianoPageModule' },












];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
