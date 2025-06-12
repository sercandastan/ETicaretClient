import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carts } from './carts';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Carts
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component : Carts}
    ])
  ]
})
export class CartsModule { }
