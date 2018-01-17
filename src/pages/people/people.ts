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
// public assetDetails:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userService:serviceComponent) {
  }
  ngOnInit(){
    this.getEmployeeData();
  }
  shownGroup = null;
  assetDetails = {};
  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
          this.userService.getUserDetails()
          .subscribe((res)=>{
            this.assetDetails = JSON.parse(JSON.stringify(res.response))[0];
            // this.assetDetails = 'sss'
            console.log(this.assetDetails)
          });
      }
  };

  isGroupShown(group) {
      return this.shownGroup === group;
  };
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
