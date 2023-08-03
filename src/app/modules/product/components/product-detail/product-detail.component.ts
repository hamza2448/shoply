import { Component, ElementRef, ViewChild } from '@angular/core';
import {jsPDF} from "jspdf"
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  
  constructor() { }

  generatePDF() {
    const doc = new jsPDF();

   
    const content = this.contentToConvert.nativeElement;

    
    html2canvas(content).then((canvas) => {
  
      const imgData = canvas.toDataURL('image/jpeg'); 
      const imgDataPng = canvas.toDataURL('image/png'); 

      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

     
      doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      doc.addImage(imgDataPng, 'PNG', 0, 0, pdfWidth, pdfHeight);

      
      doc.save('converted.pdf');
    });
  }
 
 
 
 
 
  value18 = 1;
  data = [
    {
      previewImageSrc: '../assets/f4.jpg',
      thumbnailImageSrc: '../assets/f4.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
      colors: ['red', 'blue', 'green']
    },
    {
      previewImageSrc: '../assets/f3.jpg',
      thumbnailImageSrc: '../assets/f3.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
      colors: ['red', 'blue']
    },
    {
      previewImageSrc: '../assets/f5.jpg',
      thumbnailImageSrc: '../assets/f5.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
      colors: ['red', 'blue', 'purple']
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
      colors: ['pink', 'blue', 'green']
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
