// financial-products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FinancialProduct } from '../models/financial-product.model'; // Asegúrate de crear este modelo
import { ApiResponseItem } from 'src/app/shared/api-response-types';

interface PaginatedFinancialProducts {
  products: FinancialProduct[];
  totalRecords: number;
}

@Injectable({
  providedIn: 'root',
})
export class FinancialProductsService {
  private baseUrl =
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';
  private authorId = '241'; // Replace with your generated AuthorID

  constructor(private http: HttpClient) {}

  getFinancialProducts(
    page: number = 1,
    pageSize: number = 5
  ): Observable<PaginatedFinancialProducts> {
    const headers = new HttpHeaders({
      authorId: this.authorId,
    });
    return this.http.get<ApiResponseItem[]>(this.baseUrl, { headers }).pipe(
      map(FinancialProduct.fromApiResponse),

      map((products) => {
        const totalRecords = products.length;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedProducts = products.slice(start, end);
        return {
          products: paginatedProducts,
          totalRecords: totalRecords,
        };
      })
    );
  }
}
