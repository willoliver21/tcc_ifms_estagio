import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-t-ccifms',
  templateUrl: 't-ccifms.html'
})
export class TCCIFMSPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }goToTCCIFMS(params){
    if (!params) params = {};
    this.navCtrl.push(TCCIFMSPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
