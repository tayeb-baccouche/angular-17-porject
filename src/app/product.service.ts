import { Injectable } from '@angular/core';
import { environment } from '../environements/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Method to get product data by ID
  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.apiUrl+'/products/'}${productId}`);
  }
}
