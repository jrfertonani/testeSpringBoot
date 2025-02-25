import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosViewComponent } from './components/produtos/produtos-view/produtos-view.component';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component';
import { ProdutosUpdateComponent } from './components/produtos/produtos-update/produtos-update.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'produtos', component: ProdutosViewComponent},
  {path: 'produtosCreate', component: ProdutosCreateComponent},
  {path: 'produtosUpdate/:id', component: ProdutosUpdateComponent},

];
