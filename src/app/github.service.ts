import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {

  constructor() { }

}
 import { Http, Headers} from '@angular/http';
 import 'rxjs/add/operator/map';

 @Injectable()
 export class GithubService {

 	private userName:string;
 	private client_id:string = 'c1c326ee8dab030018d5';
 	private client_secret:string = '0d1050e79f3b3b0d7490938e862cb82777e16823';

 constructor () {}
 	
 }