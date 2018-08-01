import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { EkonomiPage } from '../pages/ekonomi/ekonomi';
import { PolitikPage } from '../pages/politik/politik';
import { SportPage } from '../pages/sport/sport';
import { StudiPage } from '../pages/studi/studi';
import { InternasionalPage } from '../pages/internasional/internasional';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EkonomiPage,
    PolitikPage,
    SportPage,
    StudiPage,
    InternasionalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EkonomiPage,
    PolitikPage,
    SportPage,
    StudiPage,
    InternasionalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
