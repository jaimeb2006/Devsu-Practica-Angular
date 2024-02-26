import { Component } from '@angular/core';
import { FinancialProductsService } from '../../core/services/financial-products.service';
import { FinancialProduct } from '../../core/models/financial-product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  dropdownOpen = false;
  loading = true;
  recordsPerPage = 10;
  currentPage = 10;
  totalRecords = 100;
  totalPages = 10;
  numeroRegistros: string = '';

  lista: string[] = ['5', '10', '20'];

  financialProducts: FinancialProduct[] = [];

  selectedDropdownIndex: number | null = null;

  constructor(private financialProductService: FinancialProductsService) {}

  ngOnInit() {
    this.loadFinancialProducts();
    this.numeroRegistros = '5';
  }

  loadFinancialProducts(): void {
    this.financialProductService.getFinancialProducts().subscribe({
      next: (products) => {
        this.financialProducts = products;
        console.log(
          '🚀 ~ ProductListComponent ~ this.financialProductService.getFinancialProducts ~ products:',
          products
        );
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.financialProducts = [];
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  previousPage() {}
  nextPage() {}
  deleteProduct(producto: FinancialProduct) {}
  editProduct(producto: FinancialProduct) {}

  toggleDropdown(index: number): void {
    this.selectedDropdownIndex =
      this.selectedDropdownIndex === index ? null : index;
  }

  // Cierra el dropdown si se hace clic fuera de él
  closeDropdown() {
    this.dropdownOpen = false;
  }
}
