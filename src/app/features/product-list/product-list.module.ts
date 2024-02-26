import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductListRoutingModule, FormsModule],
})
export class ProductListModule {}
