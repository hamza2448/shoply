import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToCartRoutingModule } from './add-to-cart-routing.module';
import { AddtocartComponent } from './addtocart/addtocart.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import {DropdownModule} from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AddtocartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    AddToCartRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule

  ]
})
export class AddToCartModule { }
