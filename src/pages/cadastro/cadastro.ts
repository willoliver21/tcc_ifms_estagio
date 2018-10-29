import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TCCIFMSPage } from '../t-ccifms/t-ccifms';
import { HomePage } from '../home/home';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  usuariolist = [];
  usuario : any;

  constructor(public navCtrl: NavController, 
    public CadastroService : CadastroService,
    public toastCtrl : ToastController) {
    // this.usuarios.push({id: "01", nome: "Wilson", tipo: "Aluno"})
    this.usuario = {};
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.CadastroService.list().subscribe(dados => [
      this.usuariolist = dados
    ])
  }

  save(){
    this.CadastroService.save(this.usuario).subscribe(item => {

      this.navCtrl.pop();

      this.toastCtrl.create({
        message : "Cadastrado"
      }).present();

    }, error => {

      this.toastCtrl.create({
        message : "Erro"
      }).present();
    })

  }

  goToTCCIFMS(params){
    if (!params) params = {};
    this.navCtrl.push(TCCIFMSPage);
  }goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
