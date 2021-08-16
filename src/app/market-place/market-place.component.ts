import { Component, OnInit } from '@angular/core';
import { Market } from '../marktet';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {
  market:any;

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getmarkettable().subscribe((data: any) => {
      this.market = data;
      console.log(this.market);
    })
  }
  
  }
 


