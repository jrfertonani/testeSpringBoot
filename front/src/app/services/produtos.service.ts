import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produtos } from '../models/Produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  http = inject(HttpClient);

  URL = 'http://localhost:8081/produtos';

  constructor() {}

  list(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.URL);
  }

  delete(id:number | undefined) : Observable<Produtos>{
    return this.http.delete<Produtos>(`${this.URL}/${id}`);
  }


  CriarProduto(produto: Produtos) : Observable<Produtos[]>{
    return this.http.post<Produtos[]>(this.URL,produto);
  }


  getProdutoId(id:number): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.URL}/${id}`);
  }

  editarProduto(produto : Produtos): Observable <Produtos>{
    return this.http.put<Produtos>(this.URL,produto);
  }

}
