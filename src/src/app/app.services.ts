import {Injectable} from '@angular/core';
import { NgModule } from '@angular/core';
import { Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

@NgModule({
declarations: [serviceComponent],
imports: [
  Http, Response
],
providers: [],
bootstrap: [serviceComponent]})

export class serviceComponent{
    private _getallUrl:string = 'http://localhost:8080/getalldata';
    private _getsoftwareUrl:string = 'http://localhost:8080/getsoftwaredata';
    private _getprojectUrl:string = 'http://localhost:8080/getprojectdata';
    private _getuserUrl:string = 'http://localhost:8080/getuserdata';
    private _getassetUrl:string = 'http://localhost:8080/getassetdata';

    constructor(public _http:Http){
    }
    getallData(){
        return this._http.get(this._getallUrl)
        .map((res:Response) => res.json());
    }
    getsoftwares(){
      return this._http.get(this._getsoftwareUrl)
      .map((res:Response) => res.json());
    }
    getprojects(){
      return this._http.get(this._getprojectUrl)
      .map((res:Response) => res.json());
    }
    getUsers(){
      return this._http.get(this._getuserUrl)
      .map((res:Response) => res.json());
    }
    getassets(){
      return this._http.get(this._getassetUrl)
      .map((res:Response) => res.json());
    }
}
