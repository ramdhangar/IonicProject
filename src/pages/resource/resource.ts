import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { PeoplePage } from '../people/people';
import { AssetPage } from '../asset/asset';
import { SoftwarePage } from '../software/software';


@IonicPage()
@Component({
  selector: 'page-resource',
  templateUrl: 'resource.html',
})
export class ResourcePage {

constructor(public navCtrl: NavController) {

}

peoplePage = PeoplePage ;
assetPage = AssetPage ;
softwarePage = SoftwarePage;

}
