import { Component } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { Router } from '@angular/router';
import { FormularioComponent } from '../../../components/formulario/formulario.component';
import { Produtos } from '../../../models/Produtos';

@Component({
  selector: 'app-produto-cadastro',
  imports: [FormularioComponent],
  templateUrl: './produto-cadastro.component.html',
  styleUrl: './produto-cadastro.component.css'
})
export class ProdutoCadastroComponent {


  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Produto"


  constructor(private produtoService: ProdutosService, private router: Router,){};

  criarProdutos(produto : Produtos){
    console.log("Cadastrou")
    this.produtoService.CriarProduto(produto).subscribe(produto =>{
      this.router.navigate(['/']);
    })

  }

}
