import { Component } from '@angular/core';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent {

  products = [
    {
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '../assets/f1.jpg',
      price: '$19.99'
    },
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/cart-pic1.jpg',
      price: '$29.99'
    },
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/f3.jpg',
      price: '$29.99'
    },
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/f4.jpg',
      price: '$29.99'
    },
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/f5.jpg',
      price: '$29.99'
    },
    // Add more products as needed
  ];
}
