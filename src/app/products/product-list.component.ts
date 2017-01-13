import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
  constructor(private _productService: ProductService) { 
      
  }

  ngOnInit() {
      this._productService.getProducts()
            .subscribe(products => this.products = products,
                        error => this.errorMessage = <any>error);
  }
  
  onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
  }

}
