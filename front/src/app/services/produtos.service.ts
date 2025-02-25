import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  URL = 'http://localhost:8081/produtos';

  constructor(private http: HttpClient) {}


}
