import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TCCIFMSPage } from '../pages/t-ccifms/t-ccifms';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HttpModule } from "@angular/http"


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroService } from '../pages/cadastro/cadastro.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TCCIFMSPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TCCIFMSPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CadastroService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}