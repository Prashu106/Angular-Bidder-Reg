import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-auctiontable',
  templateUrl: './auctiontable.component.html',
  styleUrls: ['./auctiontable.component.css']
})
export class AuctiontableComponent implements OnInit {

  bid:any
  market:any;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getauctiontable().subscribe((data: any) => {
      this.bid = data;
      console.log(this.bid);
    })
  }
  Approve(market:any)
  {
      market.status="Sold"
      // this.productservice.addMarket().subscribe;
      this.productservice.addMarket(market).subscribe((data)=>
      {
          alert("Product Sold")
      })
  }
  Reject(market:any)
  {
    market.status="Rejected";
      this.productservice.addMarket(market).subscribe((data)=>
      {
          alert("Bid Not Approved")
      })
  }
}
