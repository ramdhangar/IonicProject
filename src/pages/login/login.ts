import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

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

constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
  }



/*Login Function*/
login(username,password)
{
console.log('username is : '+username);
console.log('password is : ' + password);
let alert=this.alertCtrl.create({
 
title:'Logged In User',
subTitle:username+' ' +password,
buttons:['ok']


});
alert.present();



}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
