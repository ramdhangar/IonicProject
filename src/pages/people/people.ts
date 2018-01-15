import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { serviceComponent } from './../../app/app.services';

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
  providers:[serviceComponent],
})
export class PeoplePage {
public empData:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userService:serviceComponent) {
  }
  ngOnInit(){
    this.getEmployeeData();
  }
  getEmployeeData(){
    return this.userService.getUsers()
    .subscribe((res)=>{
      this.empData = JSON.parse(JSON.stringify(res.response));
      console.log('this.empData', this.empData);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }
}
