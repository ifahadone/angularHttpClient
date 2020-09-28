import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { disableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://flaskcall.herokuapp.com/getmsg/";

  constructor(private httpClient: HttpClient) { }
  
  public sendGetRequest(req){
  	let params = new HttpParams().set('name', req);
    return this.httpClient.get(this.REST_API_SERVER, {params: params});
  }
}

