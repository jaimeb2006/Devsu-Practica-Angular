import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoLogoComponent } from './components/banco-logo/banco-logo.component';

@NgModule({
  declarations: [BancoLogoComponent],
  imports: [CommonModule],
  exports: [
    BancoLogoComponent, // Esto permite que el componente sea utilizado fuera de SharedModule
  ],
})
export class SharedModule {}
