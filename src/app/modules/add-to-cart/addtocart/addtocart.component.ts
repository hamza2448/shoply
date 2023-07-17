import { Component } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent {
products=[{
  name: 'Product A',
  price: 25.99,
  category: 'Electronics',
  quantity: 50,
  Status: 'In Stock',
  Reviews: 120,
},
{
  name: 'Product B',
  price: 19.99,
  category: 'Clothing',
  quantity: 100,
  Status: 'In Stock',
  Reviews: 80,
},
{
  name: 'Product C',
  price: 8.99,
  category: 'Accessories',
  quantity: 75,
  Status: 'Out of Stock',
  Reviews: 50,
},
// Add more products as needed
];
}
