import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  value18 = 1;
  data = [
    {
      previewImageSrc: '../assets/f4.jpg',
      thumbnailImageSrc: '../assets/f4.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: '../assets/f3.jpg',
      thumbnailImageSrc: '../assets/f3.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc: '../assets/f5.jpg',
      thumbnailImageSrc: '../assets/f5.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc: '../assets/f1.jpg',
      thumbnailImageSrc: '../assets/f1.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      previewImageSrc: '../assets/cart-pic1.jpg',
      thumbnailImageSrc: '../assets/cart-pic1.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
