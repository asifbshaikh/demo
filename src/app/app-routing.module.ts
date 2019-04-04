import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'product/new', component: AddProductComponent },
  { path: 'product/edit', component: EditProductComponent},
  { path: 'Products', component: ListProductComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent =  [AddProductComponent, EditProductComponent, ListProductComponent, LoginComponent]