import { Component } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {

  
  products = [
    {
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '../assets/cart-pic1.jpg',
      price: '$19.99'
    },
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/cart-pic2.jpg',
      price: '$29.99'
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
      imageUrl: '../assets/cart-pic1.jpg',
      price: '$29.99'
    },
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/cart-pic2.jpg',
      price: '$29.99'
    },
    // Add more products as needed
  ];
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 2,
    
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
}
