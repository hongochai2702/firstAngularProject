import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productName?: string = '';
  isDisabled = false;
  products: string[] = [];

  constructor() {}

  onAddProduct(form: NgForm) {
    if (form.valid) {
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    console.log(productName);

    this.products = this.products.filter((p) => p !== productName);
  }
}
