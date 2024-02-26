// financial-products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialProduct } from '../models/financial-product.model'; // Asegúrate de crear este modelo

@Injectable({
  providedIn: 'root',
})
export class FinancialProductsService {
  private apiUrl = 'https://api.bancopichincha.com/financial-products'; // Reemplaza con la URL real de la API

  constructor(private http: HttpClient) {}

  getFinancialProducts(): Observable<FinancialProduct[]> {
    return this.http.get<FinancialProduct[]>(this.apiUrl);
  }
}
