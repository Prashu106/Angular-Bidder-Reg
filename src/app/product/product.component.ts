import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../product';


import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  addproduct:AddProduct;
  constructor(private productservice:ProductService) { 
    this.addproduct= new AddProduct();
  }

  ngOnInit(): void {
  }
  saveData(){
    this.productservice.addNewProduct(this.addproduct).subscribe(
      (data)=>{
        console.log("Return Value from REST" + data);
      }
    )
}
}