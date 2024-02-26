import { Component } from '@angular/core';
import { FinancialProduct } from 'src/app/core/models/financial-product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  dropdownOpen = false;
  loading = true;
  products: FinancialProduct[] = [];
  recordsPerPage = 10;
  currentPage = 10;
  totalRecords = 100;
  totalPages = 10;
  numeroRegistros: string = '';

  lista: string[] = ['5', '10', '20'];

  financialProducts: FinancialProduct[] = [
    {
      id: '1',
      name: 'Nombre del producto 1',
      description: 'Descripción 1',
      releaseDate: new Date(2000, 0, 1),
      restructuringDate: new Date(2001, 0, 1),
      logoUrl:
        'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
    {
      id: '2',
      name: 'Nombre del producto 2',
      description: 'Descripción 2',
      releaseDate: new Date(2000, 0, 1),
      restructuringDate: new Date(2001, 0, 1),
      logoUrl:
        'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
    {
      id: '3',
      name: 'Nombre del producto 3',
      description: 'Descripción 3',
      releaseDate: new Date(2000, 0, 1),
      restructuringDate: new Date(2001, 0, 1),
      logoUrl:
        'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
    {
      id: '4',
      name: 'Nombre del producto 4',
      description: 'Descripción 4',
      releaseDate: new Date(2000, 0, 1),
      restructuringDate: new Date(2001, 0, 1),
      logoUrl:
        'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
    {
      id: '5',
      name: 'Nombre del producto 5',
      description: 'Descripción 5',
      releaseDate: new Date(2000, 0, 1),
      restructuringDate: new Date(2001, 0, 1),
      logoUrl:
        'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
  ];

  selectedDropdownIndex: number | null = null;

  ngOnInit() {
    // Simula la carga de datos con un retraso
    setTimeout(() => {
      this.loading = false;
      this.products = this.financialProducts;
    }, 100);
    this.numeroRegistros = '5';
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
