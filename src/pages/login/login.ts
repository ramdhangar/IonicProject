import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { ProfilePage} from '../profile/profile';

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


  mylogin =
   {
   name:'admin',
   pass:12345
   }
/*Login Function*/
login(username,password)
{
console.log('username is : '+username);
console.log('password is : ' + password);
if((username===this.mylogin.name)&&(password==this.mylogin.pass)){
 alert('successfully login');
 this.navCtrl.push(ProfilePage);
}else{
  alert('failure login');
}



}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
