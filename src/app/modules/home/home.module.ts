import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './screen/home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FeatureProductComponent } from './components/feature-product/feature-product.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { TooltipModule } from 'primeng/tooltip';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  declarations: [
    HomeComponent,
    ProductSliderComponent,
    FeatureProductComponent,
    CategoryProductComponent,
    HeroSliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    ButtonModule,
    TooltipModule,
    GalleriaModule,
  ],
})
export class HomeModule {}
