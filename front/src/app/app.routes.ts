import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoCadastroComponent } from './pages/produto/produto-cadastro/produto-cadastro.component';
import { ProdutoEditarComponent } from './pages/produto/produto-editar/produto-editar.component';
import { ProdutosViewComponent } from './pages/produto/produtos-view/produtos-view.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'produtos', component: ProdutosViewComponent},
  {path: 'produtosCreate', component: ProdutoCadastroComponent},
  {path: 'produtosUpdate/:id', component: ProdutoEditarComponent},

];
