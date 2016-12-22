import { Component } from '@angular/core';
import {ProductListComponent} from './products/product-list.component'

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  entryComponents: [ProductListComponent]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
