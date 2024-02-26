import { Component } from '@angular/core';
import { FinancialProduct } from '../../../core/models/financial-product.model';

@Component({
  selector: 'app-notification-confirmar',
  templateUrl: './notification-confirmar.component.html',
  styleUrls: ['./notification-confirmar.component.css'],
})
export class NotificationConfirmarComponent {
  show: boolean = false;
  title: string = '';

  display(options: { producto: FinancialProduct }): void {
    this.title = options.producto.name;
    this.show = true;
  }

  closePopup(): void {
    this.show = false;
  }
}
