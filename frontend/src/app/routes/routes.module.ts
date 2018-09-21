import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "products", component: ProductsComponent },
      { path: "", redirectTo: "products", pathMatch: "full" },
      { path: "**", redirectTo: "products", pathMatch: "full" }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
