import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegistrationRoutingModule } from './product-registration-routing.module';
import { ProductRegistrationComponent } from './product-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationPopUpComponent } from 'src/app/shared/components/notification-pop-up/notification-pop-up.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductRegistrationComponent],
  imports: [
    CommonModule,
    ProductRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductRegistrationModule {}
