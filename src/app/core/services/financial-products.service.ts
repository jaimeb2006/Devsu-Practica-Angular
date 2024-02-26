// financial-products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialProduct } from '../models/financial-product.model'; // Asegúrate de crear este modelo

@Injectable({
  providedIn: 'root',
})
export class FinancialProductsService {
  private baseUrl =
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';
  private authorId = '241'; // Replace with your generated AuthorID

  constructor(private http: HttpClient) {}

  getFinancialProducts(): Observable<FinancialProduct[]> {
    const headers = new HttpHeaders({
      authorld: this.authorId,
    });
    return this.http.get<FinancialProduct[]>(this.baseUrl, { headers });
  }
}
