import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoDetalhesComponent } from './pages/produto/produto-detalhes/produto-detalhes.component';
import { ProdutoCadastroComponent } from './pages/produto/produto-cadastro/produto-cadastro.component';
import { ProdutoEditarComponent } from './pages/produto/produto-editar/produto-editar.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'produtos', component: ProdutoDetalhesComponent},
  {path: 'produtosCreate', component: ProdutoCadastroComponent},
  {path: 'produtosUpdate/:id', component: ProdutoEditarComponent},

];
