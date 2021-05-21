import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Bank} from '../model/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankdetailsService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUri="https://fylebank-rest-rapi.herokuapp.com";
  // private baseUri="http://127.0.0.1:8000";

  fetchdata(city : any)
  {
     return this.http.get<Bank[]>(this.baseUri + "/api/branches/?q="+city+"&limit=11000 &offset=0", { headers: this.headers });
  }
  private bank : any;

  setData(bank : Bank)
  {
    this.bank=bank;
  }
  getData()
  {
    return this.bank;
  }

}
