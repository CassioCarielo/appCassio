import { ProgressBarModule } from 'angular-progress-bar';
import { CadPerguntasPage } from './../pages/cad-perguntas/cad-perguntas';
import { TentativasPage } from './../pages/tentativas/tentativas';
import { ProgressoPage } from './../pages/progresso/progresso';
import { PainelPage } from './../pages/painel/painel';
import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Pro } from '@ionic/pro';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TopoPage } from '../pages/topo/topo';

Pro.init('0364cc70', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TopoPage,
    PainelPage,
    ProgressoPage,
    TentativasPage,
    CadPerguntasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProgressBarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TopoPage,
    PainelPage,
    ProgressoPage,
    TentativasPage,
    CadPerguntasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IonicErrorHandler,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule {}
