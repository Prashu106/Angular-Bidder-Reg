import { Component, OnInit } from '@angular/core';
import { Location } from 'src/location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location:Location
  constructor(private locationService:LocationService) { 
    this.location=new Location()
  }

  ngOnInit(): void {
  }
  saveData(){
    this.locationService.addNewProduct(this.location).subscribe(
      (data)=>{
        console.log("Return Value from REST" + data);
      }
    )
  }
}
