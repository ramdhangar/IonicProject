import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { serviceComponent } from './../../app/app.services';
/**
 * Generated class for the AssetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset',
  templateUrl: 'asset.html',
  providers:[serviceComponent],
})
export class AssetPage {
public assetData:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService:serviceComponent) {
    }
    ngOnInit(){
      this.getAssetData();
    }
    getAssetData(){
      return this.userService.getassets()
      .subscribe((res)=>{
        this.assetData = JSON.parse(JSON.stringify(res.response));
        console.log('this.assetData', this.assetData);
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetPage');
  }

}
