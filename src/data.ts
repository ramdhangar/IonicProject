import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
 //mydata : any;
name:string;
id:number;
  constructor() {
  }

 mydata=['shiva','Krishna'];

  ss(){
return this.mydata;
  }

}
