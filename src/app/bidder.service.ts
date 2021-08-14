import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bidder } from './bidder';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9887//productRest/api";

  addNewProduct(bidder:Bidder)
  {
    return this.httpClient.post(this.baseUrl+"/bidders",bidder);
  }
}
