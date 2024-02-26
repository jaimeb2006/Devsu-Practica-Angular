// financial-products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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
    pageSize: number = 5,
    searchTerm: string = ''
  ): Observable<PaginatedFinancialProducts> {
    const headers = new HttpHeaders({
      authorId: this.authorId,
    });
    return this.http.get<ApiResponseItem[]>(this.baseUrl, { headers }).pipe(
      map(FinancialProduct.fromApiResponse),
      map((products) => {
        if (searchTerm) {
          products = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
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

  checkIfIdExists(id: string): Observable<boolean> {
    const headers = new HttpHeaders({ authorId: this.authorId });
    const params = new HttpParams().set('id', id);
    const verificationUrl = `${this.baseUrl}/verification`;

    return this.http.get<boolean>(verificationUrl, { headers, params }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        console.error('Error checking if ID exists:', error);
        return of(false); // Asegura que siempre devuelvas un Observable<boolean>
      })
    );
  }

  addFinancialProduct(product: FinancialProduct): Observable<FinancialProduct> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorId: this.authorId, // Asegúrate de que el backend requiere este header y ajusta según sea necesario
    });

    return this.http.post<FinancialProduct>(
      this.baseUrl,
      FinancialProduct.toDict(product),
      { headers }
    );
  }
}
