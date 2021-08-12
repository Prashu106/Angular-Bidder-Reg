import { Component, OnInit } from '@angular/core';
import { Bidder } from 'src/bidder';
import { BidderService } from '../bidder.service';

@Component({
  selector: 'app-bidderregistration',
  templateUrl: './bidderregistration.component.html',
  styleUrls: ['./bidderregistration.component.css']
})
export class BidderregistrationComponent implements OnInit {

  bidder:Bidder;
  location_id:Location;
  constructor(private bidderservice:BidderService) { 
    this.bidder= new Bidder();
  }

  ngOnInit(): void {
  }
  saveData(){
    this.bidderservice.addNewProduct(this.bidder).subscribe(
      (data)=>{
        console.log("Return Value from REST" + data);
      }
    )
  }
}
