import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-auctiontable',
  templateUrl: './auctiontable.component.html',
  styleUrls: ['./auctiontable.component.css']
})
export class AuctiontableComponent implements OnInit {

  bid:any
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getauctiontable().subscribe((data: any) => {
      this.bid = data;
      console.log(this.bid);
    })
  }

}
