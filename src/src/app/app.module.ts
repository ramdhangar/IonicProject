import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ProfilePage } from '../pages/profile/profile';
import { ResourcePage } from '../pages/resource/resource';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from '../pages/login/login';

import { PeoplePage } from '../pages/people/people';
import { AssetPage } from '../pages/asset/asset';


import { TabsPage } from '../pages/tabs/tabs';
import { SoftwarePage } from '../pages/software/software';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ResourcePage,
    FaqPage,

    PeoplePage,
    AssetPage,
    SoftwarePage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ResourcePage,
    FaqPage,

    PeoplePage,
    AssetPage,
    SoftwarePage,
    LoginPage,

    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
