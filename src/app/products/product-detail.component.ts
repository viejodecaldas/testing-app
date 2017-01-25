import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    //No need to import selector because is not going to be nested in a SPA.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

  //Se coloca así para que obtenga la instancia del route
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
      let id = +this._route.snapshot.params['id']
      this.pageTitle += `: ${id}`;
  }

  onBack(): void {
      this._router.navigate(['/products']);
  }
}
