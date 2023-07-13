import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './screen/product/product.component';

const routes: Routes = [
  {
    title: 'product list',
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    title: 'product detail',
    path: 'product-detail',
    component: ProductDetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
