import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  
  // constructor() { }

  // generatePDF() {
  //   const doc = new jsPDF();

  //   // Get the HTML content to convert to PDF
  //   const content = this.contentToConvert.nativeElement;

  //   // Use html2canvas to render the HTML content to a canvas
  //   html2canvas(content).then((canvas) => {
  //     // Convert the canvas to a data URL (Use the appropriate format based on your requirements)
  //     const imgData = canvas.toDataURL('image/jpeg'); // Convert to JPEG format

  //     // Calculate the aspect ratio for the image to fit the PDF page
  //     const imgProps = doc.getImageProperties(imgData);
  //     const pdfWidth = doc.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //     // Add the image to the PDF (Use 'JPEG' for JPG format)
  //     doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

  //     // Save the PDF
  //     doc.save('converted.pdf');
  //   });
  // }

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
    {
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '../assets/f3.jpg',
      price: '$29.99'
    },
    // Add more products as needed
  ];
}
