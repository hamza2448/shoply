import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './screen/product/product.component';
import { GalleriaModule } from 'primeng/galleria';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    GalleriaModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
  ],
})
export class ProductModule {}
