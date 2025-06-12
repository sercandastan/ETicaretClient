import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { Dashboard } from './admin/components/dashboard/dashboard';
import { Home } from './ui/components/home/home';

const routes: Routes = [
  {
    path: "admin", component : Layout, children:[
      {path:"", component:Dashboard},
      {path: "customers", loadChildren : ()=> import("./admin/components/customers/customers-module").then
        (module => module.CustomersModule)},
      {path: "products", loadChildren : ()=> import("./admin/components/products/products-module").then
        (module => module.ProductsModule)},
      {path: "orders", loadChildren : ()=> import("./admin/components/orders/orders-module").then
        (module => module.OrdersModule)}
    ] 

  },
  {path: "", component: Home},
  {path:"carts", loadChildren : ()=> import("./ui/components/carts/carts-module").then(module => module.CartsModule)},
  {path: "products", loadChildren: ()=> import("./ui/components/products/products-module").then(module => module.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
