import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../../models/Produtos';
import { ProdutosService } from '../../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from '../../../components/formulario/formulario.component';

@Component({
  selector: 'app-produto-editar',
  imports: [FormularioComponent, CommonModule],
  templateUrl: './produto-editar.component.html',
  styleUrl: './produto-editar.component.css'
})
export class ProdutoEditarComponent implements OnInit {

  btnAcao = "Editar";
  descTitulo = "Editar Produto";

  produtos! : Produtos;


  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router){};


  ngOnInit(): void {

    console.log(1)

    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.produtoService.getProdutoId(id).subscribe(produtos => {
      console.log(2);
      this.produtos = produtos;
    } )

  }

    editarProduto(produtos: Produtos){
    this.produtoService.editarProduto(produtos).subscribe(produtos => {
      this.router.navigate(['/produtos']);
    })

  }

}
