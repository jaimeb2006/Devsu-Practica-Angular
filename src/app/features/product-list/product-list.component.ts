import { Component } from '@angular/core';
import { FinancialProductsService } from '../../core/services/financial-products.service';
import { FinancialProduct } from '../../core/models/financial-product.model';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  dropdownOpen = false;
  loading = true;
  currentPage: number = 1;
  pageSize: number = 5;
  totalProducts: number = 0;
  totalPages: number = 1;
  pages: number[] = [];

  lista: string[] = ['5', '10', '20'];

  financialProducts: FinancialProduct[] = [];
  filteredProducts: FinancialProduct[] = [];

  selectedDropdownIndex: number | null = null;

  searchControl = new FormControl('');
  registerControl = new FormControl('');

  constructor(private financialProductService: FinancialProductsService) {}

  ngOnInit() {
    this.registerControl.setValue(String(this.pageSize));
    this.currentPage = 1;
    this.totalPages = 1;
    this.loadFinancialProducts();
    this.setupSearch();
    this.setupNumberRecords();
  }

  setupNumberRecords() {
    this.registerControl.valueChanges
      .pipe(map((numberRecords) => numberRecords ?? '5'))
      .subscribe((numberRecords) => {
        this.pageSize = Number(numberRecords);
        this.loadFinancialProducts();
      });
  }

  loadFinancialProducts(page: number = 1): void {
    this.financialProductService
      .getFinancialProducts(page, this.pageSize)
      .subscribe({
        next: ({ products, totalRecords }) => {
          this.financialProducts = products;
          this.filteredProducts = products;
          this.totalProducts = totalRecords;
          this.totalPages = Math.ceil(this.totalProducts / 5);
          this.calculateTotalPages();
          this.generatePageNumbers();
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.financialProducts = [];
          this.filteredProducts = [];
        },
        complete: () => {
          this.loading = false;
        },
      });
  }
  setupSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((searchTerm) => searchTerm ?? '')
      )
      .subscribe((searchTerm) => {
        this.filterProducts(searchTerm);
      });
  }
  filterProducts(searchTerm: string) {
    this.filteredProducts = this.financialProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.totalProducts = this.filteredProducts.length;
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
  }

  generatePageNumbers() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  navigateToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadFinancialProducts(page);
  }
  deleteProduct(producto: FinancialProduct) {}
  editProduct(producto: FinancialProduct) {}

  toggleDropdown(index: number): void {
    this.selectedDropdownIndex =
      this.selectedDropdownIndex === index ? null : index;
  }
}
