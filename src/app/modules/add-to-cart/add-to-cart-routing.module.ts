import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path:'',component:AddtocartComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddToCartRoutingModule { }
