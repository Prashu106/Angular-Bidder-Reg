import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from 'src/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9887//productRest/api";
  addNewProduct(location:Location)
  {
    return this.httpClient.post(this.baseUrl+"/locations",location);
  }
}
