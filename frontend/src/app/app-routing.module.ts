import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent},
    {
      path: 'products',
      component: ProductCrudComponent,
    },
    {
      path: 'product/create',
      component: ProductCreateComponent,
    },
    {
      path: 'product/update/:id',
      component: ProductUpdateComponent,
    },
    {
      path: 'product/delete/:id',
      component: ProductDeleteComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
