import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
})
export class HeroSliderComponent {
  data = [
    {
      previewImageSrc: '../assets/hero-slider/galleria1.jpg',
      thumbnailImageSrc: 'demo/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: '../assets/hero-slider/galleria2.jpg',
      thumbnailImageSrc: 'demo/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc: '../assets/hero-slider/galleria3.jpg',
      thumbnailImageSrc: 'demo/images/galleria/galleria3s.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc: '../assets/hero-slider/galleria4.jpg',
      thumbnailImageSrc: 'demo/images/galleria/galleria4s.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      previewImageSrc: '../assets/hero-slider/galleria5.jpg',
      thumbnailImageSrc: 'demo/images/galleria/galleria5s.jpg',
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
