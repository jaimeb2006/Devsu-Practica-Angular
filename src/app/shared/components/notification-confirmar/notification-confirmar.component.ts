import { Component, ViewContainerRef } from '@angular/core';
import { FinancialProduct } from '../../../core/models/financial-product.model';
import { FinancialProductsService } from 'src/app/core/services/financial-products.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-confirmar',
  templateUrl: './notification-confirmar.component.html',
  styleUrls: ['./notification-confirmar.component.css'],
})
export class NotificationConfirmarComponent {
  show: boolean = false;
  title: string = '';
  id = '';

  constructor(
    private financialProductsService: FinancialProductsService,
    private notificationService: NotificationService,
    private router: Router,
    private viewContainerRef: ViewContainerRef
  ) {}

  display(options: { producto: FinancialProduct }): void {
    this.title = options.producto.name;
    this.id = options.producto.id;
    this.show = true;
  }

  closePopup(): void {
    this.show = false;
  }

  confirmDelete(): void {
    this.notificationService.setViewContainerRef(this.viewContainerRef);
    this.financialProductsService.deleteFinancialProduct(this.id).subscribe({
      next: (response) => {
        console.log(
          '🚀 ~ NotificationConfirmarComponent ~ this.financialProductsService.deleteFinancialProduct ~ response:',
          response
        );

        this.notificationService.showNotification(
          'Producto eliminado con éxito',
          'Producto Eliminado',
          'success'
        );
        this.router
          .navigateByUrl('/product-list', { skipLocationChange: true })
          .then(() => {
            window.location.reload();
          });
        this.closePopup();
      },
      error: (error) => {
        // Manejo de error
        this.notificationService.showNotification(
          'Error al eliminar el producto',
          'Producto no eliminado',
          'error'
        );
        console.error('Error eliminando product:', error);
      },
    });
  }
}
