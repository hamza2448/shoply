import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';

import { LocationComponent } from './contact/location/location.component';




@NgModule({
  declarations: [
    ContactComponent,
    LocationComponent,
  ],
 
  imports: [
    CommonModule,
    ContactRoutingModule,
    

  ]
})
export class ContactModule { }
