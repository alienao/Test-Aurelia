import {inject} from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import moment from 'moment';
import 'bootstrap';

@inject(HttpClient)
export class App {
 
  constructor(HttpClient){
    this.httpClient = HttpClient;
    this.httpClient.get('/api/whatever').then(data =>{})
    this.message = `Hello World! It is the year ${moment().format('YYYY')}`;
  }
  
}
