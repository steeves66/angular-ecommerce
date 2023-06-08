import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map }  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8090/api/products'

  constructor(private httpClient: HttpClient) {
    this.getProductList()
   }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.product)
    )
  }
}

// Unwraps the JSON from Spring Data Rest to Product array
interface GetResponse {
  _embedded: {
    product: Product[]
  }
}