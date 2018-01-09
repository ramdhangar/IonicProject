import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import { HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


constructor(public navCtrl: NavController, public alertCtrl:AlertController, public data:DataProvider) {

  }

mylogin =
{
name:'admin',
pass:12345
}

login(username,password)
  {
if((username===this.mylogin.name)&&(password==this.mylogin.pass))
{
alert('successfully login');

console.log("DataProvider"+this.data.ss());
this.navCtrl.push(HomePage);

console.log("Name"+this.data.ss());



}
else
alert('Invalid username & Password...');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
