import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../../models/Produtos';
import { ProdutosService } from '../../../services/produtos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos-view',
  imports: [RouterModule],
  templateUrl: './produtos-view.component.html',
  styleUrl: './produtos-view.component.css'
})
export class ProdutosViewComponent implements OnInit{

  produtos: Produtos[] = [];
  produtosGeral: Produtos[] = [];

  constructor(private produtoService: ProdutosService){}


  ngOnInit(): void {

    this.produtoService.list().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(produtos);
    })
  }

  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.produtos = this.produtosGeral.filter(produto => {
      return produto.descricao.toLowerCase().includes(value);
    });
  }

  deletar(id:number | undefined){
    this.produtoService.delete(id).subscribe(produto => {
      window.location.reload()
    })
}
}
