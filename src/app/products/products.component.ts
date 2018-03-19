import { Component, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    product: Product = {
        id: 1,
        name:"Tripod Stand",
        price: 200,
        category: "Support Aparatus"
    }

  constructor() { }

  ngOnInit() {
      console.log("Hey what's up")
  }

}
