import { Component } from '@angular/core';


import { ProfilePage } from '../profile/profile';
import { ResourcePage } from '../resource/resource';
import { FaqPage } from '../faq/faq';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
profilePage = ProfilePage ;
resourcePage = ResourcePage ;
faqPage      = FaqPage;
loginPage    = LoginPage;




 
}
