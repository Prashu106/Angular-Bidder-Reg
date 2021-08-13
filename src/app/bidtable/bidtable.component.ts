import { Component, OnInit } from '@angular/core';
import { Bid } from '../bid';
import { AddProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bidtable',
  templateUrl: './bidtable.component.html',
  styleUrls: ['./bidtable.component.css']
})
export class BidtableComponent implements OnInit {

  addproduct: any
  constructor(private productservice: ProductService) {

  }

  ngOnInit(): void {


    this.productservice.getProduct().subscribe((data: any) => {

      this.addproduct = data;
      console.log(this.addproduct);
    })
  }
  onchangeData($event: any, product_id) {
    if ($event.target.value) {
      for (let i =0 ;i<this.addproduct.length;i++) {
        if (this.addproduct[i].product_id == product_id) {
          this.addproduct[i].bidder_amount = parseInt($event.target.value);
        }
      }
    }
  }
  saveData($event: any) {
    console.log($event);
    let data = $event
    this.productservice.updateProduct(data).subscribe((data: any) => {
      console.log(' Data Updated')
      console.log(data)
    })
  }

}





