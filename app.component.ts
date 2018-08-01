import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EkonomiPage } from '../pages/ekonomi/ekonomi';
import { PolitikPage } from '../pages/politik/politik';
import { SportPage } from '../pages/sport/sport';
import { StudiPage } from '../pages/studi/studi';
import { InternasionalPage } from '../pages/internasional/internasional';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl:MenuController) {
    this.initializeApp();

    this.pages = [
      { title: 'Ekonomi', component: EkonomiPage },
      { title: 'Politik', component: PolitikPage },
      { title: 'Sport', component: SportPage },
      { title: 'Studi', component: StudiPage },
      { title: 'Internasional', component: InternasionalPage }
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

}

