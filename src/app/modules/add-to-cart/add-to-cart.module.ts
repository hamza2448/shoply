import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToCartRoutingModule } from './add-to-cart-routing.module';
import { AddtocartComponent } from './addtocart/addtocart.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AddtocartComponent
  ],
  imports: [
    CommonModule,
    AddToCartRoutingModule,
    TableModule,
    ButtonModule

  ]
})
export class AddToCartModule { }
