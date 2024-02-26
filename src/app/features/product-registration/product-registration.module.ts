import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegistrationRoutingModule } from './product-registration-routing.module';
import { ProductRegistrationComponent } from './product-registration.component';


@NgModule({
  declarations: [
    ProductRegistrationComponent
  ],
  imports: [
    CommonModule,
    ProductRegistrationRoutingModule
  ]
})
export class ProductRegistrationModule { }
