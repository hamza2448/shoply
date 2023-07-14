import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FeatureComponent],
  exports: [HeaderComponent, FooterComponent,FeatureComponent],
  imports: [CommonModule,RouterModule],
})
export class SharedModule {}
