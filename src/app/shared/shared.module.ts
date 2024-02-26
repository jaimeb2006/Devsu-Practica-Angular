import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoLogoComponent } from './components/banco-logo/banco-logo.component';

@NgModule({
  declarations: [BancoLogoComponent],
  imports: [CommonModule],
  exports: [BancoLogoComponent],
})
export class SharedModule {}
