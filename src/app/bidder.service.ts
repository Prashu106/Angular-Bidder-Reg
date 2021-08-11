import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bidder } from 'src/bidder';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:8086//bidderRest";

  addNewProduct(bidder:Bidder)
  {
    return this.httpClient.post(this.baseUrl+"/bidder",bidder);
  }
}
