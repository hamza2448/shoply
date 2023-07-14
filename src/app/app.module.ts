import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './modules/shared/shared.module';
import { ProductModule } from './modules/product/product.module';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';


@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductModule,
    HomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
